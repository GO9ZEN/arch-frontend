import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NineArch from "./9-Arch-Services/9-Arch/NineArch";
import ArchMedia from "./9-Arch-Services/Arch-Media/ArchMedia";
import ArchShop from "./9-Arch-Services/Arch-Shop/ArchShop";
import ArchAcademy from "./9-Arch-Services/Arch-Academy/ArchAcademy";

import "./App.css";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
        <Route path='/arch-frontend' element={<ArchShop />} />

          {/* <Route path='/' element={<NineArch />} exact /> */}
          {/* <Route path='/nine-arch' element={<NineArch />} /> */}
          {/* <Route path='/arch-media' element={<ArchMedia />} /> */}
          {/* <Route path='/arch-shop' element={<ArchShop />} /> */}
          {/* <Route path='/arch-Academy' element={<ArchAcademy />} /> */}

          {/* <Route path='/shopping-cart' element={<ShoppingCart />}>
            <Route path='/shopping-cart' element={<ShoppingCartArchAll />} exact />
            <Route path='/shopping-cart/shopping-cart-Arch-All' element={<ShoppingCartArchAll />} />
            <Route path='/shopping-cart/shopping-cart-Arch-Media' element={<ShoppingCartArchMedia />} />
            <Route path='/shopping-cart/shopping-cart-Arch-Shop' element={<ShoppingCartArchShop />} />
            <Route path='/shopping-cart/shopping-cart-Arch-Academy' element={<ShoppingCartArchAcademy />} />
          </Route> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;

// arch-frontend