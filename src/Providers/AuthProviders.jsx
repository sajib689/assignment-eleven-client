import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from './../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const registerWithForm = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithForm = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
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
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;