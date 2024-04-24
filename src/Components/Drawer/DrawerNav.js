import React, { Children } from "react";
import './drawer.css'
// import {
//   // Fath,
//   FcSalesPerformance,
//   MdCompareArrows,
//   MdSocialDistance,
//   GiBreakingChain,
//   SiCoinmarketcap,
//   GiProfit,
//   MdOutlineInventory,
//   FaBars,
// } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { NavLink,Link } from "react-router-dom";
const DrawerNav = ({children}) => {
  const menuItem = [
    {
      path: "/home/dashboard",
      name: "Analytical Dashboard",
      icon: "as",
    },
    {
      path: "/",
      name: " Sales Analytical Dashboard",
      // icon: <FcSalesPerformance />
      icon: "ss",
    },
    {
      path: "/",
      name: "Com Analytical Dashboard",
      // icon: <MdCompareArrows />
      icon: "ss",
    },
    {
      path: "/",
      name: "Social Media Analytical Dashboard",
      // icon: <MdSocialDistance />
      icon: "ss",
    },
    {
      path: "/",
      name: "Supply Chain Dashboard",
      // icon: <GiBreakingChain />
      icon: "ss",
    },
    {
      path: "/",
      name: "Marketing Analytics Dashboard",
      // icon: <SiCoinmarketcap />

      icon: "ss",
    },
    {
      path: "/",
      name: "Profit Margin Analysis Dashboard",
      // icon: <GiProfit />
      icon: "ss",
    },
    {
      path: "/",
      name: "Inventory Analysis Dashboard7 ",
      // icon: <MdOutlineInventory />
      icon: "ss",
    },
  ];
  return (
    <div className="SideDrawer-container">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
        
          {menuItem.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="link "
              activeClassName="active"
             
            >
              <div className="icon">{item.icon}</div>
              <div className="link-tex">{item.name}</div>
            </Link>
          ))}
      </div>
        <main>{children}</main>
    
    </div>
  );
};

export default DrawerNav;
