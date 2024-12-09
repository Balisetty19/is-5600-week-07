// src/state/CartProvider.js
import React, { createContext, useContext, useReducer } from 'react';

// Define action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Define the initial state
const initialState = {
  cartItems: [],
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Add product to cart or update quantity if it already exists
      const updatedItems = [...state.cartItems];
      const existingItem = updatedItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        updatedItems.push({ ...action.payload, quantity: 1 });
      }
      return { cartItems: updatedItems };

    case REMOVE_FROM_CART:
      // Remove product from cart
      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

// Create CartContext
const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add to cart
  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  // Remove from cart
  const removeFromCart = (product) => {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
  };

  // Provide cart state and actions
  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart state
export const useCart = () => {
  return useContext(CartContext);
};
