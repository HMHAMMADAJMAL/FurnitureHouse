import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import mockProducts from '../../data/products';
import '../../styles/components/ProductList.scss';

const ProductList = () => {
  const { categoryId } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const filteredProducts = mockProducts.filter(
    product => product.category.toLowerCase().includes(categoryId?.toLowerCase() || '')
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="product-list">
      <div className="product-list-header">
        <div className="results-count">
          Showing {sortedProducts.length} products
        </div>
        
        <div className="product-list-controls">
          <div className="view-mode">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <i className="fas fa-th"></i>
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <i className="fas fa-list"></i>
            </button>
          </div>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className={`products-grid ${viewMode}`}>
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="no-products">
          <i className="fas fa-box-open"></i>
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default ProductList; 