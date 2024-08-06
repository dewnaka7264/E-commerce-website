import './ProductDisplay.css'

import React from 'react';
import product from "../Product";

function ProductDisplay(props) {
    const {product} =props;
    return (
        <div className='productDisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>

                    <img src={product.image} alt=''></img>
                    <img src={product.image} alt=''></img>
                    <img src={product.image} alt=''></img>
                    <img src={product.image} alt=''></img>
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt=''></img>

                </div>


            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-price'> ${product.newPrice}</div>
                <div className='productdisplay-description'>{product.description}</div>

                <div className='productdisplay-size'>
                    <h4>Select Size</h4>
                    <div className='right-size-icon'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button className='AddtoCartButton'> Add to Cart</button>
            </div>



        </div>
    );
}

export default ProductDisplay;