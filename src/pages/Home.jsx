import React, { useEffect, useState, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../css/Home.css";

// Components
import CategoryCard from "../components/catCard/CategoryCard";
import BestSellerCard from "../components/bestSellerCard/Seller";
import VideoReviewCard from "../components/videoReviewCard/VideoReviewCard";

// Assets
import banner1 from "../assets/main-banner.webp";
import banner2 from "../assets/main-banner2.webp";
import banner3 from "../assets/main-banner3.webp";
import banner4 from "../assets/main-banner5.webp";
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
    { image: Ring2, title: "Classic Gold Band", oldPrice: 2999, newPrice: 1999, description: "Top-rated favorite — selling out fast!" },
    { image: Ring3, title: "Sapphire Statement Ring", oldPrice: 5999, newPrice: 4299, description: "Luxury meets elegance in this bestseller." },
    { image: Ring4, title: "Vintage Rose Gold", oldPrice: 5999, newPrice: 4299, description: "Timeless beauty with modern charm." },
    { image: Ring5, title: "Minimalist Silver Ring", oldPrice: 5999, newPrice: 4299, description: "Simple elegance for everyday wear." },
    { image: earring1, title: "Pearl Drop Earrings", oldPrice: 5999, newPrice: 4299, description: "Classic sophistication redefined." },
    { image: necklace1, title: "Diamond Pendant", oldPrice: 5999, newPrice: 4299, description: "Stunning centerpiece for any outfit." },
    { image: necklace2, title: "Layered Gold Chain", oldPrice: 5999, newPrice: 4299, description: "Modern luxury at its finest." },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const splideRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Initialize carousel with responsive settings
  useEffect(() => {
    const splideInstance = new Splide(".splide", {
      type: "loop",
      perPage: 1,
      arrows: false,
      pagination: true,
      drag: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      autoplay: true,
      interval: 2000,
      speed: 600,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      lazyLoad: 'nearby',
      preloadPages: 1,
    });

    splideInstance.mount();
    splideRef.current = splideInstance;

    return () => {
      if (splideRef.current) {
        splideRef.current.destroy();
      }
    };
  }, []);

  const handleNext = () => {
    const itemsPerPage = isMobile ? 2 : 3;
    if (startIndex + itemsPerPage < categories.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    const itemsPerPage = isMobile ? 2 : 3;
    if (startIndex > 0) {
      setStartIndex(Math.max(0, startIndex - itemsPerPage));
    }
  };

  const displayedCategories = viewAll
    ? categories
    : categories.slice(startIndex, startIndex + (isMobile ? 2 : 3));

  const displayedProducts = viewAllProducts
    ? bestSellers
    : bestSellers.slice(0, isMobile ? 4 : 8);

  return (
    <>
      {/* Main Image Carousel */}
      <div className="main-carousel">
        <section id="image-carousel" className="splide" aria-label="Beautiful Images">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <img src={banner1} alt="Luxury Jewelry Collection" loading="lazy" />
              </li>
              <li className="splide__slide">
                <img src={banner2} alt="New Arrivals" loading="lazy" />
              </li>
              <li className="splide__slide">
                <img src={banner3} alt="Exclusive Designs" loading="lazy" />
              </li>
              <li className="splide__slide">
                <img src={banner4} alt="Special Offers" loading="lazy" />
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Categories */}
      <div className="categories">
        <div className="container">
          <div className="main-categories">
            <h1>Shop by Category</h1>
            {!viewAll && !isMobile && (
              <div className="cat-icons">
                <img 
                  src={leftArrow} 
                  alt="Previous" 
                  onClick={handlePrev} 
                  style={{ 
                    cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
                    opacity: startIndex === 0 ? 0.5 : 1 
                  }} 
                />
                <img 
                  src={rightArrow} 
                  alt="Next" 
                  onClick={handleNext} 
                  style={{ 
                    cursor: startIndex + 3 >= categories.length ? 'not-allowed' : 'pointer',
                    opacity: startIndex + 3 >= categories.length ? 0.5 : 1
                  }} 
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
            <button className="view1" onClick={() => setViewAll(!viewAll)}>
              {viewAll ? "Show Less" : "View All Categories"}
            </button>
          </div>
        </div>
      </div>

      {/* Best Seller Products */}
      <div className="best-seller">
        <div className="container">
          <div className="best-category">
            <h1>Bestseller Products</h1>
          </div>
          <p className="best-para">
            Top-rated favorites you can't resist — selling out fast!
          </p>

          <div className="sellerCard">
            {displayedProducts.map((product, index) => (
              <BestSellerCard key={index} {...product} />
            ))}
          </div>
          
          <div className="view-btn1">
            <button className="view" onClick={() => setViewAllProducts(!viewAllProducts)}>
              {viewAllProducts ? "Show Less" : "View All Products"}
            </button>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <img src={bannerfinal} alt="Special Collection" loading="lazy" />
        <div className="banner-content">
          <h1>Creates Lasting Memories<br />of Each Occasion</h1>
          <p>
            Discover our exclusive collection of handcrafted jewelry that captures 
            the essence of your most precious moments.
          </p>
          <button>Explore Collection</button>
        </div>
      </div>

      {/* Lasting Memory */}
      <div className="last-memory">
        <div className="first-memory">
          <img src={lastingmemory1} alt="Lasting Memories" loading="lazy" />
          <div>
            <p>
              <span>Creates Lasting Memories<br />of Each Occasion</span>
              <br />
              Our expertly crafted pieces are designed to be treasured for generations, 
              combining timeless elegance with modern sophistication.
            </p>
            <button className="view3">Read More</button>
          </div>
        </div>

        <div className="second-memory">
          <div>
            <p>
              <span>We Provide the Best and Most Luxurious Designer Diamond Jewellery</span>
              <br />
              Each piece is meticulously crafted by our master artisans, ensuring 
              unparalleled quality and brilliance that lasts a lifetime.
            </p>
            <button className="view3">Read More</button>
          </div>
          <img src={lastingmemory2} alt="Luxury Jewelry" loading="lazy" />
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <div className="container">
          <h1>Feelings of Our Happy Clients</h1>
          <p>
            Real stories from customers who found their perfect piece with us.
          </p>

          <div className="review-cards-container">
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
            {!isMobile && (
              <>
                <VideoReviewCard
                  videoSrc={video5}
                  name="Neha Patel"
                  profession="Doctor"
                  review="Exceptional quality and service!"
                  image={pic1}
                  rating={5}
                />
                <VideoReviewCard
                  videoSrc={video6}
                  name="Karan Mehta"
                  profession="Marketing Manager"
                  review="Worth every penny. Highly satisfied!"
                  image={pic1}
                  rating={5}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;