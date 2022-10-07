import React from 'react';
import ShopItemsTabs from './ShopItemsTabs';

import "./ShopItems.css";

const data = [
  {
    heading: "All",
    body: "All products"
  },
  {
    heading: "Shirts",
    body: "Shirts products"
  },
  {
    heading: "Trousers",
    body: "Trousers products"
  }
];

function ShopItems() {
  return (
    <section className="shop-items">
      <div className="shop-items-part">
        <div className="sort-by-items">
          <span>Sort By:</span>

          <div className="sort-by-items-select">
            <select name="sort-by" id="sort-by">
              <option value="default" selected>Default</option>
              <option value="popular">Popular</option>
              <option value="price-low-to-high">Price low to high</option>
              <option value="price-high-to-low">Price high to low</option>
            </select>
          </div>
        </div>

        <div className="shop-items-topics">
          <ShopItemsTabs data={data} />
        </div>

      </div>
    </section>
  );
}

export default ShopItems;