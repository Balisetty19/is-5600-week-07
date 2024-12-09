// Header.js
import React from 'react';
import { useCart } from '../state/CartProvider'; // Import the useCart hook

const Header = () => {
  // Access the cart state using the useCart hook
  const { cartItems } = useCart();

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <h1>My Store</h1>
      <div className="cart-icon">
        <span>{totalItems} items</span>
      </div>
    </header>
  );
};

export default Header;
