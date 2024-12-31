import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="top-bar">
      <span>BUY 2 GET 1 FREE | ADD 3 PRODUCTS TO CART TO AVAIL OFFER</span>
    </div>
    <div className="main-header">
      <div className="logo">
        OSTORE™
      </div>
      <div className="user-actions">
        <i className="fas fa-search" title="Search"></i>
        <i className="fas fa-user" title="Login"></i>
        <i className="fas fa-shopping-cart" title="Cart"></i>
      </div>
      <div className="logo-line"></div> {/* Line beneath the logo */}
      <nav className="nav-menu">
        <div className="dropdown">
          <Link to="/">OSTORE</Link>
          <div className="dropdown-content">
            <Link to="/about-us">Our Story</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/products">SHOP</Link>
          <div className="dropdown-content">
            <Link to="/products">All Products</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/category">CATEGORY</Link>
          <div className="dropdown-content">
            <Link to="/category/skincare">Skincare</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/health-combos">COMBOS</Link>
          <div className="dropdown-content">
            <Link to="/combos/immunity">Immunity</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/offer">OFFER</Link>
          <div className="dropdown-content">
            <Link to="/offer/deals">Deals</Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
