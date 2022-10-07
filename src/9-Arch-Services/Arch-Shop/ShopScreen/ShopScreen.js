import React from 'react';
import ArchShopHeader from '../ArchShopHeader/ArchShopHeader';
import { Parallax } from "react-parallax";
import ParallaxImage from "../../../components/images/parallax/Five.jpg";
import Footer from "../../../common-components/footer/Footer";

import "./ShopScreen.css";
import ShopDetails from './ShopDetails/ShopDetails';
import ShopReviews from './ShopReviews/ShopReviews';
import ShopItems from './ShopItems/ShopItems';

function ShopScreen() {
  return (
    <div>
        <ArchShopHeader />

        <Parallax
            bgImage={ParallaxImage}
            strength={2000}
            renderLayer={percentage => (
            <div
                style={{
                position: 'absolute',
                // background: `rgba(255, 125, 0, ${percentage * 1})`,
                // left: '50%',
                // top: '50%',
                width: '100%', //percentage * 500
                height: '100%', //percentage * 500
                }}
            />
            )}
        >

          <ShopDetails />
          <ShopItems />
          <ShopReviews />

        </Parallax>

        <Footer />
    </div>
  );
}

export default ShopScreen;