import React from "react";
import "./Analytics.css";
// import Advertising from "../../Components/Market_Dashboard/Advertising";

const MarketDashboard = ({ is }) => {
  return (
    <div className="Sales-Container">
      <div className="sales-box">
        <div className="main-sales-container">
          <div className="dashboard-User-data-box">
            <div className="user-data-wrapper">
              <div className="total-data">Users</div>
              <div className="Count-box">543628</div>
            </div>
            <div className="user-data-wrapper  ">
              <div className="total-data">Total Sales</div>
              <div className="Count-box">233628</div>
            </div>
            <div className="user-data-wrapper">
              <div className="total-revenue  total-data">Total Revenue</div>
              <div className="Count-box">683628</div>
            </div>
            <div className="user-data-wrapper item4">
              <div className="total-data">Posts</div>
              <div className="Count-box">443628</div>
            </div>

            <div className="user-data-wrapper ">
              <div className="total-data">Dishes</div>
              <div className="Count-box">343628</div>
            </div>
          </div>
          <div className="market-dashboard-container">
            {/* Top selling product 1 */}
{/* 
            <div className="Top-Selling-Box">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  This chart displays the top-selling products or menu items
                  based on their sales volume or revenue. It helps identify the
                  most popular items among customers.
                </span>
              </div>
              <div>
                <Advertising />
              </div>
            </div> */}
            {/* image */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDashboard;
