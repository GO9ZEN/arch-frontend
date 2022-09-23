import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import NineArchLogo from "../../../components/images/9-Arch.png";
import CartNavbar from './CartNavbar/CartNavbar';
import NotificationsNavbar from './NotificationsNavbar/NotificationsNavbar';
import WishlistNavbar from './WishlistNavbar/WishlistNavbar';

import "./ArchShopHeader.css";
import CategoriesNavbar from './CategoriesNavbar/CategoriesNavbar';
import UserIconNavbar from './UserIconNavbar/UserIconNavbar';

const ResponsiveSearch = styled.nav`
  background: #1b1b1b;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  top: 0;
  top: ${({ responsiveSearch }) => (responsiveSearch ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
  gap: 15px;
}
`

const SidebarMenuFoods = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuFoods }) => (sidebarMenuFoods ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
`

const SidebarMenuSports = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuSports }) => (sidebarMenuSports ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
`

const SidebarMenuGandF = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuGandF }) => (sidebarMenuGandF ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
`

const SidebarMenu = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenu }) => (sidebarMenu ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
`


const SidebarNav = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
`

const SidebarWrap = styled.div`
  width: 100%;
`

function ArchShopHeader() {
  const [responsiveSearch, setResponsiveSearch] = useState(false);
  const showResponsiveSearch = () => setResponsiveSearch(!responsiveSearch);

  const btnRefResponsiveSearch = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefResponsiveSearch.current.contains(event.target)) {
        setResponsiveSearch(false);
      }
    });
  })

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const btnRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRef.current.contains(event.target)) {
        setSidebar(false);
      }
    });
  })

  const [sidebarMenu, setSidebarMenu] = useState(false);
  const showSidebarMenu = () => setSidebarMenu(!sidebarMenu);

  const btnRefMenu = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefMenu.current.contains(event.target)) {
        setSidebarMenu(false);
      }
    });
  })
  
  const [sidebarMenuGandF, setSidebarMenuGandF] = useState(false);
  const showSidebarMenuGandF = () => setSidebarMenuGandF(!sidebarMenuGandF);

  const btnRefMenuGandF = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefMenuGandF.current.contains(event.target)) {
        setSidebarMenuGandF(false);
      }
    });
  })

  const [sidebarMenuSports, setSidebarMenuSports] = useState(false);
  const showSidebarMenuSports = () => setSidebarMenuSports(!sidebarMenuSports);

  const btnRefMenuSports = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefMenuSports.current.contains(event.target)) {
        setSidebarMenuSports(false);
      }
    });
  })

  const [sidebarMenuFoods, setSidebarMenuFoods] = useState(false);
  const showSidebarMenuFoods = () => setSidebarMenuFoods(!sidebarMenuFoods);

  const btnRefMenuFoods = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefMenuFoods.current.contains(event.target)) {
        setSidebarMenuFoods(false);
      }
    });
  })

  const closeSidebar = () => {
    if (sidebar && sidebarMenu) {showSidebar(); showSidebarMenu();} else {showSidebar();}
    if (sidebar && sidebarMenuGandF) {showSidebar(); showSidebarMenuGandF();} else {showSidebar();}
    if (sidebar && sidebarMenuSports) {showSidebar(); showSidebarMenuSports();} else {showSidebar();}
    if (sidebar && sidebarMenuFoods) {showSidebar(); showSidebarMenuFoods();} else {showSidebar();}
  }

  return (
    <>
      <div className="header">
        <div className="responsive-menu">
          <i class="fa fa-bars" aria-hidden="true" onClick={showSidebar}></i>
        </div>

        <div>
          <img src={NineArchLogo} alt="9-Arch-logo" className="arch-logo" />
        </div>

        <div className="categories-all-parts">
          <span className="categories">Categories</span>

          <div className="categories-hover">
            <CategoriesNavbar />
          </div>
        </div>
        
        <div class="box">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="search" />
        </div>

        <div className="wishlist">
          <i class="fa fa-heart" aria-hidden="true"></i>

          <div className="wishlist-hover"> 
            <WishlistNavbar />
          </div>
        </div>
        
        <div className="responsive-seach-cart">
          <div className="responsive-search">
            <i class="fa fa-search" aria-hidden="true" onClick={showResponsiveSearch}></i>
          </div>

          <div className="shopping-cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <div className="shopping-cart-number">9+</div>

            <div className="cart-hover"> 
              <CartNavbar />
            </div>
          </div>
        </div>
        
        <div className="notifications">
          <i class="fa fa-bell" aria-hidden="true"></i>
          <div className="notifications-dot"></div>

          <div className="notifications-hover"> 
              <NotificationsNavbar />
          </div>
        </div>

        <div className="user-icon">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <div className="user-icon-dot"></div>

          <div className="user-icon-hover"> 
              <UserIconNavbar />
          </div>
        </div>
      </div>

      <div ref={btnRef}>
        <ResponsiveSearch responsiveSearch={responsiveSearch} ref={btnRefResponsiveSearch}>
          <div class="box-responsive">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="search" />
          </div>

          <div className="closer-responsive-search" onClick={showResponsiveSearch}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </ResponsiveSearch>

        <SidebarNav className="slidebar-nav" sidebar={sidebar} >
          <SidebarWrap>
            <div className="menu-closer" onClick={closeSidebar}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>

            <div className="sidebar-menu">
              <div className="profile">

                <div className="profile-icon-menu" onClick={showSidebarMenu}>
                  <div>
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    <div className="profile-icon-menu-dot"></div>
                  </div>
                  <span>Sarasa Silva</span>
                  <div className="angle-right">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="categories-menu arch-menu">
                  <div className="topic-category">
                    <p>9-ARCH</p>
                  </div>

                  <div className="g-and-f">
                    <span>Arch Media</span>
                  </div>

                  <div className="g-and-f">
                    <span>Arch Shop</span>
                  </div>

                  <div className="g-and-f">
                    <span>Arch Academy</span>
                  </div>
                </div>

                <div className="categories-menu">
                  <div className="topic-category">
                    <p>Categories</p>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuGandF}>
                    <span>Gym & Fitness</span>
                    <div className="angle-right-category">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuSports}>
                    <span>Sports</span>
                    <div className="angle-right-category">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuFoods}>
                    <span>Foods & Suppliments</span>
                    <div className="angle-right-category">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="categories-menu">
                  <div className="topic-category">
                    <p>Connect with 9-ARCH</p>
                  </div>

                  <div className="g-and-f">
                    <span>Sell on 9-ARCH</span>
                  </div>

                  <div className="g-and-f">
                    <span>Courier Services</span>
                  </div>
                </div>

                <div className="categories-menu-more">
                  <div className="topic-category">
                    <p>More from 9-ARCH</p>
                  </div>

                  <div className="g-and-f">
                    <span>Invite friends</span>
                  </div>

                  <div className="g-and-f">
                    <span>Help</span>
                  </div>
                </div>

              </div>
            </div>
          </SidebarWrap>
        </SidebarNav>

        <SidebarMenu sidebarMenu={sidebarMenu} ref={btnRefMenu}>
          <div className="sidebar-menu">
            <div onClick={showSidebarMenu} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu">
              <div className="topic-category">
                <p>Alerts</p>
              </div>

              <div className="g-and-f">
                <span>Notifications</span>
              </div>

              <div className="g-and-f">
                <span>Shopping Cart</span>
              </div>

              <div className="g-and-f">
                <span>Wishlist</span>
              </div>

              <div className="g-and-f">
                <span>Orders</span>
              </div>
            </div>

            <div className="categories-menu">
              <div className="topic-category">
                <p>Account</p>
              </div>

              <div className="g-and-f">
                <span>Profile</span>
              </div>

              <div className="g-and-f">
                <span>Payment methods</span>
              </div>

              <div className="g-and-f">
                <span>Purchase history</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Log out</p>
              </div>

              <div className="g-and-f">
                <span>Log out</span>
              </div>
            </div>
          </div>
        </SidebarMenu>
        
        <SidebarMenuGandF sidebarMenuGandF={sidebarMenuGandF} ref={btnRefMenuGandF}>
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuGandF} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Gym & Fitness</p>
              </div>

              <div className="g-and-f">
                <span>Accessories</span>
              </div>

              <div className="g-and-f">
                <span>Women's Wear</span>
              </div>

              <div className="g-and-f">
                <span>Men's Wear</span>
              </div>
            </div>
          </div>
        </SidebarMenuGandF>

        <SidebarMenuSports sidebarMenuSports={sidebarMenuSports} ref={btnRefMenuSports}>
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuSports} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Sports</p>
              </div>

              <div className="g-and-f">
                <span>Accessories</span>
              </div>

              <div className="g-and-f">
                <span>Women's Wear</span>
              </div>

              <div className="g-and-f">
                <span>Men's Wear</span>
              </div>
            </div>
          </div>
        </SidebarMenuSports>

        <SidebarMenuFoods sidebarMenuFoods={sidebarMenuFoods} ref={btnRefMenuFoods}>
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuFoods} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Foods & Suppliments</p>
              </div>

              <div className="g-and-f">
                <span>Suppliments</span>
              </div>

              <div className="g-and-f">
                <span>Protein Bars & Snacks</span>
              </div>

              <div className="g-and-f">
                <span>Other Meals</span>
              </div>
            </div>
          </div>
        </SidebarMenuFoods>
      </div>
    </>
  );
}

export default ArchShopHeader;

// close sidebar on click link react