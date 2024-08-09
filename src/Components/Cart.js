import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
    const handleRemove = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
    };

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedItems);
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0);
    };

    return (
        <div className="Cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <span>{item.size}</span>
                                <span>${item.newPrice}</span>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                />
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <h3>Total: ${getTotal().toFixed(2)}</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
