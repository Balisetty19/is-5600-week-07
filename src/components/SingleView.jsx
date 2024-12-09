// SingleView.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../config';  // Assuming BASE_URL is defined
import AddToCart from '../components/AddToCart';  // Import AddToCart component

export default function SingleView() {
  const { id } = useParams();  // Get the product ID from the URL
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

  return (
    <div className="single-product-view">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {/* Add the AddToCart component */}
      <AddToCart product={product} />  {/* Pass the product as a prop */}
    </div>
  );
}
