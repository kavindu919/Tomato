import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {
  //access for this function defined in Storecontext using context
  const { cartItems, addTocart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt="foodimage"
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addTocart(id)}
            src={assets.add_icon_white}
            alt="add icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove icon"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addTocart(id)}
              src={assets.add_icon_green}
              alt="add icon green"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">$ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
