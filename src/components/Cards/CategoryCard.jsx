import React from "react";
import "./Card.css";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default CategoryCard;
