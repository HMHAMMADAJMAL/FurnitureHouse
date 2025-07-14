import React from 'react';
import { Link } from 'react-router-dom';
import mockProducts from '../data/products';
import Carousel from '../common/Carousel';
import SofaSetCard from '../components/SofaSet/SofaSetCard';
import './Home.scss';

// ✅ Import local images
import bedImg from '../assets/images/bed.jpeg';
import sofaImg from '../assets/images/sofa.jpeg';
import chairImg from '../assets/images/chair.jpeg';
import tableImg from '../assets/images/table.jpeg';

const Home = () => {
  // Filter products by category
  const bedProducts = mockProducts.filter(p => p.category === 'Beds').slice(0, 8);
  const sofaProducts = mockProducts.filter(p => p.category === 'Sofa Sets').slice(0, 8);
  const hotProducts = mockProducts.slice(0, 8);

  // ✅ Use local images in featured categories
  const featuredCategories = [
    {
      id: 'beds',
      name: 'Beds',
      image: bedImg,
      count: bedProducts.length
    },
    {
      id: 'sofas',
      name: 'Sofa Sets',
      image: sofaImg,
      count: sofaProducts.length
    },
    {
      id: 'chairs',
      name: 'Chairs',
      image: chairImg,
      count: mockProducts.filter(p => p.category === 'Chairs').length
    },
    {
      id: 'tables',
      name: 'Tables',
      image: tableImg,
      count: mockProducts.filter(p => p.category === 'Tables & Dining').length
    }
  ];

  return (
    <div className="home">
      <div className="home-container">
        {/* Featured Categories */}
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

        {/* Carousels */}
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
