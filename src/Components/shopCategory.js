import React, {useContext} from 'react';
// import './ShopCategory.css';
import shopContext, {ShopContext} from "./Context/ShopContext";
import Item from "../Items/Item";

const ShopCategory = (props) => {
    const {all_products} = useContext(shopContext);
    return (
        <div className='shop-category'>
            {all_products.map((item,i)=>{
                if (props.category===item.category){
                    return <Item key={i} id ={item.id} name={item.name} image ={item.image}/>

                }
                else{
                    return null;
                }
            })}
            
        </div>
    );
};

export default ShopCategory;