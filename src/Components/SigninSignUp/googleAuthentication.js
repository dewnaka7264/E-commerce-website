import React, {useContext} from 'react';
import { auth, provider, signInWithPopup, signOut } from "../../firebaseConfig";
import './LoginSignup.css'
import { FaGoogle} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";

const GoogleAuthentication = () => {

    const navigate =useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            navigate('/');
        } catch (error) {
            console.error('Error during login: ', error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName}</h2>
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
