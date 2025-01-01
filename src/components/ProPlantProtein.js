// ProPlantProtein.jsx (Product Detail Page)
import React from "react";
import { useLocation } from "react-router-dom";
import "./ProPlantProtein.css";

const ProPlantProtein = () => {
  const { state } = useLocation();  // Get the product data from the state passed via navigation
  const product = state?.product;

  if (!product) return <p>Product not found.</p>;  // Return a fallback if no product is found

  return (
    <div className="pro-plant-protein-page">
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProPlantProtein;
