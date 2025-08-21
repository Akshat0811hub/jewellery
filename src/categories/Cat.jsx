import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Heart, Share2, Eye, ChevronDown, ChevronUp, Grid, List } from 'lucide-react';
import "../css/Cat.css"

const Cat = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    diamond: true,
    size: true
  });

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedShapes, ] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState('grid');

  const [products, ] = useState([
    {
      id: 1,
      name: "Silver Diamond Ring",
      price: 1350,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      category: "Rings",
      shape: "Round",
      size: "6.0",
      description: "Elegant silver diamond ring with brilliant cut diamond. Perfect for engagement or special occasions.",
      rating: 4.5,
      reviews: 125
    },
    {
      id: 2,
      name: "Cartier Necklaces",
      price: 1999,
      originalPrice: 2200,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
      category: "Necklaces",
      shape: "Princess",
      size: "One Size",
      description: "Luxury Cartier style necklace with premium materials and exquisite craftsmanship.",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: "Gold Cartier Necklaces",
      price: 1350,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
      category: "Necklaces",
      shape: "Emerald",
      size: "One Size",
      description: "Beautiful gold necklace with emerald cut stones. A timeless piece for any collection.",
      rating: 4.6,
      reviews: 156
    },
    {
      id: 4,
      name: "Rose Gold Engagement Ring",
      price: 1200,
      originalPrice: 1350,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      category: "Engagement Rings",
      shape: "Round",
      size: "5.5",
      description: "Stunning rose gold engagement ring with solitaire diamond. Symbol of eternal love.",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 5,
      name: "Ruby & Diamond Ring",
      price: 2000,
      originalPrice: 2350,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      category: "Rings",
      shape: "Cushion",
      size: "6.5",
      description: "Magnificent ruby and diamond ring featuring cushion cut ruby surrounded by diamonds.",
      rating: 4.7,
      reviews: 78
    },
    {
      id: 6,
      name: "Prestige Intertwined Earrings",
      price: 999,
      originalPrice: 1200,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
      category: "Earrings",
      shape: "Oval",
      size: "One Size",
      description: "Elegant intertwined design earrings with oval diamonds. Perfect for formal occasions.",
      rating: 4.4,
      reviews: 92
    },
    {
      id: 7,
      name: "Diamond Tennis Bracelet",
      price: 2500,
      originalPrice: 2800,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop",
      category: "Bracelets",
      shape: "Round",
      size: "7.0",
      description: "Classic diamond tennis bracelet with perfectly matched round diamonds.",
      rating: 4.8,
      reviews: 67
    },
    {
      id: 8,
      name: "Pearl Drop Earrings",
      price: 450,
      originalPrice: 550,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
      category: "Earrings",
      shape: "Pear",
      size: "One Size",
      description: "Graceful pearl drop earrings with pear-shaped pearls. Timeless elegance.",
      rating: 4.3,
      reviews: 134
    }
  ]);

  const categories = [
    { name: "Engagement Rings", count: 120 },
    { name: "Rings", count: 240 },
    { name: "Necklaces", count: 175 },
    { name: "Bracelets", count: 120 },
    { name: "Earrings", count: 90 }
  ];

  const sizes = [
    { name: "4.0", count: 120 },
    { name: "4.5", count: 240 },
    { name: "5.0", count: 175 },
    { name: "5.5", count: 95 },
    { name: "6.0", count: 120 },
    { name: "6.5", count: 90 },
    { name: "7.0", count: 85 },
    { name: "7.5", count: 50 },
    { name: "8.0", count: 35 }
  ];

  // Function to handle product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const shapeMatch = selectedShapes.length === 0 || selectedShapes.includes(product.shape);
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(product.size);
    return categoryMatch && priceMatch && shapeMatch && sizeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="cat-container">
      <div className="cat-layout">
        {/* Sidebar Filters */}
        <div className="sidebar">
          {/* Categories */}
          <div className="filter-section">
            <button onClick={() => toggleSection('categories')} className="filter-header">
              <h3 className="filter-title">Categories</h3>
              <div className="filter-chevron">
                {expandedSections.categories ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            {expandedSections.categories && (
              <div className="filter-options">
                {categories.map((category) => (
                  <label key={category.name} className="filter-option">
                    <div className="filter-option-left">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => handleCategoryChange(category.name)}
                        className="filter-checkbox"
                      />
                      <span className="filter-label">{category.name}</span>
                    </div>
                    <span className="filter-count">({category.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <button onClick={() => toggleSection('price')} className="filter-header">
              <h3 className="filter-title">Filter by Price</h3>
              <div className="filter-chevron">
                {expandedSections.price ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            {expandedSections.price && (
              <div>
                <div className="price-display">
                  <span className="price-text">Price: ${priceRange[0]} - ${priceRange[1]}</span>
                </div>
                <div className="price-range-container">
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="price-slider"
                  />
                  <div className="price-range-labels">
                    <span className="price-range-label">$0</span>
                    <span className="price-range-label">$3000</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Size Filter */}
          <div className="filter-section">
            <button onClick={() => toggleSection('size')} className="filter-header">
              <h3 className="filter-title">Size</h3>
              <div className="filter-chevron">
                {expandedSections.size ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            {expandedSections.size && (
              <div className="filter-options">
                {sizes.map((size) => (
                  <label key={size.name} className="filter-option">
                    <div className="filter-option-left">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size.name)}
                        onChange={() => handleSizeChange(size.name)}
                        className="filter-checkbox"
                      />
                      <span className="filter-label">{size.name}</span>
                    </div>
                    <span className="filter-count">({size.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <div className="content-header">
            <div className="header-left">
              <div className="view-toggle">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                >
                  <Grid size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                >
                  <List size={16} />
                </button>
              </div>
              <span className="results-text">Showing 1-{sortedProducts.length} of {products.length} results</span>
            </div>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="latest">Sort by latest</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
              <option value="name">Sort by name</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className={viewMode === 'grid' ? 'products-grid' : 'products-list'}>
            {sortedProducts.map((product) => (
              <div key={product.id} className={`product-card ${viewMode === 'list' ? 'list-view' : ''}`}>
                <div className={`product-image-container ${viewMode === 'list' ? 'list-view' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-actions">
                    <button className="action-btn">
                      <Heart size={16} className="icon heart" />
                    </button>
                    <button className="action-btn">
                      <Share2 size={16} className="icon share" />
                    </button>
                    <button className="action-btn">
                      <Eye size={16} className="icon eye" />
                    </button>
                  </div>
                </div>
                <div className="product-content">
                  {/* Make product name clickable */}
                  <h3 
                    className="product-name" 
                    onClick={() => handleProductClick(product.id)}
                    style={{ cursor: 'pointer', color: '#333' }}
                  >
                    {product.name}
                  </h3>
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  {viewMode === 'list' && (
                    <div className="product-details">
                      <div className="product-detail">Category: {product.category}</div>
                      <div className="product-detail">Shape: {product.shape}</div>
                      <div className="product-detail">Size: {product.size}</div>
                    </div>
                  )}
                  <button className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;