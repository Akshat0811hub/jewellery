import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../css/Home.css";
import banner1 from "../assets/main-banner.webp";
import banner3 from "../assets/main-banner3.webp";
import banner2 from "../assets/main-banner2.webp";
import bannerfinal from "../assets/bannerfinal.jpg";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";
import ringImg from "../assets/Category/ring.jpg";
import braceletImg from "../assets/Category/bracelet.jpg";
import necklaceImg from "../assets/Category/necklace.jpg";
import engagementImg from "../assets/Category/engagementRings.jpg";
import earringsImg from "../assets/Category/earrings.jpg";
import CategoryCard from "../components/catCard/CategoryCard";
import BestSellerCard from "../components/bestSellerCard/Seller"; // <-- new import
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

const Home = () => {
  // Categories data
  const categories = [
    { image: ringImg, title: "Rings" },
    { image: braceletImg, title: "Bracelets" },
    { image: necklaceImg, title: "Necklaces" },
    { image: engagementImg, title: "Engagement Rings" },
    { image: earringsImg, title: "Earrings" },
  ];

  // Best sellers data
  const bestSellers = [
    {
      image: Ring1,
      title: "Elegant Diamond Ring",
      oldPrice: 4999,
      newPrice: 3499,
      description: "Our most-loved pick for special occasions.",
    },
    {
      image: Ring2,
      title: "Description of ring2",
      oldPrice: 2999,
      newPrice: 1999,
      description: "Top-rated favorite — selling out fast!",
    },
    {
      image: Ring3,
      title: "Description of ring3",
      oldPrice: 5999,
      newPrice: 4299,
      description: "Luxury meets elegance in this bestseller.",
    },
    {
      image: Ring4,
      title: "Description of ring4",
      oldPrice: 5999,
      newPrice: 4299,
      description: "Luxury meets elegance in this bestseller.",
    },
    {
      image: Ring5,
      title: "Description of ring5",
      oldPrice: 5999,
      newPrice: 4299,
      description: "Luxury meets elegance in this bestseller.",
    },
    {
      image: earring1,
      title: "Description of earring1",
      oldPrice: 5999,
      newPrice: 4299,
      description: "Luxury meets elegance in this bestseller.",
    },
    {
      image: necklace1,
      title: "Description of necklace1",
      oldPrice: 5999,
      newPrice: 4299,
      description: "Luxury meets elegance in this bestseller.",
    },
    {
      image: necklace2,
      title: "Description of necklace2",
      oldPrice: 5999,
      newPrice: 4299,
      description: "Luxury meets elegance in this bestseller.",
    },
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

      {/* Best Seller Product */}
      <div className="best-seller">
        <div className="best-category">
          <h1>Bestseller Products</h1>
        </div>
        <p className="best-para">
          Top-rated favorites you can’t resist — selling out fast!
        </p>

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
            Creates Lasting Memories
            <br /> of Each occasion
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by{" "}
            <br />
            the readable content of a page when looking at its layout. The{" "}
            <br />
            point of using Lorem Ipsum.
          </p>
          <button>Show More</button>
        </div>
      </div>
      {/* Lasting Memory */}

      <div className="last-memory">
        <div className="first-memory">
          <img src={lastingmemory1} alt="" />
          <p><span>
            Creates Lasting Memories <br></br>of Each Occasion<br></br></span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum.
          </p>
        </div>
        <div className="first-memory">
          <p><span>
            Creates Lasting Memories <br></br>of Each Occasion<br></br></span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum.
          </p>
          <img src={lastingmemory2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
