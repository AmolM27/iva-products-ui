import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "./CartContext"; // Adjust the import path if necessary
import Checkout from "./Checkout";

const Home = () => {
    const products = useLoaderData();
    const [expandedProductId, setExpandedProductId] = useState(null);
    const { cart, addToCart } = useCart();
    const navigate = useNavigate();

    const toggleDescription = (id) => {
        setExpandedProductId((prevId) => (prevId === id ? null : id));
    };

    const handleCartClick = () => {
        navigate('/checkout');
    };

    return (
        <div className="shop-container">
            <h1>Shop Our Collection</h1>
            <div className="cart-icon" onClick={handleCartClick}>
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button onClick={() => toggleDescription(product.id)} className="expand-description">
                            {expandedProductId === product.id ? "Hide Description" : "View Description"}
                        </button>
                        {expandedProductId === product.id && (
                            <p className="product-description">{product.description}</p>
                        )}
                        <input 
                            type="number" 
                            min="1" 
                            defaultValue="1" 
                            id={`quantity-${product.id}`} 
                        />
                        <button 
                            className="add-to-cart"
                            onClick={() => {
                                const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value);
                                addToCart(product, quantity);
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                {cart.length > 0 ? (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>{item.name} - {item.quantity} x {item.price}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export const productsLoader = async () => {
  const response = await fetch('http://localhost:8000/products'); // Example API call
  if (!response.ok) {
      throw new Error('Failed to fetch products');
  }
  return response.json();
};


export default Home;
