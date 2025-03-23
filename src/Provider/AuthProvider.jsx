import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');

    const createUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUserWithEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInUserWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
       return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (newuser) => {
            setUser(newuser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])


    const authInfo = {
        user,
        email,
        loading,
        logOut,
        setUser,
        setEmail,
        setLoading,
        createUserWithGoogle,
        createUserWithEmailAndPass,
        signInUserWithEmailAndPass
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;