import React, { createContext, useState, useEffect } from "react";
import all_products from "../all_products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(all_products);
    }, []);

    const contextValue = { all_products: products };
    console.log('Context Value:', contextValue); // Debugging

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
