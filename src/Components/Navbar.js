import React, { useState } from 'react';
import './Navbar.css';

import cart from '../Media/cart.png';
import gymshark from '../Media/Gymshark-Logo-700x394.png';

import {Link} from "react-router-dom";


const Navbar = () => {

const[menu,setMenu] =useState("shop");


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={gymshark}></img>

                <p>GymShark</p>
            </div>
            <ul className="nav-menu">
                <li  onClick={() => {setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu==="shop"?<h/>:<></>}</li>
                <li  onClick={() => {setMenu('women')}}><Link style={{textDecoration:'none'}} to='/women'>WOMEN</Link>{menu==="women"?<h/>:<></>}</li>
                <li  onClick={() => {setMenu('men')}}><Link style={{textDecoration:'none'}} to='/men'>MEN</Link>{menu==="men"?<h/>:<></>}</li>
                <li  onClick={() => {setMenu('accessories')}}><Link style={{textDecoration:'none'}} to='/accessories'>ACCESSORIES</Link> {menu==="accessories"?<h/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to ='/Cart'><img src={cart} alt='cart'/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
