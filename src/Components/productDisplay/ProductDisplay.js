import './ProductDisplay.css'

import React from 'react';
import product from "../Product";
import ReviewsSection from "../ReviewsSection/ReviewsSection";

function ProductDisplay(props) {
    const {product} =props;
    return (
        <div>
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
                    <div className='productdisplay-quantity'>
                        <h4>Quantity</h4>
                        <input type='number' min='1' defaultValue='1' className='quantity-input' />
                    </div>
                </div>
                <button className='AddtoCartButton'> Add to Cart</button>
            </div>




        </div>
            <ReviewsSection/>
        </div>

    );
}

export default ProductDisplay;