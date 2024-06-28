import React from 'react';

const Item = (props) => {
    return (
        <div className='item'>
            <img src ={props.image} alt=''></img>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-prices-new'>
                    {props.new_price}
                </div>
                <div className='item-prices-new'>
                    {props.old_price}

                </div>
            </div>


        </div>
    );
};

export default Item;