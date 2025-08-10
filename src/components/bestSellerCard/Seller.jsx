import React from "react";
import "./SellerCard.css";

const Seller = ({ image, title, oldPrice, newPrice, rating }) => {
  return (
    <div className="category-product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <h3 className="product-title">{title}</h3>

      <div className="product-prices">
        <span className="old-price">₹{oldPrice}</span>
        <span className="new-price">₹{newPrice}</span>
      </div>

      {/* ✅ Rating Section */}
      <div className="product-rating">
        ⭐ {rating !== undefined && rating !== null ? rating.toFixed(1) : "0.0"} / 5
      </div>
    </div>
  );
};

export default Seller;
