import React, {createContext,useContext} from "react";
import all_products from "../allproducts";
export const ShopContext = createContext(null);

const ShopContextProvider =(props)=>{
    const contextValue = {all_products};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;