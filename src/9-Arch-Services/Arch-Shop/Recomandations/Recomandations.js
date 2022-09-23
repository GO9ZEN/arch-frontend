import React from 'react';
import ProductCard from "../Cards/Product Card/ProductCard";
import products from "../Cards/Product Card/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import "./Recomandations.css";

function Recomandations() {
  return (
    <section className="recommandations">
      <div className="recommand-topic-part">
        <h4 className="recommand-topic-part-h4">Recommandations</h4>
      </div>

      <div className="recommand-hr-part"></div>

      <div className="recommand-product-part">

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

          <div className="product-choice">
            {products.map(product => (
              <SwiperSlide className="swiper-slide-product" key={product._id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </div>

        </Swiper>
      </div>
    </section>
  )
}

export default Recomandations;