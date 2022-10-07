import React from 'react';
import { useParams } from 'react-router-dom';
import products from "../../Cards/Product Card/products";
import Rating from "../../Cards/Rating";
import img1 from "../../../../components/images/parallax/Five.jpg";

import "./ProductReviews.css";

function ProductReviews() {
  const params = useParams();
  const product = products.find((p) => p._id === params.id);

  return (
    <section className="product-reviews">
      <div className="product-reviews-part">
        <div className="product-reviews-part-sample">
            <div className="product-reviews-topic">
              <span>Product Reviews</span>
            </div>

            <div className="product-reviews-part-details">
              <div className="review-hr-part"></div>

              <div className="product-reviews-sample">
                <div className="reviews-first-part">
                  <div className="user-product-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part">
                    <span className="product-reviews-customer-name">Customer Name</span>

                    <div className="product-rating"> 
                      <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part">
                  <span className="product-reviews-customer-comment">Product reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful">
                    <span>Helpful?</span>

                    <div>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>(10)</span>
                    </div>

                    <div>
                      <i class="fa-solid fa-thumbs-down"></i>
                      <span>(0)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-hr-part"></div>

              <div className="product-reviews-sample">
                <div className="reviews-first-part">
                  <div className="user-product-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part">
                    <span className="product-reviews-customer-name">Customer Name</span>

                    <div className="product-rating"> 
                      <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part">
                  <span className="product-reviews-customer-comment">Product reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful">
                    <span>Helpful?</span>

                    <div>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>(10)</span>
                    </div>

                    <div>
                      <i class="fa-solid fa-thumbs-down"></i>
                      <span>(0)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-hr-part"></div>

              <div className="product-reviews-sample">
                <div className="reviews-first-part">
                  <div className="user-product-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part">
                    <span className="product-reviews-customer-name">Customer Name</span>

                    <div className="product-rating"> 
                      <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part">
                  <span className="product-reviews-customer-comment">Product reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful">
                    <span>Helpful?</span>

                    <div>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>(10)</span>
                    </div>

                    <div>
                      <i class="fa-solid fa-thumbs-down"></i>
                      <span>(0)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-hr-part"></div>

              <div className="product-reviews-sample">
                <div className="reviews-first-part">
                  <div className="user-product-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part">
                    <span className="product-reviews-customer-name">Customer Name</span>

                    <div className="product-rating"> 
                      <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part">
                  <span className="product-reviews-customer-comment">Product reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful">
                    <span>Helpful?</span>

                    <div>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>(10)</span>
                    </div>

                    <div>
                      <i class="fa-solid fa-thumbs-down"></i>
                      <span>(0)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-hr-part"></div>

              <div className="product-reviews-sample">
                <div className="reviews-first-part">
                  <div className="user-product-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part">
                    <span className="product-reviews-customer-name">Customer Name</span>

                    <div className="product-rating"> 
                      <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part">
                  <span className="product-reviews-customer-comment">Product reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful">
                    <span>Helpful?</span>

                    <div>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>(10)</span>
                    </div>

                    <div>
                      <i class="fa-solid fa-thumbs-down"></i>
                      <span>(0)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-hr-part"></div>

              <div className="product-reviews-sample">
                <div className="reviews-first-part">
                  <div className="user-product-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part">
                    <span className="product-reviews-customer-name">Customer Name</span>

                    <div className="product-rating"> 
                      <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part">
                  <span className="product-reviews-customer-comment">Product reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful">
                    <span>Helpful?</span>

                    <div>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <span>(10)</span>
                    </div>

                    <div>
                      <i class="fa-solid fa-thumbs-down"></i>
                      <span>(0)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-hr-part"></div>

            </div>
        </div>
      </div>
    </section>
  );
}

export default ProductReviews;