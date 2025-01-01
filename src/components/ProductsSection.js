import React from 'react';
import ProductCard from './ProductCard';
import './ProductsSection.css';
import fitnessProductImage from '../assets/fitnessproduct.png';
import product2Image from '../assets/product2.png';
import product3Image from '../assets/product3.png';
import product4Image from '../assets/product4.png';

const ProductsSection = () => {
  const products = [
    {
      discount: '8%',
      image: fitnessProductImage,  // Use the imported image variable
      name: 'Cureveda Pro Plant Protein',
      description: '100% Vegan Protein Isolate',
      price: 1467,
      originalPrice: 1595,
    },
    {
      discount: '20%',
      image: product2Image,  // Use the imported image variable
      name: 'Cureveda Pureprash 500gm',
      description: 'Herbal Sugar Free Chyawanprash',
      price: 516,
      originalPrice: 645,
    },
    {
      discount: '8%',
      image: product3Image,  // Use the imported image variable
      name: 'Cureveda Vision - Eye Health',
      description: 'Eye Supplement With Lutein',
      price: 777,
      originalPrice: 845,
    },
    {
      discount: '10%',
      image: product4Image,  // Use the imported image variable
      name: 'Cureveda Plant Protein & Herbs',
      description: '15 Gm Protein - Fruity & Refreshing!',
      price: 1296,
      originalPrice: 1440,
    },
    {
      discount: '8%',
      image: fitnessProductImage,  // Use the imported image variable
      name: 'Cureveda Pro Plant Protein 1',
      description: '100% Vegan Protein Isolate',
      price: 1467,
      originalPrice: 1595,
    },
    {
      discount: '8%',
      image: fitnessProductImage,  // Use the imported image variable
      name: 'Cureveda Pro Plant Protein 2',
      description: '100% Vegan Protein Isolate',
      price: 1467,
      originalPrice: 1595,
    },
    {
      discount: '8%',
      image: fitnessProductImage,  // Use the imported image variable
      name: 'Cureveda Pro Plant Protein 3',
      description: '100% Vegan Protein Isolate',
      price: 1467,
      originalPrice: 1595,
    },
    {
      discount: '8%',
      image: fitnessProductImage,  // Use the imported image variable
      name: 'Cureveda Pro Plant Protein 4',
      description: '100% Vegan Protein Isolate',
      price: 1467,
      originalPrice: 1595,
    },
    {
      discount: '8%',
      image: fitnessProductImage,  // Use the imported image variable
      name: 'Cureveda Pro Plant Protein 5',
      description: '100% Vegan Protein Isolate',
      price: 1467,
      originalPrice: 1595,
    },
    {
      discount: '8%',
      image: fitnessProductImage,  // Use the imported image variable
      name: 'Cureveda Pro Plant Protein 6',
      description: '100% Vegan Protein Isolate',
      price: 1467,
      originalPrice: 1595,
    }
  ];

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
