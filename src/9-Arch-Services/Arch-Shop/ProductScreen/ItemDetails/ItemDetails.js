import React from 'react';

import "./ItemDetails.css";

function ItemDetails() {
  return (
    <section className="item-details">
      <div className="item-details-part">
        <div className="item-details-topic">
          <span>Product Details</span>
        </div>

        <table>
          <tr>
            <td><span>Package Dimensions</span></td>
            <td><span>13.23 x 5.94 x 3.23 inches</span></td>
          </tr>

          <tr>
            <td><span>Package Dimensions</span></td>
            <td><span>13.23 x 5.94 x 3.23 inches</span></td>
          </tr>

          <tr>
            <td><span>Package Dimensions</span></td>
            <td><span>13.23 x 5.94 x 3.23 inches</span></td>
          </tr>

          <tr>
            <td><span>Package Dimensions</span></td>
            <td><span>13.23 x 5.94 x 3.23 inches</span></td>
          </tr>

          <tr>
            <td><span>Package Dimensions</span></td>
            <td><span>13.23 x 5.94 x 3.23 inches</span></td>
          </tr>
        </table>

        <ul className="item-details-ul">
          <li><span>Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience.</span></li>
          <li><span>Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience.</span></li>
          <li><span>Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience.</span></li>
          <li><span>Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience.</span></li>
          <li><span>Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience.</span></li>
        </ul>

      </div>
    </section>
  );
}

export default ItemDetails;