import React, { useEffect, useState, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../css/Home.css";

// Components
import CategoryCard from "../components/catCard/CategoryCard";
import BestSellerCard from "../components/bestSellerCard/Seller";
import VideoReviewCard from "../components/videoReviewCard/VideoReviewCard"; // new card

// Assets
import banner1 from "../assets/main-banner.webp";
import banner2 from "../assets/main-banner2.webp";
import banner3 from "../assets/main-banner3.webp";
import bannerfinal from "../assets/bannerfinal.jpg";

import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";

import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

import ringImg from "../assets/Category/ring.jpg";
import braceletImg from "../assets/Category/bracelet.jpg";
import necklaceImg from "../assets/Category/necklace.jpg";
import engagementImg from "../assets/Category/engagementRings.jpg";
import earringsImg from "../assets/Category/earrings.jpg";

import Ring1 from "../assets/Products/Ring/ring1.jpg";
import Ring2 from "../assets/Products/Ring/ring2.jpg";
import Ring3 from "../assets/Products/Ring/ring3.jpg";
import Ring4 from "../assets/Products/Ring/ring4.jpg";
import Ring5 from "../assets/Products/Ring/ring5.jpg";
import earring1 from "../assets/Products/earrings/earrings1.jpg";
import necklace1 from "../assets/Products/Necklace/necklace1.jpg";
import necklace2 from "../assets/Products/Necklace/necklace2.jpg";

import lastingmemory1 from "../assets/lastingmemory1.jpg";
import lastingmemory2 from "../assets/lastingmemory2.jpg";

import pic1 from "../assets/profile/profile1.jpg";

const Home = () => {
  const categories = [
    { image: ringImg, title: "Rings" },
    { image: braceletImg, title: "Bracelets" },
    { image: necklaceImg, title: "Necklaces" },
    { image: engagementImg, title: "Engagement Rings" },
    { image: earringsImg, title: "Earrings" },
  ];

  const bestSellers = [
    { image: Ring1, title: "Elegant Diamond Ring", oldPrice: 4999, newPrice: 3499, description: "Our most-loved pick for special occasions." },
    { image: Ring2, title: "Description of ring2", oldPrice: 2999, newPrice: 1999, description: "Top-rated favorite — selling out fast!" },
    { image: Ring3, title: "Description of ring3", oldPrice: 5999, newPrice: 4299, description: "Luxury meets elegance in this bestseller." },
    { image: Ring4, title: "Description of ring4", oldPrice: 5999, newPrice: 4299, description: "Luxury meets elegance in this bestseller." },
    { image: Ring5, title: "Description of ring5", oldPrice: 5999, newPrice: 4299, description: "Luxury meets elegance in this bestseller." },
    { image: earring1, title: "Description of earring1", oldPrice: 5999, newPrice: 4299, description: "Luxury meets elegance in this bestseller." },
    { image: necklace1, title: "Description of necklace1", oldPrice: 5999, newPrice: 4299, description: "Luxury meets elegance in this bestseller." },
    { image: necklace2, title: "Description of necklace2", oldPrice: 5999, newPrice: 4299, description: "Luxury meets elegance in this bestseller." },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const splideRef = useRef(null);

  useEffect(() => {
    const splideInstance = new Splide(".splide", {
      type: "loop",
      perPage: 1,
      arrows: false,
      drag: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplay: true,
      interval: 5000,
    });

    splideInstance.mount();
    splideRef.current = splideInstance;
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
        <section id="image-carousel" className="splide" aria-label="Beautiful Images">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide"><img src={banner1} alt="Image 1" /></li>
              <li className="splide__slide"><img src={banner2} alt="Image 2" /></li>
              <li className="splide__slide"><img src={banner3} alt="Image 3" /></li>
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
              <img src={leftArrow} alt="Prev" onClick={handlePrev} style={{ cursor: "pointer" }} />
              <img src={rightArrow} alt="Next" onClick={handleNext} style={{ cursor: "pointer" }} />
            </div>
          )}
        </div>

        <div className="categories-section">
          {displayedCategories.map((cat, index) => (
            <CategoryCard key={index} image={cat.image} title={cat.title} />
          ))}
        </div>

        <div className="view-btn">
          <button className="view1" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "View All Categories"}
          </button>
        </div>
      </div>

      {/* Best Seller Product */}
      <div className="best-seller">
        <div className="best-category">
          <h1>Bestseller Products</h1>
        </div>
        <p className="best-para">Top-rated favorites you can’t resist — selling out fast!</p>

        <div className="sellerCard">
          {bestSellers.map((product, index) => (
            <BestSellerCard key={index} {...product} />
          ))}
        </div>
        <div className="view-btn1">
          <button className="view" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "View All Categories"}
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <img src={bannerfinal} alt="" />
        <div className="banner-content">
          <h1>
            Creates Lasting Memories <br /> of Each occasion
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by <br />
            the readable content of a page when looking at its layout. The <br />
            point of using Lorem Ipsum.
          </p>
          <button>Show More</button>
        </div>
      </div>

      {/* Lasting Memory */}
      <div className="last-memory">
        <div className="first-memory">
          <img src={lastingmemory1} alt="" />
          <div>
            <p>
              <span>Creates Lasting Memories <br /> of Each Occasion <br /></span>
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <button className="view">Read More</button>
          </div>
        </div>

        <div className="second-memory">
          <div>
            <p>
              <span>We Provide the Best and Most Luxurious Designer Diamond Jewellery <br /></span>
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <button className="view">Read More</button>
          </div>
          <img src={lastingmemory2} alt="" />
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <h1>Feelings of Our Happy Client’s</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content.</p>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",marginTop:"8vh" }}>
          <VideoReviewCard
            videoSrc={video5}
            name="Amit Sharma"
            profession="Software Engineer"
            review="This service is amazing! Highly recommend."
            image={pic1}
            rating={5}
          />
          <VideoReviewCard
            videoSrc={video6}
            name="Priya Singh"
            profession="Graphic Designer"
            review="Fantastic quality and quick service."
            image={pic1}
            rating={4}
          />
          <VideoReviewCard
            videoSrc={video6}
            name="Priya Singh"
            profession="Graphic Designer"
            review="Fantastic quality and quick service."
            image={pic1}
            rating={4}
          />
          <VideoReviewCard
            videoSrc={video6}
            name="Priya Singh"
            profession="Graphic Designer"
            review="Fantastic quality and quick service."
            image={pic1}
            rating={4}
          />
          <VideoReviewCard
            videoSrc={video3}
            name="Rahul Verma"
            profession="Entrepreneur"
            review="Absolutely loved it, great experience."
            image={pic1}
            rating={5}
          />
          <VideoReviewCard
            videoSrc={video4}
            name="Anjali Gupta"
            profession="Content Creator"
            review="Beautiful craftsmanship and fast delivery."
            image={pic1}
            rating={4}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
