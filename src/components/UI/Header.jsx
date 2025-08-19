import React, { useState, useEffect } from "react";
import "../../css/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo1 from "../../assets/logo1.png";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  // Shop categories and their subcategories
  const shopCategories = {
    All:{
        name: "All Products"
    },
    rings: {
      name: "Rings",
      subcategories: [
        "All Rings",
        "Shop by Price",
        "Under 1500",
        "1500 to 3000",
        "3000 to 5000",
        "Above 5000",
        "Shop by Metal",
        "925 Silver",
        "Pure Gold",
        "Shop by Colour",
        "Silver",
        "Gold Plated",
        "Rose Gold",
        "Oxidised",
        "Shop by Style",
        "Everyday",
      ],
    },
    bracelets: {
      name: "Bracelets",
      subcategories: [
        "All Bracelets",
        "Shop by Price",
        "Under 1500",
        "1500 to 3000",
        "3000 to 5000",
        "Above 5000",
        "Shop by Metal",
        "925 Silver",
        "Pure Gold",
        "Shop by Colour",
        "Silver",
        "Gold Plated",
        "Rose Gold",
        "Oxidised",
        "Shop by Style",
        "Everyday",
      ],
    },
    earrings: {
      name: "Earrings",
      subcategories: [
        "All Earrings",
        "Shop by Price",
        "Under 1500",
        "1500 to 3000",
        "3000 to 5000",
        "Above 5000",
        "Shop by Metal",
        "925 Silver",
        "Pure Gold",
        "Shop by Colour",
        "Silver",
        "Gold Plated",
        "Rose Gold",
        "Oxidised",
        "Shop by Style",
        "Everyday",
      ],
    },
    anklets: {
      name: "Anklets",
      subcategories: [
        "All Anklets",
        "Shop by Price",
        "Under 1500",
        "1500 to 3000",
        "3000 to 5000",
        "Above 5000",
        "Shop by Metal",
        "925 Silver",
        "Pure Gold",
        "Shop by Colour",
        "Silver",
        "Gold Plated",
        "Rose Gold",
        "Oxidised",
        "Shop by Style",
        "Everyday",
      ],
    },
    necklace: {
      name: "Necklace",
      subcategories: [
        "All Necklaces",
        "Shop by Price",
        "Under 1500",
        "1500 to 3000",
        "3000 to 5000",
        "Above 5000",
        "Shop by Metal",
        "925 Silver",
        "Pure Gold",
        "Shop by Colour",
        "Silver",
        "Gold Plated",
        "Rose Gold",
        "Oxidised",
        "Shop by Style",
        "Everyday",
      ],
    },
    pendants: {
      name: "Pendants",
      subcategories: [
        "All Pendants",
        "Shop by Price",
        "Under 1500",
        "1500 to 3000",
        "3000 to 5000",
        "Above 5000",
        "Shop by Metal",
        "925 Silver",
        "Pure Gold",
        "Shop by Colour",
        "Silver",
        "Gold Plated",
        "Rose Gold",
        "Oxidised",
        "Shop by Style",
        "Everyday",
      ],
    },
  };

  const handleButtonToggle = () => {
    setShow(!show);
  };

  const handleShopDropdownToggle = () => {
    setShopDropdown(!shopDropdown);
    setActiveSubDropdown(null); // Reset sub dropdown when main dropdown toggles
  };

  const handleSubDropdownToggle = (category) => {
    setActiveSubDropdown(activeSubDropdown === category ? null : category);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && !event.target.closest(".navbar")) {
        setShow(false);
      }
      if (!event.target.closest(".shop-dropdown-container")) {
        setShopDropdown(false);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show, shopDropdown]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left Group: Hamburger and Logo */}
      <div className="left-group">
        <div className={`ham-menu ${show ? "menu-open" : ""}`}>
          <button
            onClick={handleButtonToggle}
            aria-label={show ? "Close menu" : "Open menu"}
            aria-expanded={show}
          >
            {show ? "" : <GiHamburgerMenu />}
          </button>
        </div>
        <div className="logo">
          <NavLink to="/" onClick={() => setShow(false)}>
            <img src={logo1} alt="Logo" />
          </NavLink>
        </div>
      </div>

      {/* Main menu (Desktop) */}
      <div className="main-list">
        <nav className="menu-web">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="shop-dropdown-container">
              <div
                className="nav-link-with-icon"
                onClick={handleShopDropdownToggle}
                style={{ cursor: "pointer" }}
              >
                <NavLink to="/shop" activeClassName="active">
                  Shop <FaCaretDown className={shopDropdown ? "rotated" : ""} />
                </NavLink>
                
              </div>

              {/* Desktop Dropdown Menu */}
              {shopDropdown && (
                <div className="shop-dropdown">
                  <div className="dropdown-content">
                    {Object.entries(shopCategories).map(([key, category]) => (
                      <div key={key} className="dropdown-item-container">
                        <div className="dropdown-item">
                          <div
                            className="category-link"
                            onClick={() => handleSubDropdownToggle(key)}
                          >
                            <NavLink to={`/shop/${key}`}>
                              {category.name}
                            </NavLink>
                            {category.subcategories && (
                              <FaCaretRight 
                                className={`submenu-arrow ${
                                  activeSubDropdown === key ? "rotated" : ""
                                }`} 
                              />
                            )}
                          </div>

                          {/* Nested Submenu */}
                          {activeSubDropdown === key && category.subcategories && (
                            <div className="submenu">
                              {category.subcategories.map((subcategory, index) => (
                                <div key={index} className="submenu-item">
                                  <NavLink
                                    to={`/shop/${key}/${subcategory
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="submenu-link"
                                    onClick={() => {
                                      setShopDropdown(false);
                                      setActiveSubDropdown(null);
                                    }}
                                  >
                                    {subcategory}
                                  </NavLink>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Group: Search, Icons, and Login */}
      <div className="right-group">
        <div className="search-group">
          <input
            placeholder="Search"
            type="search"
            className="input"
            aria-label="Search"
          />
          <FiSearch className="search-icon" />
        </div>

        <div className="icons">
          <div
            className="heart-wrapper"
            role="button"
            tabIndex="0"
            aria-label="Wishlist"
          >
            <FiHeart className="icon" />
          </div>
          <div
            className="cart-wrapper"
            role="button"
            tabIndex="0"
            aria-label="Shopping Cart"
          >
            <FiShoppingCart className="icon" />
          </div>
        </div>

        <div className="login-btn">
          <NavLink to="/login">
            <button className="button-52" role="button">
              Login
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={show ? "menu-mobile show" : "menu-mobile"}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={handleButtonToggle}
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <div className="mobile-dropdown-item">
              <div
                className="mobile-category-header"
                onClick={() => handleSubDropdownToggle("shop")}
              >
                <NavLink
                  to="/shop"
                  className="nav-link-with-icon"
                  activeClassName="active"
                >
                  Shop
                </NavLink>
                <FaCaretDown
                  className={`mobile-dropdown-arrow ${
                    activeSubDropdown === "shop" ? "rotated" : ""
                  }`}
                />
              </div>

              {/* Mobile Shop Dropdown */}
              {activeSubDropdown === "shop" && (
                <div className="mobile-submenu">
                  {Object.entries(shopCategories).map(([key, category]) => (
                    <div key={key} className="mobile-submenu-item">
                      <div
                        className="mobile-subcategory-header"
                        onClick={() => handleSubDropdownToggle(key)}
                      >
                        <NavLink
                          to={`/shop/${key}`}
                          onClick={handleButtonToggle}
                        >
                          {category.name}
                        </NavLink>
                        <FaCaretRight
                          className={`mobile-submenu-arrow ${
                            activeSubDropdown === key ? "rotated" : ""
                          }`}
                        />
                      </div>

                      {activeSubDropdown === key && category.subcategories && (
                        <div className="mobile-nested-submenu">
                          {category.subcategories.map((subcategory, index) => (
                            <div key={index} className="mobile-nested-item">
                              <NavLink
                                to={`/shop/${key}/${subcategory
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                onClick={handleButtonToggle}
                              >
                                {subcategory}
                              </NavLink>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={handleButtonToggle}
              activeClassName="active"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={handleButtonToggle}
              activeClassName="active"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleButtonToggle}
              activeClassName="active"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={handleButtonToggle}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;