import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from "../../Cards/Rating";
import products from "../../Cards/Product Card/products";

import "./ProductDetails.css";

function ProductDetails() {
  const params = useParams();
  const product = products.find((p) => p._id === params.id);

  return (
    <section className="product-details">
      <div className="details-part">

        <div className="image-part">
          <div className="main-image">
            <img src={`/${product.image}`} alt="" />
          </div>

          <div className="sub-images-part">
            <img src={`/${product.image1}`} alt="" />
            <img src={`/${product.image2}`} alt="" />
            <img src={`/${product.image3}`} alt="" />
            <img src={`/${product.image4}`} alt="" />
          </div>
        </div>

        <div className="product-details-part">
          <div className="product-name-other-part">
            <div className="product-name">
              <span>{product.name}</span>
            </div>

            <div className="product-description">
              <span>{product.description}</span>
            </div>

            <div className="product-rating"> 
              <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
            </div>

            <div className="product-sold-count">
              <span>{product.numSold} sold</span>
            </div>
          </div>

          <div className="in-out-stock">
            <div className="h2-border-stock"></div>
              <span className="stock-name">{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
            <div className="h2-border-stock"></div>
          </div>

          <div className="price-select-part">
            <div className="product-price">
              <span>Price:</span>
              <h4 className="product-price-span">${product.price}</h4>
            </div>

            <div className="product-quantity">
              <span>Quantity:</span>
              <div className="product-quantity-select">
                <select name="quantity" id="quantity">
                  <option selected disabled>Select Quantity</option>
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                  <option value="six">6</option>
                  <option value="seven">7</option>
                  <option value="eight">8</option>
                  <option value="nine">9</option>
                </select>
              </div>
            </div>

            <div className="product-colors">
              <span>Colors:</span>
              <div className="product-colors-select">
                <select name="colors" id="colors">
                  <option selected disabled>Select Color</option>
                  <option value="red">Red</option>
                  <option value="yellow">Yellow</option>
                  <option value="white">White</option>
                  <option value="orange">Orange</option>
                  <option value="green">Green</option>
                </select>
              </div>
            </div>

            <div className="product-size">
              <span>Size:</span>
              <div className="product-size-select">
                <select name="size" id="size">
                  <option selected disabled>Select Size</option>
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                  <option value="xxl">XXL</option>
                </select>
              </div>
            </div>
          </div>

          <div className="product-buy-now-part">
            <div className="product-buy-now">
              <span>Buy Now</span>
            </div>

            <div>
              <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
            </div>

            <div>
              <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
            </div>

            <div>
              <i class="fa fa-share fa-lg" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        {/* <div className="product-in-out-stock"></div> */}
        
      </div>
    </section>
  );
}

export default ProductDetails;