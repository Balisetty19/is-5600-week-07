// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './state/CartProvider';  // Import the CartProvider
import Header from './Header';
import CardList from './CardList';
import SingleView from './SingleView';
import Cart from './Cart';  // Import the Cart component

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />  {/* Header will have access to the cart */}
        
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/product/:id" element={<SingleView />} />
          <Route path="/cart" element={<Cart />} />  {/* Add the Cart route */}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
