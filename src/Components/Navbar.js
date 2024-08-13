import React, {useContext, useState} from 'react';
import './NavBar.css';

import cart from '../Media/cart.png';
import gymshark from '../Media/Gymshark-Logo-700x394.png';

import {Link} from "react-router-dom";
import {AuthContext} from "./SigninSignUp/AuthContext";


const Navbar = ({totalItemsCount}) => {

    const[menu,setMenu] =useState("shop");
    const { user } = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to ='/'><img src={gymshark} alt='gymsharklogo'></img></Link>

                <p>GymShark</p>
            </div>
            <ul className="nav-menu">
                <li  onClick={() => {setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu==="shop"?<h/>:<></>}</li>
                <li  onClick={() => {setMenu('women')}}><Link style={{textDecoration:'none'}} to='/women'>WOMEN</Link>{menu==="women"?<h/>:<></>}</li>
                <li  onClick={() => {setMenu('men')}}><Link style={{textDecoration:'none'}} to='/men'>MEN</Link>{menu==="men"?<h/>:<></>}</li>
                <li  onClick={() => {setMenu('accessories')}}><Link style={{textDecoration:'none'}} to='/accessories'>ACCESSORIES</Link> {menu==="accessories"?<h/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">

                {user ? (
                    <div className="navbar-user">
                        <img src={user.photoURL} alt="User" className="user-avatar" />
                        <span>{user.displayName}</span>
                    </div>
                ) : (
                    <Link to='/LoginSignup'><button>Login</button></Link>
                )}

                <Link to ='/Cart'><img src={cart} alt='cart'/></Link>
                <div className="nav-cart-count">{totalItemsCount}</div>

            </div>
        </div>
    );
};

export default Navbar;
