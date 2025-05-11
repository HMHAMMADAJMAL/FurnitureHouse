import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout/Header.scss';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>FurniCraft</h1>
        </Link>
        
        <nav className="main-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/category/beds" className="nav-link">Beds</Link>
          <Link to="/category/sofas" className="nav-link">Sofas</Link>
          <Link to="/category/chairs" className="nav-link">Chairs</Link>
          <Link to="/category/tables" className="nav-link">Tables</Link>
        </nav>

        <div className="header-actions">
          <button 
            className="search-toggle"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <i className="fas fa-search"></i>
          </button>
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for furniture..."
              className="search-input"
            />
            <button className="search-close" onClick={() => setIsSearchOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 