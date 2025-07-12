import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../common/Header.scss';

const menuData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Living',
    megaMenu: [
      {
        label: 'Sofa Sets',
        path: '/category/sofas',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
      },
      {
        label: 'Ottoman Chairs',
        path: '/category/ottoman-chairs',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      },
      {
        label: 'Accent Tables',
        path: '/category/accent-tables',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
      },
      {
        label: 'Mattresses',
        path: '/category/mattresses',
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      },
    ],
  },
  {
    label: 'Bedroom',
    megaMenu: [
      {
        label: 'Beds',
        path: '/category/beds',
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
      },
      {
        label: 'Bedside Tables',
        path: '/category/bedside-tables',
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
      },
      {
        label: 'Dressers',
        path: '/category/dressers',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      },
      {
        label: 'Wardrobes',
        path: '/category/wardrobes',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      },
    ],
  },
  {
    label: 'Office',
    megaMenu: [
      {
        label: 'Office Chairs',
        path: '/category/office-chairs',
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
      },
      {
        label: 'Office Tables',
        path: '/category/office-tables',
        image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
      },
      {
        label: 'Workstations',
        path: '/category/workstations',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657',
      },
    ],
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
];

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Madina Furniture House</h1>
        </Link>
        <nav className="main-nav">
          {menuData.map((item, idx) => (
            <div
              className={`nav-link-wrapper${item.megaMenu ? ' has-megamenu' : ''}`}
              key={item.label}
              onMouseEnter={() => item.megaMenu && setOpenMenu(idx)}
              onMouseLeave={() => item.megaMenu && setOpenMenu(null)}
            >
              <Link to={item.path || '#'} className="nav-link">
                {item.label}
                {item.megaMenu && <span className="dropdown-arrow">▼</span>}
              </Link>
              {item.megaMenu && openMenu === idx && (
                <div className="megamenu-dropdown">
                  {item.megaMenu.map(sub => (
                    <Link to={sub.path} className="megamenu-item" key={sub.label}>
                      <div className="megamenu-img-wrap">
                        <img src={sub.image} alt={sub.label} className="megamenu-img" />
                      </div>
                      <span className="megamenu-label">{sub.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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