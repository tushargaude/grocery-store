import React, { useState } from 'react';
import ProductList from '../components/ProductList';

function Products() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="page">
      <h2>Our Products</h2>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default Products;
