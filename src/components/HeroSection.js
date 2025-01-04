import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import productImage from '../assets/product.png';
import productImage2 from '../assets/productbanner.png'; // Add your image here

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0); // State to track the current image
  const images = [productImage, productImage2]; // Array of images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Toggle images
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-images">
        <img src={images[currentImage]} alt={`Product ${currentImage + 1}`} />
      </div>
    </div>
  );
};

export default HeroSection;
