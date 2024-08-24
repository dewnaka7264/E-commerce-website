import React from 'react';
import './Cart.css';
import Button from '@mui/material/Button';

const Cart = ({ cartItems, setCartItems }) => {

    /*// Load cart items from localStorage on initial render
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, [setCartItems]);*/

    // https://www.youtube.com/watch?v=shLz_kmA68Q


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
        <div className="cartContainer">
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

                <div className="checkout">
                    <Button variant="contained">Proceed to checkout</Button>
                </div>


        </div>

    );
};

export default Cart;
