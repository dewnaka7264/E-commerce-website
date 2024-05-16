import React from 'react';
import './Navbar.css';

import cart from '../Media/cart.png';
import gymshark from '../Media/Gymshark-Logo-700x394.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={gymshark} alt="gymshark" />
        <p>GymShark</p>
      </div>
      <ul className="nav-menu">
        <li>WOMEN</li>
        <li>MEN</li>
        <li>ACCESSORIES</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt='cart'/>
      </div>
    </div>

  );
}
