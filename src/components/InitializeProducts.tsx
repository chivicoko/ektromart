"use client";
// Example of a component that initializes products data
import { useEffect } from 'react';

const InitializeProducts = () => {
  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem('products') || '[]');

    // Send the data to the server to initialize the API's in-memory storage
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productsFromLocalStorage),
    });
  }, []);

  return null; // This component does not render anything
};

export default InitializeProducts;
