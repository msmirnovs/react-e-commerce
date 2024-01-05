import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import SearchResultsPage from './pages/Search-results.js';
import ProductPage from './pages/Product.js';
import CartPage from './pages/Cart.js';
import CheckoutPage from './pages/Checkout.js';
import OrderSummaryPage from './pages/Order-summary.js';
import SignUpPage from './pages/Sign-up.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/searchresults" element={<SearchResultsPage />} />
         
      <Route path="/product" element={<ProductPage />} />
         
      <Route path="/cart" element={<CartPage />} />
         
      <Route path="/checkout" element={<CheckoutPage />} />
         
      <Route path="/ordersummary" element={<OrderSummaryPage />} />
         
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
