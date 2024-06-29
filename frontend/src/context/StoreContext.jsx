import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

// Create the provider component
const StoreContextProvider = (props) => {
  //make use sate for cart items
  const [cartItems, setcartItems] = useState({});
  const url = "http://localhost:4000";

  //make use state for hold token
  const [token, setToken] = useState("");
  //make use state for hold data from database
  const [food_list, setFoodList] = useState([]);
  //add to cart function
  const addTocart = async (itemId) => {
    //add new item
    if (!cartItems[itemId]) {
      //get privious value and add the new pair of data
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      //already in the cart then incease that
      setcartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    }
    ///add to items for data base
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };
  //remove form cart
  const removeFromCart = async (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
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
  //fetch food list from data base
  const fetchFoodList = async () => {
    const res = await axios.get(url + "/api/food/list");
    setFoodList(res.data.data);
  };
  //get cartdata
  const loadCartData = async (token) => {
    const res = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setcartItems(res.data.cartData);
  };
  useEffect(() => {
    //make function to load data when page load
    async function loadData() {
      await fetchFoodList();
      //logic for the prevent log out while refreshing
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);
  const contextValue = {
    food_list,
    cartItems,
    setcartItems,
    addTocart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
