import React from "react";
import { useCart } from "./CartContext"; // Import useCart

const Checkout = () => {
    const { cart, removeFromCart, decreaseQuantity } = useCart(); // Access cart functions

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cart.length > 0 ? (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} x ${item.price}
                            <button onClick={() => decreaseQuantity(item.id)} className="decrease-button">
                                -
                            </button>
                            <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                Remove
                            </button>
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
