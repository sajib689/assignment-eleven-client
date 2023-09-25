import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from './../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const registerWithForm = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithForm = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
          if(currentUser && currentUser.email) {
            const loggedUser = {
                email: currentUser.email
            }
            fetch('https://assignment-eleven-server-r1xu.vercel.app/jwt',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
            .then( res => res.json())
            .then( data => {
                localStorage.setItem('token', data.token)
            });
          } else {
            localStorage.removeItem('token')
          }
        })
        return () => {
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        registerWithForm,
        loginWithForm,
        googleLogin,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;