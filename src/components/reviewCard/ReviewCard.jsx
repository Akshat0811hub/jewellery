import React from "react";
import { FaStar } from "react-icons/fa";
import "./Review.css"

const ReviewCard = ({ name, profession, review, image, rating = 5 }) => {
  return (
    <div
      style={{
        maxWidth: "350px",
        background: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >

      {/* Profile Section */}
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <img
          src={image}
          alt={name}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "8px",
          }}
        />
        <strong style={{ fontSize: "16px" }}>{name}</strong>
        <span style={{ fontSize: "14px", color: "#777" }}>{profession}</span>
      </div>
      <div style={{ marginBottom: "10px" }}>
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} color="#FFD700" size={18} />
        ))}
      </div>

      {/* Review Text */}
      <p style={{ marginTop: "12px", fontSize: "14px", color: "#444" }}>
        "{review}"
      </p>
      <div className="product-rating">
        ⭐ {rating !== undefined && rating !== null ? rating.toFixed(1) : "0.0"} / 5
      </div>
    </div>
  );
};

export default ReviewCard;
