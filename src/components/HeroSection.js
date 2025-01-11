import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import productImage from '../assets/product.png';
import productImage2 from '../assets/productbanner.png';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0); // State to track the current image
  const images = [productImage, productImage2]; // Array of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Toggle images
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentImage(index); // Update to the clicked image
  };

  return (
    <div className="hero-section">
      {/* Image Display */}
      <div className="hero-images">
        <img src={images[currentImage]} alt={`Product ${currentImage + 1}`} />
      </div>

      {/* Indicators */}
      <div className="hero-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentImage === index ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)} // Click to navigate
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
