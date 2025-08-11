import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Service Bar */}
      <div className="footer-top">
        <div className="service">
          <img src="/icons/shipping.svg" alt="Free Shipping" />
          <div>
            <h4>Free Shipping</h4>
            <p>Free shipping for order above $150</p>
          </div>
        </div>
        <div className="service">
          <img src="/icons/money.svg" alt="Money Guarantee" />
          <div>
            <h4>Money Guarantee</h4>
            <p>Within 30 days for an exchange</p>
          </div>
        </div>
        <div className="service">
          <img src="/icons/support.svg" alt="Online Support" />
          <div>
            <h4>Online Support</h4>
            <p>24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className="service">
          <img src="/icons/payment.svg" alt="Flexible Payment" />
          <div>
            <h4>Flexible Payment</h4>
            <p>Pay with multiple credit cards</p>
          </div>
        </div>
      </div>

      {/* Middle Footer */}
      <div className="footer-middle">
        <div className="footer-info">
          <h2 className="logo">Navi <span>Jewelry</span></h2>
          <p>EST. 1985</p>
          <p><FaPhoneAlt /> (405) 555-0128</p>
          <p><FaEnvelope /> Navi@example.com</p>
          <p><FaMapMarkerAlt /> Location here</p>
        </div>

        <div className="footer-links">
          <h4>Category</h4>
          <ul>
            <li>Rings</li>
            <li>Necklaces</li>
            <li>Earrings</li>
            <li>Bracelet</li>
            <li>Diamond</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company Service</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Enter your email below to be the first to know about new collections.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your Email" />
            <button>→</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>©2024 Navi All Rights are reserved</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
