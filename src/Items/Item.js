import React from 'react';
import "./Item.css"
import {Link} from "react-router-dom";

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img className='image' src ={props.image} alt=''></img></Link>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-prices-new'>
                    ${props.newPrice}
                </div>
                <div className='item-prices-old'>
                    ${props.oldPrice}

                </div>
            </div>


        </div>
    );
};

export default Item;