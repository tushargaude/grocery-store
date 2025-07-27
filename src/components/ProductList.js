import React from 'react';

const products = [
  { id: 1, name: 'Rice', price: 40 },
  { id: 2, name: 'Wheat Flour', price: 35 },
  { id: 3, name: 'Sugar', price: 30 },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
