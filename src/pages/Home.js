import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';

const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProductsSection />
    </div>
  );
};

export default Home;