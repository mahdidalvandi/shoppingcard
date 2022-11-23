import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';
import Store from './components/Store';
import CartContexProvider from './context/CartContexProvider';
import ProductContexProvider from './context/ProductContexProvider';
import DetailesPage from './components/Shared/DetailesPage';
const App = () => {
  return (
    <div>
      
      <ProductContexProvider>
        <CartContexProvider>
        <Navbar />
          <Routes>
          <Route path="/product/:id" element={<DetailesPage />} />
          <Route path="/product" element={<Store />} />
          <Route path="/cart" element={<ShopCart /> } />
            <Route path="*" element={<Navigate to="/product" replace />} />
          </Routes>
        </CartContexProvider>

      </ProductContexProvider>
    </div>
  );
};

export default App;