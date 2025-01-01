// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CartPage from './pages/CartPage';
import ProPlantProtein from './components/ProPlantProtein';

const App = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products/:productName" element={<ProPlantProtein />} />
      {/* Dynamic route for all products */}
    </Routes>
    <Footer /> {/* Footer stays at the bottom for all pages */}
  </Router>
);

export default App;
