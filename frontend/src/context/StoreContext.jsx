import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

// Create the provider component
const StoreContextProvider = (props) => {
  //make use sate for cart items
  const [cartItems, setcartItems] = useState({});

  //add to cart function
  const addTocart = (itemId) => {
    //add new item
    if (!cartItems[itemId]) {
      //get privious value and add the new pair of data
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      //already in the cart then incease that
      setcartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    }
  };
  //remove form cart
  const removeFromCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
  };
  //function cart total
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    //cartItems are objects henece this kind of for loop used
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setcartItems,
    addTocart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
