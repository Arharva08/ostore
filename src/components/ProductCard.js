import React from 'react';
import './ProductCard.css'; // For styling

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-price">₹ {product.price}</p>
    <button className="add-to-cart-btn">Add to Cart</button>
  </div>
);

export default ProductCard;
