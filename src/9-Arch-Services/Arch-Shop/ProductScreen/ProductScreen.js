import React from 'react';
import ArchShopHeader from '../ArchShopHeader/ArchShopHeader';
import { Parallax } from "react-parallax";
import ParallaxImage from "../../../components/images/parallax/Five.jpg";
import Footer from "../../../common-components/footer/Footer";

import "./ProductScreen.css";
import ProductDetails from './ProductDetails/ProductDetails';
import DeliveryAddress from './DeliveryAddress/DeliveryAddress';
import ShopDetails from './ShopDetails/ShopDetails';
import ItemDetails from './ItemDetails/ItemDetails';
import ProductReviews from './ProductReviews/ProductReviews';
import RelatedItems from './RelatedItems/RelatedItems';

function ProductScreen() {
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

                <ProductDetails />
                <DeliveryAddress />
                <ItemDetails />
                <ProductReviews />
                <ShopDetails />
                <RelatedItems />

        </Parallax>

        <Footer />
    </div>
  );
}

export default ProductScreen;