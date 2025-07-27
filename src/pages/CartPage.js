import React, { useState } from 'react';
import Cart from '../components/Cart';

function CartPage() {
  const [cart, setCart] = useState([]);

  return (
    <div className="page">
      <h2>Your Cart</h2>
      <Cart cart={cart} />
    </div>
  );
}

export default CartPage;
