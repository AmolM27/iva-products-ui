import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from 'react';

const Home = () => {
    const products = useLoaderData();

    // State to manage which product's description is expanded
    const [expandedProductId, setExpandedProductId] = useState(null);

    //Toggle the description visibility for a specific product
    const toggleDescription = (id) => {
    setExpandedProductId((prevId) => (prevId === id ? null : id));
    };
  
    return (
      <div className="shop-container">
        <h1>Shop Our Collection</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              {/* Expandable Description */}
              <button
                onClick={() => toggleDescription(product.id)}
                className="expand-description">
                {expandedProductId === product.id ? "Hide Description" : "View Description"}
              </button>

              {/* Show the description if the product is expanded */}
              {expandedProductId === product.id && (
              <p className="product-description">{product.description}</p>
              )}
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Home;

// loader function
export const productsLoader = async() => {
    const res = await fetch('http://localhost:8000/products')
    
    return res.json();
}
