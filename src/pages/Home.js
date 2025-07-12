import React from 'react';
import { Link } from 'react-router-dom';
import mockProducts from '../data/products';
import Carousel from '../common/Carousel';
import SofaSetCard from '../components/SofaSet/SofaSetCard';
import "./Home.scss";

const Home = () => {
  // Filter products by category for each section
  const bedProducts = mockProducts.filter(p => p.category === 'Beds').slice(0, 8);
  const sofaProducts = mockProducts.filter(p => p.category === 'Sofa Sets').slice(0, 8);
  const hotProducts = mockProducts.slice(0, 8); // Example: first 8 as hot selling

  // Use bright, minimal, high-quality Unsplash images for each category
  const featuredCategories = [
    {
      id: 'beds',
      name: 'Beds',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      count: bedProducts.length
    },
    {
      id: 'sofas',
      name: 'Sofa Sets',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
      count: sofaProducts.length
    },
    {
      id: 'chairs',
      name: 'Chairs',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
      count: mockProducts.filter(p => p.category === 'Chairs').length
    },
    {
      id: 'tables',
      name: 'Tables',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      count: mockProducts.filter(p => p.category === 'Tables & Dining').length
    }
  ];

  return (
    <div className="home">
      <div className="home-container">
        <section className="featured-categories exact-category-design">
          <h2>Shop by Category</h2>
          <div className="categories-grid exact-category-grid">
            {featuredCategories.map(category => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="category-card exact-category-card"
              >
                <div className="category-image exact-category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-info exact-category-info">
                  <h3>{category.name}</h3>
                  <span>{category.count} Products</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <div className="carousel-group">
          <Carousel
            items={bedProducts}
            renderItem={product => <SofaSetCard key={product.id} product={product} />}
            itemsToShow={4}
            title="Bed Set Offers"
          />
          <Carousel
            items={sofaProducts}
            renderItem={product => <SofaSetCard key={product.id} product={product} />}
            itemsToShow={4}
            title="Sofa Set Offers"
          />
          <Carousel
            items={hotProducts}
            renderItem={product => <SofaSetCard key={product.id} product={product} />}
            itemsToShow={4}
            title="Hot Selling Products"
          />
        </div>
      </div>
    </div>
  );
};

export default Home; 