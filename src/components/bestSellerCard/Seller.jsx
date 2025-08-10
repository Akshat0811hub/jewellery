import React from "react";
import "./SellerCard.css";

const Seller = ({ image, title, oldPrice, newPrice }) => {
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
    </div>
  );
};

export default Seller;
