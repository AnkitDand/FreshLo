import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ShoppingCart.css';

export default function ShoppingCart({ active, removeFromCart, cartItems, placeOrder }) {
  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    // Call placeOrder function passed from parent component
    // Display alert message
    alert('Order placed successfully!');
    cartItems={}
  };

  return (
    <div className={`shopping-cart ${active ? 'active' : ''}`}>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="box" key={item.name}>
              <FontAwesomeIcon
                className="trash-icon"
                icon={faTrash}
                onClick={() => removeFromCart(item.name)}
              />
              <img src={item.image} alt="Product" />
              <div className="content">
                <h3>{item.name}</h3>
                <span className="price">₹{item.price * item.quantity}</span>
                <span className="quantity">qty: {item.quantity}</span>
              </div>
            </div>
          ))}
          <div className="total-amount">Total: ₹{totalAmount}</div>
          <button className="order-button" onClick={handlePlaceOrder}>Place Your Order Now</button>
        </>
      )}
    </div>
  );
}

ShoppingCart.propTypes = {
  active: PropTypes.bool.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired, // Changed to number for calculation
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  placeOrder: PropTypes.func.isRequired,
};
