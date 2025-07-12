import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/layout/Footer.scss"
// import '../styles/layout/Footer.scss';
// 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FurniCraft</h3>
          <p>Transform your living space with our premium collection of furniture. Quality, style, and comfort for your dream home.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/category/beds">Beds</Link></li>
            <li><Link to="/category/sofas">Sofa Sets</Link></li>
            <li><Link to="/category/chairs">Chairs</Link></li>
            <li><Link to="/category/tables">Tables</Link></li>
            <li><Link to="/category/wardrobes">Wardrobes</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              123 Furniture Street, Design District, NY 10001
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +1 (555) 123-4567
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              info@furnicraft.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 FurniCraft. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 