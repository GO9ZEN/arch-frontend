import React from 'react';
import Rating from '../Rating';

import "../Cards.css";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <>
      <div className="card-product">

      <div className='down-part-product'>
        <ul>
          <li><span><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></span></li>
          <li><span><i class="fa fa-heart fa-lg" aria-hidden="true"></i></span></li>
          <li><span><i class="fa fa-share fa-lg" aria-hidden="true"></i></span></li>
        </ul>
      </div>

      <div className="card-product-image">
        <img src={product.image} alt="" />
      </div>

      <div className="details-card-product">
        <h3>{product.name}</h3>

        <ul className="star-list-product-card">
          <li>
            <span>
              <Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" />
            </span>
          </li>
          <li><p>{product.numSold} sold</p></li>
        </ul>

        <div className='buy-me-product-card'>
          <h5>${product.price}</h5>
          <h4 className="add-to-cart-product-card">Buy Now</h4>
        </div>
      </div>

      </div>
    </>
  );
}

export default ProductCard;