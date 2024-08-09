import './ProductDisplay.css'

import React, {useState} from 'react';
import Product from "../Product";

import ReviewsSection from "../ReviewsSection/ReviewsSection";
function ProductDisplay({addToCart,product}) {
    // const {product} =props;

    const handleAddToCart = () => {
        if (selectedSize && quantity > 0) {
            addToCart(product, quantity, selectedSize);
        } else {
            console.log('Please select a size and quantity');
        }
    };
    const [selectedSize,setSelectedSize] =useState('');
    const [quantity,setQuantity] = useState(1);
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
                        <div onClick={() =>{ console.log('S'); setSelectedSize('S'); }}>S</div>
                        <div onClick={()=>{ console.log('M'); setSelectedSize('S'); }}>M</div>
                        <div onClick={()=>{ console.log('L'); setSelectedSize('S'); }}>L</div>
                        <div onClick={()=>{ console.log('XL'); setSelectedSize('S'); }}>XL</div>
                    </div>
                    <div className='productdisplay-quantity'>
                        <h4>Quantity</h4>
                        <input type='number' min='1' defaultValue='1' value={quantity} onChange={(e) => {console.log(quantity);setQuantity(parseInt(e.target.value))}} className='quantity-input' />
                    </div>
                </div>
                <button className='AddtoCartButton' onClick={()=>{console.log('handle Add to cart'); handleAddToCart();}}> Add to Cart</button>
            </div>




        </div>
            <ReviewsSection/>
        </div>

    );
}

export default ProductDisplay;