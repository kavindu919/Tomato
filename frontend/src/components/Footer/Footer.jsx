import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* left  */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            where culinary artistry meets exceptional service.
            <br /> Our mission is to provide a memorable dining
            <br /> experience with the finest ingredients and flavors
            <br /> from around the world.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkdin" />
          </div>
        </div>
        {/* center */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right */}
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>011 123456</li>
            <li>contacts@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copy Right ©️ Kavindu Jayakody - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
