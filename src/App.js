import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import ProductList from './components/SofaSet/SofaSetList';
import ProductDetail from './components/SofaSet/SofaSetDetail';
import PaymentPage from './pages/PaymentPage';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<ProductList />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
