import React, {createContext,useContext} from "react";
import allproducts from "../allproducts";
export const ShopContext = createContext(null);

const ShopContextProvider =(props)=>{
    const contextValue = {allproducts};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;