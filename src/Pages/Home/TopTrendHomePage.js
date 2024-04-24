import React, { useEffect, useState } from "react";
import "./TopTrendHomepage.css";
import Tab from "../../Components/Tab/Tab";

const TopTrendHomePage = () => {



  return (
    <div className="top-trending-home-page-container">
      <div className="top-trending-home-page-wrapper">
        <div className="top-trend-home-page-heading">
          <h3>TOP TRENDS</h3>
        </div>
        <div className="Tap-for-top-trends">
          <Tab />
        </div>
      </div>
    </div>
  );
};

export default TopTrendHomePage;

//  http://127.0.0.1:8000/restaurant/trendingItems
//"https://jsonplaceholder.typicode.com/users"
