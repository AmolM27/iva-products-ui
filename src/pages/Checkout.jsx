// Checkout.js
import React from "react";
import { useCart } from "./CartContext"; // Import useCart

const Checkout = () => {
    const { cart } = useCart(); // Access the cart from context

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cart.length > 0 ? (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} x {item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <button className="pay-button">Pay Now</button>
        </div>
    );
};

export default Checkout;
