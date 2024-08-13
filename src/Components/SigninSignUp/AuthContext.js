// src/Context/AuthContext.js
import React, { createContext, useState } from 'react';
import {auth, signOut} from "../../firebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
    return (
        <AuthContext.Provider value={{ user, setUser,handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
