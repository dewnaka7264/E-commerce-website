// src/NewReleases.js
import React from 'react';
import './NewReleases.css';


const Button = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>;
};

const NewReleases = () => {
    return (
        <div className="new-releases">
            <h1>New Releases</h1>
            <p>Check out the latest arrivals in our gym clothing collection.</p>
            <div ><button className='buttonReleases'>Products</button></div>
        </div>
    );
};

export default NewReleases;
