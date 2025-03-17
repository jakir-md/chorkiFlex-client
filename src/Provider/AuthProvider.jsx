import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const createUserWithEmailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInUserWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const authInfo = {
        user,
        setUser,
        loading,
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