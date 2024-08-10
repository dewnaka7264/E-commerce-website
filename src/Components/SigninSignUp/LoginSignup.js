import React from 'react';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa'; // Import React icons
import { HiExternalLink } from 'react-icons/hi'; // Feide icon or use a suitable icon
import './LoginSignup.css'
const LoginSignup = () => {
    return (
        <div className="login-container">
            <h2>Log In</h2>
            <p>Don't have an account?<span className='signup'>   Sign Up</span></p>

            <div className="social-login">
                <button className="social-button google">
                    <FaGoogle /> Google
                </button>
                <button className="social-button facebook">
                    <FaFacebookF /> Facebook
                </button>
                <button className="social-button github">
                    <FaGithub /> GitHub
                </button>

            </div>

            <p className="or-divider">OR</p>

            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" required />
                </div>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
};

export default LoginSignup;