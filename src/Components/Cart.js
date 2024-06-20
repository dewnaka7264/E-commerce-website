import React, {useState} from 'react';
import './Cart.css';
const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 50, quantity: 1 },
        { id: 2, name: 'Product 2', price: 30, quantity: 2 },
        { id: 3, name: 'Product 3', price: 20, quantity: 3 },
    ]);

    const handleRemove = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
    };

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: quantity } : item
        );
        setCartItems(updatedItems);
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
                                <span>${item.price}</span>
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