import React from 'react';
import './NavBar.css';

import logo from './Media/cart.png';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-logo"> {/* Corrected syntax */}
        <img src={logo} alt="cart" />
        <p>SHOPPER</p>
      </div>
    </div>
  );
}
