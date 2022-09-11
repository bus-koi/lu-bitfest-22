// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_nvmxwLZ5L9e3PE6RC3KYKX5yXBYPGuM",
    authDomain: "next-curd.firebaseapp.com",
    projectId: "next-curd",
    storageBucket: "next-curd.appspot.com",
    messagingSenderId: "267371162826",
    appId: "1:267371162826:web:1885400a2aee434e27d833",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function logout() {
    return signOut(auth);
}

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    return signInWithPopup(auth, provider);
};
