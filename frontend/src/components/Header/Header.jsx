import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="heder-contents">
        <h2>Order your favourite foods here</h2>
        <p>
          Welcome to Tomato! Explore our flavorful menu and inviting atmosphere
          – your next delicious meal awaits.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
