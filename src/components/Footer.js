import React from 'react';
import './Footer.css';

// Import social media icons (FontAwesome or similar)
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-copyright">
        <p>2024 Climic Health Pvt. Ltd. All Rights Reserved.</p>
      </div>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Sitemap</a> {/* Added Sitemap link */}
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
    <div className="footer-disclaimer">
      <p>
        The information contained on Cureveda (www.cureveda.com or subdomains) is provided for
        informational purposes only and is not meant to substitute for the advice provided by
        your doctor or other healthcare professional. Information and statements regarding
        products, supplements, programs etc listed on Cureveda have not been evaluated by
        the Food and Drug Administration or any government authority and are not intended to
        diagnose, treat, cure, or prevent any disease. Please read product packaging carefully
        prior to purchase and use. The results from the products will vary from person to
        person. No individual result should be seen as typical.
      </p>
    </div>
  </footer>
);

export default Footer;
