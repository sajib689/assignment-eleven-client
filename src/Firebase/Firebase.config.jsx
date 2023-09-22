// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7dpS4GfD40z8OxQOMh4KCRPxjmmyBUVc",
  authDomain: "assignment-eleven-client-22ad5.firebaseapp.com",
  projectId: "assignment-eleven-client-22ad5",
  storageBucket: "assignment-eleven-client-22ad5.appspot.com",
  messagingSenderId: "446305114463",
  appId: "1:446305114463:web:fa058c0b7fe44e547d7eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app