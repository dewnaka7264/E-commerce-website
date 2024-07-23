import React from 'react';
import "./Item.css"

const Item = (props) => {
    return (
        <div className='item'>
            <img className='image' src ={props.image} alt=''></img>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-prices-new'>
                    {props.newPrice}
                </div>
                <div className='item-prices-new'>
                    {props.oldPrice}

                </div>
            </div>


        </div>
    );
};

export default Item;