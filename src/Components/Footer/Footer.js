import React from 'react';
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import './Footer.css'
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
        <div className='social-icons'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon"> <FaXTwitter
                size={30}/></a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon"> <FaFacebook
                size={30}/></a>


            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon"> <FaInstagram
                size={30}/></a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon"> <FaLinkedin
                size={30}/></a>


        </div>
    <div className="footer-content" >
        <p> &copy; 2024 GYMSHARK. All rights reserved.</p>
    </div>
        </footer>

    );
};

export default Footer;
