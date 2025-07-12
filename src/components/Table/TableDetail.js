import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockProducts from '../../data/products';
import '.././SofaSetDetail.scss';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find(p => String(p.id) === String(productId));

  if (!product) {
    return (
      <div className="product-detail not-found">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fas fa-star ${index < product.rating ? 'active' : ''}`}
              ></i>
            ))}
            <span className="reviews">({product.reviews} reviews)</span>
          </div>
          <div className="price">${product.price}</div>
          <p className="description">{product.description}</p>
          <div className="features">
            <h3>Features:</h3>
            <ul>
              {(product.features || []).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button className="add-to-cart" onClick={() => navigate('/payment')}>
            <i className="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 