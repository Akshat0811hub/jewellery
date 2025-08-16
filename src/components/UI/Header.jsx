import React, { useState, useEffect } from "react";
import "../../css/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo1 from "../../assets/logo1.png";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && !event.target.closest('.navbar')) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [show]);

  // Handle scroll effect (optional)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <NavLink to="/" onClick={() => setShow(false)}>
          <img src={logo1} alt="Logo" />
        </NavLink>
      </div>

      <div className="main-list">
        {/* Desktop Menu */}
        <nav className="menu-web">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="nav-link-with-icon" activeClassName="active">
                Shop
                <FaCaretDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <nav className={show ? "menu-mobile show" : "menu-mobile"}>
          {/* Mobile Search Bar */}
          <div className="mobile-search">
            <div className="group">
              <input 
                placeholder="Search products..." 
                type="search" 
                className="input" 
                aria-label="Search"
              />
            </div>
          </div>
          
          <ul>
            <li>
              <NavLink to="/" onClick={handleButtonToggle} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" onClick={handleButtonToggle} className="nav-link-with-icon" activeClassName="active">
                Shop
                <FaCaretDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleButtonToggle} activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={handleButtonToggle} activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleButtonToggle} activeClassName="active">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="icons">
          {/* Desktop Search Bar */}
          <div className="group">
            <input 
              placeholder="Search" 
              type="search" 
              className="input" 
              aria-label="Search"
            />
          </div>

          {/* Heart Icon */}
          <div className="heart-wrapper" role="button" tabIndex="0" aria-label="Wishlist">
            <FiHeart className="icon" />
          </div>

          {/* Cart Icon */}
          <div className="cart-wrapper" role="button" tabIndex="0" aria-label="Shopping Cart">
            <FiShoppingCart className="icon" />
          </div>
        </div>

        {/* Login Button */}
        <div className="login-btn">
          <NavLink to="/login">
            <button className="button-52" role="button">
              Login
            </button>
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <div className={`ham-menu ${show ? "menu-open" : ""}`}>
          <button 
            onClick={handleButtonToggle} 
            aria-label={show ? "Close menu" : "Open menu"}
            aria-expanded={show}
          >
            {show ? "" : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
