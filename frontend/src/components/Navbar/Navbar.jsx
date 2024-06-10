import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  //make state for the active link
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src="logo.png" alt="logo" width={90} className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("About")}
          className={menu === "About" ? "active" : ""}
        >
          About
        </li>
        <li
          onClick={() => setMenu("  Contact Us")}
          className={menu === "  Contact Us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src="search_icon.png" alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src="basket_icon.png" alt="basket" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
