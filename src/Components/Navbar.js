import React, { useState } from 'react';
import './Navbar.css';

import cart from '../Media/cart.png';
import gymshark from '../Media/Gymshark-Logo-700x394.png';

import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import {Link} from "react-router-dom";


const Navbar = () => {
    const [selectedPage, setSelectedPage] = useState('home');

    const handleNavClick = (page) => {
        setSelectedPage(page);
    };
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            alert(`Login successful! Welcome ${result.user.displayName}`);
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };

    const getClassName = (page) => {
        let className = 'nav-item';
        if (selectedPage === page) {
            className += ' selected';
        }
        return className;
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link style={{textDecoration:'none'}} to='/Home'><img src={gymshark} alt="gymshark" /></Link>
                <p>GymShark</p>
            </div>
            <ul className="nav-menu">
                <li className={getClassName('women')} onClick={() => handleNavClick('women')}><Link style={{textDecoration:'none'}} to='/Women'>WOMEN</Link></li>
                <li className={getClassName('men')} onClick={() => handleNavClick('men')}><Link style={{textDecoration:'none'}} to='/Men'>MEN</Link></li>
                <li className={getClassName('accessories')} onClick={() => handleNavClick('accessories')}><Link style={{textDecoration:'none'}} to='/Accessories'>ACCESSORIES</Link></li>
            </ul>
            <div className="nav-login-cart">
                <button onClick={handleGoogleLogin}>Login</button>
                <Link to ='/Cart'><img src={cart} alt='cart'/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
