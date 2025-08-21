import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import '../css/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [activeTab, setActiveTab] = useState('features');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    user: '',
    rating: 5,
    comment: ''
  });

  // Sample product data
  const productsData = {
    1: {
      id: 1,
      name: "Silver Diamond Ring",
      price: 1350,
      originalPrice: 1500,
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop"
      ],
      category: "Rings",
      rating: 4.5,
      reviewCount: 125,
      description: "Elegant silver diamond ring with brilliant cut diamond. Perfect for engagement or special occasions. Crafted with premium materials and exceptional attention to detail.",
      features: [
        "Brilliant cut diamond",
        "Sterling silver band",
        "Rhodium plated finish",
        "Lifetime warranty",
        "Free resizing"
      ],
      specifications: {
        "Material": "Sterling Silver",
        "Stone": "Diamond",
        "Cut": "Brilliant",
        "Weight": "2.5g",
        "Size": "Available in all sizes"
      },
      sizes: ["4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0"],
      reviews: [
        {
          id: 1,
          user: "Priya Sharma",
          rating: 5,
          comment: "Absolutely beautiful ring! The diamond sparkles amazingly and the quality is excellent.",
          date: "2 days ago",
          verified: true
        },
        {
          id: 2,
          user: "Rahul Kumar",
          rating: 4,
          comment: "Great ring for the price. My wife loves it! Fast delivery too.",
          date: "1 week ago",
          verified: true
        },
        {
          id: 3,
          user: "Anita Gupta",
          rating: 5,
          comment: "Perfect engagement ring. Exactly as shown in pictures. Highly recommend!",
          date: "2 weeks ago",
          verified: true
        }
      ]
    },
    2: {
      id: 2,
      name: "Cartier Necklaces",
      price: 1999,
      originalPrice: 2200,
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop"
      ],
      category: "Necklaces",
      rating: 4.8,
      reviewCount: 89,
      description: "Luxury Cartier style necklace with premium materials and exquisite craftsmanship. A timeless piece that adds elegance to any outfit.",
      features: [
        "Premium gold plating",
        "Hypoallergenic materials",
        "Adjustable chain length",
        "Gift box included",
        "30-day return policy"
      ],
      specifications: {
        "Material": "18K Gold Plated",
        "Chain Length": "16-18 inches",
        "Weight": "15g",
        "Style": "Classic",
        "Closure": "Lobster clasp"
      },
      sizes: ["One Size"],
      reviews: [
        {
          id: 1,
          user: "Meera Patel",
          rating: 5,
          comment: "Stunning necklace! Looks exactly like the original Cartier. Very happy with purchase.",
          date: "3 days ago",
          verified: true
        },
        {
          id: 2,
          user: "Sanjay Verma",
          rating: 4,
          comment: "Bought this for my wife's birthday. She absolutely loves it!",
          date: "5 days ago",
          verified: true
        }
      ]
    },
    3: {
      id: 3,
      name: "Gold Cartier Necklaces",
      price: 1350,
      originalPrice: 1500,
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop"
      ],
      category: "Necklaces",
      rating: 4.6,
      reviewCount: 156,
      description: "Beautiful gold necklace with emerald cut stones. A timeless piece for any collection.",
      features: [
        "24K Gold plating",
        "Emerald cut stones",
        "Handcrafted design",
        "Certificate of authenticity",
        "Luxury gift packaging"
      ],
      specifications: {
        "Material": "24K Gold Plated",
        "Chain Length": "18 inches",
        "Weight": "20g",
        "Style": "Vintage",
        "Stone": "Emerald Cut CZ"
      },
      sizes: ["One Size"],
      reviews: [
        {
          id: 1,
          user: "Kavita Singh",
          rating: 5,
          comment: "Beautiful gold necklace! Perfect for special occasions.",
          date: "1 day ago",
          verified: true
        },
        {
          id: 2,
          user: "Amit Sharma",
          rating: 4,
          comment: "Good quality and fast delivery. Recommended!",
          date: "3 days ago",
          verified: true
        }
      ]
    }
  };

  useEffect(() => {
    const productData = productsData[id];
    if (productData) {
      setProduct(productData);
      setSelectedSize(productData.sizes[0]);
    }
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  const renderInteractiveStars = (currentRating, onRatingClick) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < currentRating ? 'star-filled interactive-star' : 'star-empty interactive-star'}
        onClick={() => onRatingClick(index + 1)}
      />
    ));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.user.trim() && newReview.comment.trim()) {
      const reviewToAdd = {
        id: product.reviews.length + 1,
        user: newReview.user.trim(),
        rating: newReview.rating,
        comment: newReview.comment.trim(),
        date: 'Just now',
        verified: false
      };

      // Update the product data with new review
      const updatedProduct = {
        ...product,
        reviews: [reviewToAdd, ...product.reviews],
        reviewCount: product.reviewCount + 1,
        rating: calculateNewRating([reviewToAdd, ...product.reviews])
      };

      setProduct(updatedProduct);
      
      // Reset form and close modal
      setNewReview({ user: '', rating: 5, comment: '' });
      setShowReviewModal(false);
    }
  };

  const calculateNewRating = (reviews) => {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round((totalRating / reviews.length) * 10) / 10;
  };

  const handleModalClose = () => {
    setShowReviewModal(false);
    setNewReview({ user: '', rating: 5, comment: '' });
  };

  if (!product) {
    return (
      <div className="product-details-container">
        <div className="not-found">
          <h2>Product Not Found</h2>
          <button onClick={handleBackClick} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      {/* Back Button */}
      <button onClick={handleBackClick} className="back-button">
        <ArrowLeft size={20} />
        Back to Products
      </button>

      <div className="product-main-grid">
        {/* Product Images */}
        <div className="image-section">
          {/* Main Image */}
          <div className="main-image">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
            />
          </div>

          {/* Thumbnail Images */}
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
              >
                <img src={image} alt={`View ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="product-info">
          {/* Title and Rating */}
          <div className="product-header">
            <h1 className="product-title">{product.name}</h1>
            <div className="rating-category">
              <div className="rating">
                {renderStars(product.rating)}
                <span className="review-count">({product.reviewCount} reviews)</span>
              </div>
              <span className="category">Category: {product.category}</span>
            </div>
          </div>

          {/* Price */}
          <div className="price-section">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">${product.originalPrice}</span>
                <span className="savings">
                  Save ${product.originalPrice - product.price}
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="description">{product.description}</p>

          {/* Size Selection */}
          {product.sizes.length > 1 && (
            <div className="size-section">
              <h3>Size:</h3>
              <div className="size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="quantity-section">
            <h3>Quantity:</h3>
            <div className="quantity-controls">
              <button
                onClick={() => handleQuantityChange('decrement')}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increment')}
                className="quantity-btn"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-btn">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="wishlist-btn">
              <Heart size={20} />
            </button>
            <button className="share-btn">
              <Share2 size={20} />
            </button>
          </div>

          {/* Shipping Info */}
          <div className="shipping-info">
            <div className="info-item">
              <Truck className="info-icon green" size={20} />
              <span>Free shipping on orders over $500</span>
            </div>
            <div className="info-item">
              <Shield className="info-icon blue" size={20} />
              <span>2-year warranty included</span>
            </div>
            <div className="info-item">
              <RotateCcw className="info-icon orange" size={20} />
              <span>30-day easy returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="details-tabs">
        <div className="tab-headers">
          <button 
            className={`tab-header ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`tab-header ${activeTab === 'specifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </button>
          <button 
            className={`tab-header ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({product.reviewCount})
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="features-content">
              <h3>Product Features</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <div className="feature-bullet"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'specifications' && (
            <div className="specifications-content">
              <h3>Specifications</h3>
              <div className="specs-grid">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-key">{key}:</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="reviews-content">
              <h3>Customer Reviews</h3>
              
              {/* Review Summary */}
              <div className="review-summary">
                <div className="rating-overview">
                  <div className="overall-rating">{product.rating}</div>
                  <div className="rating-details">
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <div className="based-on">Based on {product.reviewCount} reviews</div>
                  </div>
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="reviews-list">
                {product.reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <div className="reviewer-avatar">
                          <span>{review.user.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div className="reviewer-details">
                          <div className="reviewer-name">{review.user}</div>
                          <div className="review-meta">
                            <span className="review-date">{review.date}</span>
                            {review.verified && (
                              <span className="verified-badge">Verified Purchase</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="review-rating">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>

              {/* Write Review Button */}
              <div className="write-review">
                <button 
                  className="write-review-btn"
                  onClick={() => setShowReviewModal(true)}
                >
                  Write a Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Write a Review</h3>
              <button className="close-btn" onClick={handleModalClose}>
                ×
              </button>
            </div>
            
            <form onSubmit={handleReviewSubmit} className="review-form">
              <div className="form-group">
                <label htmlFor="reviewer-name">Your Name *</label>
                <input
                  id="reviewer-name"
                  type="text"
                  value={newReview.user}
                  onChange={(e) => setNewReview({...newReview, user: e.target.value})}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Rating *</label>
                <div className="star-rating">
                  {renderInteractiveStars(newReview.rating, (rating) => 
                    setNewReview({...newReview, rating})
                  )}
                  <span className="rating-text">({newReview.rating} out of 5)</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="review-comment">Your Review *</label>
                <textarea
                  id="review-comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  placeholder="Share your experience with this product..."
                  rows="4"
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={handleModalClose}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;