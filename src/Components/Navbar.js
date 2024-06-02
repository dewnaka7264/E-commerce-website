import React, { useState } from 'react';
import './Navbar.css';

import cart from '../Media/cart.png';
import gymshark from '../Media/Gymshark-Logo-700x394.png';

const Navbar = () => {
    const [selectedPage, setSelectedPage] = useState('home');

    const handleNavClick = (page) => {
        setSelectedPage(page);
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
                <img src={gymshark} alt="gymshark" />
                <p>GymShark</p>
            </div>
            <ul className="nav-menu">
                <li className={getClassName('women')} onClick={() => handleNavClick('women')}>WOMEN</li>
                <li className={getClassName('men')} onClick={() => handleNavClick('men')}>MEN</li>
                <li className={getClassName('accessories')} onClick={() => handleNavClick('accessories')}>ACCESSORIES</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart} alt='cart'/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
