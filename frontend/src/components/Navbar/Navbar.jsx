import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  //make state for the active link
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src="logo.png" alt="logo" width={90} className="logo" />
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
          <img src="basket_icon.png" alt="basket" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
