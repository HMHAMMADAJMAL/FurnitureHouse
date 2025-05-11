import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/layout/Sidebar.scss';

const categories = [
  { id: 'beds', name: 'Beds', icon: 'bed' },
  { id: 'sofas', name: 'Sofa Sets', icon: 'couch' },
  { id: 'chairs', name: 'Chairs', icon: 'chair' },
  { id: 'tables', name: 'Tables & Dining', icon: 'utensils' },
  { id: 'wardrobes', name: 'Wardrobes', icon: 'door-closed' },
  { id: 'decor', name: 'Home Decor', icon: 'paint-brush' },
  { id: 'lighting', name: 'Lighting', icon: 'lightbulb' },
  { id: 'outdoor', name: 'Outdoor Furniture', icon: 'umbrella-beach' }
];

const Sidebar = () => {
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[2];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Categories</h2>
      </div>
      
      <nav className="category-nav">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className={`category-link ${currentCategory === category.id ? 'active' : ''}`}
          >
            <i className={`fas fa-${category.icon}`}></i>
            <span>{category.name}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="filter-section">
          <h3>Price Range</h3>
          <div className="price-range">
            <input type="range" min="0" max="1000" className="price-slider" />
            <div className="price-inputs">
              <input type="number" placeholder="Min" />
              <span>-</span>
              <input type="number" placeholder="Max" />
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h3>Material</h3>
          <div className="material-filters">
            <label>
              <input type="checkbox" /> Wood
            </label>
            <label>
              <input type="checkbox" /> Metal
            </label>
            <label>
              <input type="checkbox" /> Fabric
            </label>
            <label>
              <input type="checkbox" /> Glass
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 