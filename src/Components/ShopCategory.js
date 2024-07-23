import React, { useContext } from 'react';
import './ShopCategory.css';
import { ShopContext } from './Context/ShopContext.js';
import Item from '../Items/Item';

const ShopCategory = (props) => {
    const context = useContext(ShopContext);
    const { all_products = [] } = context || {};
    console.log('Context:', context); // Debugging
    console.log('All Products:', all_products); // Debugging

    if (!context) {
        return <div>Loading...</div>;
    }

    return (
        <div className='shop-category'>
            {all_products.map((item, i) => {
                if (props.category === item.category) {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            newPrice={item.newPrice}
                            oldPrice={item.oldPrice}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default ShopCategory;
