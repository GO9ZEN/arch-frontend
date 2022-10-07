import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from "../../Cards/Rating";
import products from "../../Cards/Product Card/products";
import ProductCard from "../../Cards/Product Card/ProductCard";
import { Link } from 'react-router-dom';

import "./ShopDetails.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

function ShopDetails() {
  const params = useParams();
  const product = products.find((p) => p._id === params.id);

  return (
    <section className="shop-details">
      <div className="shop-detail-part">
        <div className="shop-details-first-part">

          <div className="shop-details-topic-name">
            <span className="shop-details-topic-name-part">Fresh & Hot Family Resturant</span>

            <span className="shop-details-more">more</span>
          </div>

          <div className="shop-details-topic-details">
            <span>Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design</span>
          </div>

          <div className="product-rating"> 
            <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
          </div>

          <div className="shop-item-part">
            <Swiper
                // slidesPerView={6}
                // spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}

                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 12
                  },

                  320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                  },

                  480: {
                    slidesPerView: 2,
                    spaceBetween: 18
                  },

                  768: {
                    slidesPerView: 3,
                    spaceBetween: 21
                  },

                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24
                  },

                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 27
                  },

                  1800: {
                    slidesPerView: 6,
                    spaceBetween: 30
                  }
                }}

                modules={[Autoplay]}
                className="mySwiper"
              >

              <div className="related-choice">
                {products.map(product => (
                  <SwiperSlide className="swiper-slide-product" key={product._id}>
                    <Link to={'/arch-shop/product/' + product._id} style={{ textDecoration: 'none' }}>
                      <ProductCard product={product} />
                    </Link>
                  </SwiperSlide>
                ))}
              </div>

            </Swiper>
          </div>

        </div>

        {/* <div className="shop-reviews">
            <div className="shop-reviews-topic">
              <span>Shop Reviews</span>
            </div>

            <div className="shop-reviews-part">
              <div className="shop-reviews-sample">
                <span className="shop-reviews-customer-name">Customer Name</span>

                <div className="product-rating"> 
                  <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                </div>

                <span className="shop-reviews-customer-comment">shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>
              </div>

              <div className="shop-reviews-sample">
                <span className="shop-reviews-customer-name">Customer Name</span>

                <div className="product-rating"> 
                  <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                </div>

                <span className="shop-reviews-customer-comment">shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>
              </div>

              <div className="shop-reviews-sample">
                <span className="shop-reviews-customer-name">Customer Name</span>

                <div className="product-rating"> 
                  <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                </div>

                <span className="shop-reviews-customer-comment">shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>
              </div>

              <div className="shop-reviews-sample">
                <span className="shop-reviews-customer-name">Customer Name</span>

                <div className="product-rating"> 
                  <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                </div>

                <span className="shop-reviews-customer-comment">shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>
              </div>

              <div className="shop-reviews-sample">
                <span className="shop-reviews-customer-name">Customer Name</span>

                <div className="product-rating"> 
                  <span><Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" /></span>
                </div>

                <span className="shop-reviews-customer-comment">shop reviews part (Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design)</span>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
}

export default ShopDetails;