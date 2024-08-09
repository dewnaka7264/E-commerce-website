
import React from 'react';
import './NewReleases.css';
import {Link} from "react-router-dom";


const Button = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>;
};

const NewReleases = () => {
    return (
        <div className="new-releases">
            <h1>New Releases</h1>
            <p>Check out the latest arrivals in our gym clothing collection.</p>
            <div>
                <Link style={{textDecoration:'none'}} to='/women'><button className='buttonReleases'>Products</button></Link>
            </div>
        </div>
    );
};

export default NewReleases;
