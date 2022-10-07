import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from "../../Cards/Rating";
import shops from "../../Cards/Shop Card/shops";

import "./ShopDetails.css";

function ShopDetails() {
    const params = useParams();
    const shop = shops.find((p) => p._id === params.id);

  return (
    <section className="shop-details">
      <div className="details-part-shop">

        <div className="image-part-shop">
          <div className="main-image-shop">
            <img src={`/${shop.image}`} alt="" />
          </div>
        </div>

        <div className="shop-details-part">
          <div className="shop-name-other-part">
            <div className="shop-name">
              <span>{shop.name}</span>
            </div>

            <div className="shop-description">
              <span>{shop.description}</span>
            </div>

            <div className="shop-location">
              <i class="fa-solid fa-location-dot"></i>
              <span>375/23/1, Wimalagnana Mawatha, Puttlam road, Kurunegala</span>
            </div>

            <div className="shop-rating"> 
              <span><Rating value={shop.rating} text={`${shop.rating}`} color="rgb(220, 220, 0)" /></span>
            </div>
          </div>

          <div className="shop-share">
              <i class="fa fa-share fa-lg" aria-hidden="true"></i>
          </div>

          {/* <div className="open-close-shop">
            <div className="h2-border-shop"></div>
              <span className="open-close-name">Close</span>
            <div className="h2-border-shop"></div>
          </div> */}

        </div>

        {/* <div className="product-in-out-stock"></div> */}
        
      </div>
    </section>
  );
}

export default ShopDetails;