import React from 'react';
import ProductCard from "../../Cards/Product Card/ProductCard";
import products from "../../Cards/Product Card/products";
import { Link } from 'react-router-dom';

import "./RelatedItems.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

function RelatedItems() {
  return (
    <section className="related-items">
      <div className="related-items-part">
        <div className="related-topic-part">
          <h4 className="related-topic-part-h4">Related Items</h4>

          <span className="related-items-more">more</span>
        </div>

        <div className="related-item-part-sample">

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
    </section>
  );
}

export default RelatedItems;