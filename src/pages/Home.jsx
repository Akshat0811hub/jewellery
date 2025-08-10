import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "../css/Home.css";
import "@splidejs/splide/dist/css/splide.min.css";
import banner1 from "../assets/main-banner.webp";
import banner3 from "../assets/main-banner3.webp";
import banner2 from "../assets/main-banner2.webp";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";
import ringImg from "../assets/Category/ring.jpg";
import braceletImg from "../assets/Category/bracelet.jpg";
import necklaceImg from "../assets/Category/necklace.jpg";
import CategoryCard from "../components/Cards/CategoryCard";

const Home = () => {
  useEffect(() => {
    new Splide(".splide", {
      type: "loop",
      perPage: 1,
      autoplay: true,
    }).mount();
  }, []);
  const categories = [
    { image: ringImg, title: "Rings" },
    { image: braceletImg, title: "Bracelets" },
    { image: necklaceImg, title: "Necklaces" },
  ];

  return (
    <>
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
      {/* Categoriess */}
      <div className="categories">
        <div className="main-categories">
          <h1>Shop by Category</h1>
          <div className="cat-icons">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className="categories-section">
          {categories.map((cat, index) => (
            <CategoryCard key={index} image={cat.image} title={cat.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
