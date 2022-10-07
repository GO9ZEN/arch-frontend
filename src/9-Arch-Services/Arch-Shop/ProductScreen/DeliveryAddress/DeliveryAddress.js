import React from 'react';

import "./DeliveryAddress.css";

function DeliveryAddress() {
  return (
    <section className="delivery-address">
      <div className="delivery-part">
        <div className="delivery-topic-name">
          <span>Delivery Address</span>
        </div>

        <div className="delivery-address-address">
          <div className="address-part">
            <i class="fa fa-location-dot"></i>
            <span>375/23/1, Wimalagnana Mawatha, Kurunegala, Sri Lanaka, 60000</span>
          </div>

          <div className="address-change-btn">
            <span>change</span>
          </div>
        </div>

        <div className="delivery-method-part">
          <span>Method:</span>
          <div className="delivery-method-select">
            <select name="deivery-method" id="deivery-method">
              <option selected disabled>Select Method</option>
              <option value="pick-me">Pick Me</option>
              <option value="uber">Uber</option>
              <option value="FedX">FedX</option>
            </select>
          </div>
          <span>3-4 day(s)</span>
        </div>

        <div className="shipping-fee"> 
          <span>Shipping Fee:</span>
          <h4>$44.99</h4>
        </div>
      </div>
    </section>
  );
}

export default DeliveryAddress;