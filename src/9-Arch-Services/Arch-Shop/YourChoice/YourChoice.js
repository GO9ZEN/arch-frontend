import React from 'react';

import products from "../Cards/Product Card/products";
import ProductCard from '../Cards/Product Card/ProductCard';

import "./YourChoice.css";

function YourChoice() {
  return (
    <section className="your-choice">
      <div className="y-choice-h2">
        <div className="h2-border"></div>
        <h2 className="section-h2">Your Choice</h2>
        <div className="h2-border"></div>
      </div>

      <div className="choice-product-part">
        <div className="product-choice">
          {products.map(product => (
            <div className="product-choice-part" key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="load-more">
        <h4>LOAD MORE</h4>
      </div>
    </section>
  )
}

export default YourChoice;