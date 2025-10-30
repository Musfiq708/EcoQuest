import React, { createContext, useEffect, useState } from 'react'
import { auth } from './../../assets/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const userRegistration = (email, password) => {

        return () => {
            createUserWithEmailAndPassword(auth, email, password)
                .then(res => {
                    signOut(auth);
                })
        }

    }


    useEffect(() => {

        const userSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            userSubscribe();
        }
    })
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);

    }
    const manageProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const handleGoogleLogin = () => {
        signInWithPopup(
            auth,
            googleProvider
        )
    }
    console.log(user)
    const authInfo = {
        user,
        userRegistration,
        logIn,
        logOut,
        manageProfile,
        handleGoogleLogin,

    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}
