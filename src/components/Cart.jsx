// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../state/CartProvider';  // Import useCart hook

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();  // Access cart items and remove function

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
