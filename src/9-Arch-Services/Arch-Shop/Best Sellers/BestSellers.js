import React from 'react';
import shops from '../Cards/Shop Card/shops';
import ShopCard from '../Cards/Shop Card/ShopCard';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import "./BestSellers.css";

function BestSellers() {

  return (
    <section className="best-sellers">
      <div className="topic-part">
        <h4 className="topic-part-h4">Shops Near You</h4>
      </div>

      <div className="hr-part"></div>

      <div className="sellers-shop-part">

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

          <div className="shop-choice">
            {shops.map(shop => (
              <SwiperSlide className="swiper-slide-shop" key={shop._id}>
                <ShopCard shop={shop} />
              </SwiperSlide>
            ))}
          </div>

        </Swiper>
      </div>
    </section>
  )
}

export default BestSellers;
