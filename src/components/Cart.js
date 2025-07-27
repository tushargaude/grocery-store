import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>{item.name} - ₹{item.price}</li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
