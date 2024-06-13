import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  //make state for the active link
  const [menu, setMenu] = useState("Home");
  //get total cart amount
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src="logo.png" alt="logo" width={90} className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          onClick={() => setMenu("About")}
          className={menu === "About" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("  Contact Us")}
          className={menu === "  Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src="search_icon.png" alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src="basket_icon.png" alt="basket" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
