import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/ProductCard.scss';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    price,
    image,
    category,
    rating,
    reviews,
    isNew,
    discount
  } = product;

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <div className="product-image">
          <img src={image} alt={name} />
          {isNew && <span className="badge new">New</span>}
          {discount && <span className="badge discount">{discount}% OFF</span>}
          <div className="product-actions">
            <button className="action-btn wishlist">
              <i className="far fa-heart"></i>
            </button>
            <button className="action-btn quick-view">
              <i className="far fa-eye"></i>
            </button>
          </div>
        </div>

        <div className="product-info">
          <span className="category">{category}</span>
          <h3 className="name">{name}</h3>
          
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fas fa-star ${index < rating ? 'active' : ''}`}
              ></i>
            ))}
            <span className="reviews">({reviews})</span>
          </div>

          <div className="price-container">
            {discount ? (
              <>
                <span className="price discounted">${price}</span>
                <span className="price original">
                  ${(price * (1 - discount / 100)).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="price">${price}</span>
            )}
          </div>

          <button className="add-to-cart">
            <i className="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 