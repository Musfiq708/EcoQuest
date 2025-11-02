import React, { createContext, useEffect, useState } from 'react'
import { auth } from './../../assets/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const userRegistration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }


    useEffect(() => {
        const userSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            // setLoading(true);
            userSubscribe();
        }
    })
    const logIn = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);


    }
    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }
    const manageProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const handleGoogleLogin = () => {
        return signInWithPopup(
            auth,
            googleProvider
        )
    }
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email);
    }
    console.log(user)
    const authInfo = {
        user,
        userRegistration,
        logIn,
        logOut,
        manageProfile,
        handleGoogleLogin,
        loading,
        resetPassword,

    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}
