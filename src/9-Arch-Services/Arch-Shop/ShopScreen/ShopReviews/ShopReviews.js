import React from 'react';
import { useParams } from 'react-router-dom';
import shops from "../../Cards/Shop Card/shops";
import Rating from "../../Cards/Rating";
import img1 from "../../../../components/images/parallax/Five.jpg";

import "./ShopReviews.css";

function ShopReviews() {
  const params = useParams();
  const shop = shops.find((p) => p._id === params.id);

  return (
    <section className="shop-reviews">
      <div className="shop-reviews-part">
        <div className="shop-reviews-part-sample">
            <div className="shop-reviews-topic">
              <span>Shop Reviews</span>
            </div>

            <div className="shop-reviews-part-details">
              <div className="review-hr-part-shop"></div>

              <div className="shop-reviews-sample">
                <div className="reviews-first-part-shop">
                  <div className="user-shop-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part-shop">
                    <span className="shop-reviews-customer-name">Customer Name</span>

                    <div className="shop-rating"> 
                      <span><Rating value={shop.rating} text={`${shop.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago-shop">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part-shop">
                  <span className="shop-reviews-customer-comment">Shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part-shop">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful-shop">
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

              <div className="review-hr-part-shop"></div>

              <div className="shop-reviews-sample">
                <div className="reviews-first-part-shop">
                  <div className="user-shop-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part-shop">
                    <span className="shop-reviews-customer-name">Customer Name</span>

                    <div className="shop-rating"> 
                      <span><Rating value={shop.rating} text={`${shop.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago-shop">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part-shop">
                  <span className="shop-reviews-customer-comment">Shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part-shop">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful-shop">
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

              <div className="review-hr-part-shop"></div>

              <div className="shop-reviews-sample">
                <div className="reviews-first-part-shop">
                  <div className="user-shop-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part-shop">
                    <span className="shop-reviews-customer-name">Customer Name</span>

                    <div className="shop-rating"> 
                      <span><Rating value={shop.rating} text={`${shop.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago-shop">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part-shop">
                  <span className="shop-reviews-customer-comment">Shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part-shop">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful-shop">
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

              <div className="review-hr-part-shop"></div>

              <div className="shop-reviews-sample">
                <div className="reviews-first-part-shop">
                  <div className="user-shop-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part-shop">
                    <span className="shop-reviews-customer-name">Customer Name</span>

                    <div className="shop-rating"> 
                      <span><Rating value={shop.rating} text={`${shop.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago-shop">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part-shop">
                  <span className="shop-reviews-customer-comment">Shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part-shop">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful-shop">
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

              <div className="review-hr-part-shop"></div>

              <div className="shop-reviews-sample">
                <div className="reviews-first-part-shop">
                  <div className="user-shop-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part-shop">
                    <span className="shop-reviews-customer-name">Customer Name</span>

                    <div className="shop-rating"> 
                      <span><Rating value={shop.rating} text={`${shop.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago-shop">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part-shop">
                  <span className="shop-reviews-customer-comment">Shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part-shop">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful-shop">
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

              <div className="review-hr-part-shop"></div>

              <div className="shop-reviews-sample">
                <div className="reviews-first-part-shop">
                  <div className="user-shop-reviews">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>

                  <div className="reviews-cutomer-details-part-shop">
                    <span className="shop-reviews-customer-name">Customer Name</span>

                    <div className="shop-rating"> 
                      <span><Rating value={shop.rating} text={`${shop.rating}`} color="rgb(220, 220, 0)" /></span>
                    </div>

                    <span className="days-ago-shop">5 days ago</span>
                  </div>
                </div>
                
                <div className="reviews-second-part-shop">
                  <span className="shop-reviews-customer-comment">Shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>

                  <div className="reviews-img-part-shop">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                  </div>

                  <div className="review-helpful-shop">
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

              <div className="review-hr-part-shop"></div>

            </div>
        </div>
      </div>
    </section>
  );
}

export default ShopReviews;