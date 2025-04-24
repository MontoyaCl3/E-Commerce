import './index.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import ProductsPage from './components/ProductsPage';
import { CartProvider } from './context/cart';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <CartProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/product/:id" element={<h1>sss</h1>} />
      <Route path="/cart" element={<h1>Cart</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/checkout" element={<h1>Checkout</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/*" element={<h1>404 Not found</h1>} />
    </Routes>
    <Footer/>
    </CartProvider>
    </div>
  );
}

export default App;
