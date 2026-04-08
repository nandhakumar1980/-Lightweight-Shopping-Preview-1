import React from 'react';
import ProductCard from './ProductCard';
import '../styles/main.css';

const ProductList = ({ products }) => {
  return (
    <section className="product-list-container">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
