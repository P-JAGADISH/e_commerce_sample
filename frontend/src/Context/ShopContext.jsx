import React,{createContext} from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext= createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
}
export default ShopContextProvider;

// end to end 
// zainkeepscode
// edroh
// developers corner
// techinfo yt
// net ninja ,clever programer, free code camp , travercy media , dave gray 
// akshay saini
