import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../css/Home.css";

import banner1 from "../assets/main-banner.webp";
import banner3 from "../assets/main-banner3.webp";
import banner2 from "../assets/main-banner2.webp";

import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

import ringImg from "../assets/Category/ring.jpg";
import braceletImg from "../assets/Category/bracelet.jpg";
import necklaceImg from "../assets/Category/necklace.jpg";
import engagementImg from "../assets/Category/engagementRings.jpg";
import earringsImg from "../assets/Category/earrings.jpg";

import CategoryCard from "../components/catCard/CategoryCard";

const Home = () => {
  // Categories data
  const categories = [
    { image: ringImg, title: "Rings" },
    { image: braceletImg, title: "Bracelets" },
    { image: necklaceImg, title: "Necklaces" },
    { image: engagementImg, title: "Engagement Rings" },
    { image: earringsImg, title: "Earrings" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  // Restore Splide carousel
  useEffect(() => {
    new Splide(".splide", {
      type: "loop",
      perPage: 1,
      autoplay: true,
    }).mount();
  }, []);

  const handleNext = () => {
    if (startIndex + 3 < categories.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  const displayedCategories = viewAll
    ? categories
    : categories.slice(startIndex, startIndex + 3);

  return (
    <>
      {/* Main Image Carousel */}
      <div className="main-carousel">
        <section
          id="image-carousel"
          className="splide"
          aria-label="Beautiful Images"
        >
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <img src={banner1} alt="Image 1" />
              </li>
              <li className="splide__slide">
                <img src={banner2} alt="Image 2" />
              </li>
              <li className="splide__slide">
                <img src={banner3} alt="Image 3" />
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Categories */}
      <div className="categories">
        <div className="main-categories">
          <h1>Shop by Category</h1>
          {!viewAll && (
            <div className="cat-icons">
              <img
                src={leftArrow}
                alt="Prev"
                onClick={handlePrev}
                style={{ cursor: "pointer" }}
              />
              <img
                src={rightArrow}
                alt="Next"
                onClick={handleNext}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>

        <div className="categories-section">
          {displayedCategories.map((cat, index) => (
            <CategoryCard key={index} image={cat.image} title={cat.title} />
          ))}
        </div>

        <div className="view-btn">
          <button className="view" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "View All Categories"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
