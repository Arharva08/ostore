import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useState, useEffect } from 'react';

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
      <div className="user-actions">
      <Link to="/login">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7a0LJEgX6CRlgSpX7UFqrB3Y2FAkkGDulhDaJBGBbs5JTMRr"
    alt="Login"
    title="Login"
    className="action-icon"
  />
</Link>
<Link to="/search">
  <img
    src="data:image/png;base64,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"
    alt="Search"
    title="Search"
    className="action-icon"
  />
</Link>
<Link to="/cart">
  <img
    src="data:image/png;base64,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"
    alt="Cart"
    title="Cart"
    className="action-icon"
  />
</Link>
</div>

  <div className="logo-line"></div> {/* Line beneath the logo */}
      <nav className="nav-menu">
      <div className="dropdown">
      <Link to="/" className="dropdown-toggle">OSTORE </Link> {/* Icon added here */}
    <div className="dropdown-content">
      <Link to="/about-us">Our Story</Link> {/* No icon here */}
    </div>
  </div>
  <div className="dropdown">
      <Link to="/" className="dropdown-toggle">Shop </Link> {/* Icon added here */}
    <div className="dropdown-content">
      <Link to="/products">Our products</Link> {/* No icon here */}
    </div>
  </div> 

        
        <div className="dropdown">
          <Link to="/" className="dropdown-toggle">Category</Link>
          <div className="dropdown-content">
            <Link to="/category/skincare">Skincare</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/" className='dropdown-toggle'>Combos</Link>
          <div className="dropdown-content">
            <Link to="/combos/immunity">Immunity</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/" className='dropdown-toggle'>Offers</Link>
          <div className="dropdown-content">
            <Link to="/offer/deals">Deals</Link>
          </div>
        </div>
      </nav>
    </div>
    
  </header>
);

export default Header;