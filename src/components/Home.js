import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/components/Home.scss';
import "../styles/components/Home.scss"

import bedImg from '../assets/images/bed.jpeg';
import sofaImg from '../assets/images/sofa.jpeg';
import chairImg from '../assets/images/chair.jpeg';
import tableImg from '../assets/images/table.jpeg';

const Home = () => {
  const featuredCategories = [
    { id: 'beds', name: 'Beds', image: bedImg, count: 24 },
    { id: 'sofas', name: 'Sofa Sets', image: sofaImg, count: 18 },
    { id: 'chairs', name: 'Chairs', image: chairImg, count: 32 },
    { id: 'tables', name: 'Tables', image: tableImg, count: 15 },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Space</h1>
          <p>Discover our collection of premium furniture for your dream home</p>
          <Link to="/category/sofas" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {featuredCategories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card"
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <span>{category.count} Products</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <i className="fas fa-truck"></i>
          <h3>Free Shipping</h3>
          <p>On orders over $100</p>
        </div>
        <div className="feature">
          <i className="fas fa-undo"></i>
          <h3>Easy Returns</h3>
          <p>30 days return policy</p>
        </div>
        <div className="feature">
          <i className="fas fa-shield-alt"></i>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
        <div className="feature">
          <i className="fas fa-headset"></i>
          <h3>24/7 Support</h3>
          <p>Dedicated support team</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates on new products and upcoming sales</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 