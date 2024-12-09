import React, { useState, useEffect } from "react";
import { BASE_URL } from '../config';
import Button from './Button';  // Assuming Button is a separate component

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);  // to track the page offset
  const [limit] = useState(10);  // for pagination limit (e.g., 10 products per page)

  // Function to fetch products with pagination
  const fetchProducts = () => {
    fetch(`${BASE_URL}/products?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  // Use useEffect to fetch products when offset changes
  useEffect(() => {
    fetchProducts();
  }, [offset]);

  // Handle the "Previous" button click
  const handlePrevious = () => {
    setOffset(offset - limit);  // Decrease offset to go to the previous page
  };

  // Handle the "Next" button click
  const handleNext = () => {
    setOffset(offset + limit);  // Increase offset to go to the next page
  };

  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        {products && products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>
    </div>
  );
};

export default CardList;
