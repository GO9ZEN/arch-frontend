import React from 'react';
import Footer from "../../common-components/footer/Footer";
import HeroSection from './hero-section/HeroSection';
import ParallaxImage from "../../components/images/parallax/Five.jpg";
import BestSellers from './Best Sellers/BestSellers';
import AdOne from './AdOne/AdOne';
import Recomandations from './Recomandations/Recomandations';
import AdTwo from './AdTwo/AdTwo';

import { Parallax } from "react-parallax";

import "./ArchShop.css";
import YourChoice from './YourChoice/YourChoice';
import ArchShopHeader from './ArchShopHeader/ArchShopHeader';
import ArchServicesNavbar from '../../common-components/ArchServicesNavbar/ArchServicesNavbar';
function ArchShop() {
  return (
    <div>
      <ArchShopHeader />
      <ArchServicesNavbar />
      <HeroSection />

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
        <BestSellers />
        <AdOne />
        <Recomandations />
        <AdTwo />
        <YourChoice />
        
      </Parallax>

      <Footer />
    </div>
  );
}

export default ArchShop; 