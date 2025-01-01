// ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import './ProductCard.css'; // For styling

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Dynamically navigate to the product page based on the product name
    navigate(`/products/${product.name.toLowerCase().replace(/ /g, '-')}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">₹ {product.price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
