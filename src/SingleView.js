// SingleView.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../state/CartProvider';  // Import the useCart hook
import { BASE_URL } from '../config';  // Assuming the BASE_URL is defined here

export default function SingleView() {
  const { id } = useParams();
  const { addToCart } = useCart();  // Destructure the addToCart function

  const [product, setProduct] = useState(null);

  const fetchProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const productData = await response.json();
    return productData;
  };

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);

  if (!product) return <div className="loading-spinner">Loading...</div>;

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product);  // Add the current product to the cart
  };

  return (
    <div className="single-product-view">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>  {/* Add to Cart button */}
    </div>
  );
}
