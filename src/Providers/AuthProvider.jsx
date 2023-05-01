import React, { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "../FireBase/firebase.init";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    const createUser = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        SetLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        SetLoading(true);

        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            SetLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
