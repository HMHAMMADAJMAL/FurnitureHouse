import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductList from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<ProductList />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
