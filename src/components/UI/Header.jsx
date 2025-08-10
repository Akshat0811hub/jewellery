import React, { useState } from "react";
import "../../css/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo1 from "../../assets/logo1.png";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo1} alt="" />
        </NavLink>
      </div>

      <div className="main-list">
        <nav className={show ? "menu-mobile" : "menu-web"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="nav-link-with-icon">
                Shop
                <FaCaretDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        {/* ✅ Icons added here */}
        <div className="icons">
          <div className="group">
            <input placeholder="Search" type="search" className="input" />
          </div>

          {/* ❤️ Heart Icon */}
          <div className="heart-wrapper">
            <FiHeart className="icon" />
          </div>

          {/* 🛒 Cart Icon */}
          <div className="cart-wrapper">
            <FiShoppingCart className="icon" />
          </div>
        </div>

        {/* 🔐 Login Button */}
        <div className="login-btn">
          <NavLink to="/login">
            {/* <button className="login">Login</button> */}
            <button className="button-52" role="button">Login</button>
          </NavLink>
        </div>

        <div className="ham-menu">
          <button onClick={handleButtonToggle}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
