import React, { useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from "../../firebaseConfig";
import './LoginSignup.css'
import { FaGoogle} from 'react-icons/fa';
const GoogleAuthentication = () => {
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error('Error during login: ', error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName}</h2>
                    <img src={user.photoURL} alt="User" />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin} className="social-button google">
                    <FaGoogle /> Google
                </button>
            )}
        </div>
    );
};

export default GoogleAuthentication;
