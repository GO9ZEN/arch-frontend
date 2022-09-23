import React from 'react';
import Rating from "../Rating";

import "./ShopCard.css";

function ShopCard({ shop }) {
  return (
    <>
      <div>
      <div className="card-shop">

        <div className="card-shop-image">
          <img src={shop.image} alt="" />
        </div>

        <div className="details-card-shop">
          <h3>{shop.name}</h3>
          <p>{shop.description}</p>

          <ul>
            <li className="like-card-shop">
              <span>
                <Rating value={shop.rating} text={`${shop.rating}`} color="rgb(220, 220, 0)" /> {/* text={`${shop.rating}`} */}
                {/* {shop.rating} */}
              </span>
            </li>
            <li className="fa-share-shop-card"><span><i class="fa fa-share fa-lg" aria-hidden="true"></i></span></li>
          </ul>
        </div>

      </div>
    </div>
    </>
  );
}

export default ShopCard;