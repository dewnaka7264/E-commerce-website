import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className='social-icons'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon"> <FaTwitter
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
        </div>

    );
};

export default Footer;
