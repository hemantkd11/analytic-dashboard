import React from "react";
import "./Analytics.css";
import SalesByChannel from "../../Components/Sales-Dashboard-Comp/SalesByChannel";
import TopSellingCuisine from "../../Components/Sales-Dashboard-Comp/TopSellingCuisine";
import TopSellingItemsAreaWise from "../../Components/Sales-Dashboard-Comp/TopSellingItemAreaWise";
import TopsellingProduct from "../../Components/Sales-Dashboard-Comp/TopSellingProduct";
import SalesByCategory from "../../Components/Sales-Dashboard-Comp/SaleByCategory";
import SalesBySegmants from "../../Components/Sales-Dashboard-Comp/SalesBySegmant";
import ForecastionSsales from "../../Components/Sales-Dashboard-Comp/ForecastingSales";
import Forecastingforupcomingweek from "../../Components/Sales-Dashboard-Comp/ForecastingUpcomingWeek";
import DemandFoecasting from "../../Components/Sales-Dashboard-Comp/DemandForecast";
import SalesMap from "../../Components/Sales-Dashboard-Comp/SalesMap";
import ComparisonChart from "../../Components/Sales-Dashboard-Comp/ComparisonChart";
import SalesAccuracy from "../../Components/Sales-Dashboard-Comp/AccuracySales";
const Analytics = ({ is }) => {
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
          <div className="Sales-dashboard-container">
            {/* Top selling product 1 */}

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
                <TopsellingProduct />
              </div>
            </div>

            {/* Top selling Cuisine  2*/}
            <div className="Top-Selling-Box">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  This chart represents the distribution of sales based on
                  different cuisines offered by the restaurant. It highlights
                  the percentage or proportion of sales contributed by each
                  cuisine
                </span>
              </div>
              <div>
                <TopSellingCuisine />
              </div>
            </div>
            {/* Top selling item Area wise  3*/}
            <div className="Top-Selling-Box">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  This chart visualizes the top-selling items categorized by
                  specific areas within the restaurant. It shows the sales
                  performance of different items in each area, either in a
                  stacked bar chart format or grouped bar chart format.
                </span>
              </div>
              <div>
                <TopSellingItemsAreaWise />
              </div>
            </div>
            {/* sale by channel 4 */}
            <div className="Top-Selling-Box item2">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  This chart illustrates the distribution of sales across
                  different channels or platforms through which the restaurant
                  sells its products. It compares the sales performance of
                  various channels, such as online orders, dine-in, delivery,
                  etc
                </span>
              </div>
              <div>
                <SalesByChannel />
              </div>
            </div>

            {/* Sales by Customer Segments 6*/}
            <div className="Top-Selling-Box ">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  This chart displays the sales distribution based on customer
                  segments. It shows the revenue or sales generated from various
                  customer groups, such as new customers, loyal customers,
                  corporate clients, etc., using a horizontal bar chart.
                </span>
              </div>
              <div>
                <SalesBySegmants />
              </div>
            </div>
            {/* 	Sales by product CATEGORY 5 */}
            <div className="Top-Selling-Box item">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  This chart illustrates the distribution of sales across
                  different channels or platforms through which the restaurant
                  sells its products. It compares the sales performance of
                  various channels, such as online orders, dine-in, delivery,
                  etc., using a grouped bar chart.
                </span>
              </div>
              <div>
                <SalesByCategory />
              </div>
            </div>

            {/* Forecasting for upccoming week/season */}
            <div className="Top-Selling-Box item2">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  This chart presents the forecasted sales for upcoming weeks or
                  specific seasons. It helps in planning inventory, staffing,
                  and marketing strategies based on expected demand.
                </span>
              </div>
              <div>
                <Forecastingforupcomingweek />
              </div>
            </div>
            {/* forcasting for demand of project */}
            <div className="Top-Selling-Box">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  Similar to sales forecasting, this section focuses on
                  predicting the demand for products or menu items. It assists
                  in managing inventory and supply chain operations
                  effectively.t
                </span>
              </div>
              <div>
                <DemandFoecasting />
              </div>
            </div>
            {/* sales forecast 7 */}
            <div className="Top-Selling-Box item">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  This section provides sales forecasting data, which predicts
                  future sales based on historical data and trends. It can be
                  displayed as a line chart, showing the projected sales over
                  time
                </span>
              </div>
              <div>
                <ForecastionSsales />
              </div>
            </div>

            {/* comparion cart */}

            <div className="Top-Selling-Box item2">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  sales comparison chart is a visual representation of sales
                  data for different restaurant outlets. It can be used to
                  compare sales performance over time, identify trends, and
                  identify areas for improvement
                </span>
              </div>
              <div>
                <ComparisonChart />
              </div>
            </div>
            {/* sales accuracy */}
            <div className="Top-Selling-Box">
              <div class="tooltip">
                <img src="/info.png" style={{ width: "20px" }} />
                <span class="tooltiptext">
                  sales comparison chart is a visual representation of sales
                  data for different restaurant outlets. It can be used to
                  compare sales performance over time, identify trends, and
                  identify areas for improvement
                </span>
              </div>
              <div>
                <SalesAccuracy />
              </div>
            </div>
            {/* <div className="full-width">
          <div className="SalesMap-wrapper">
            <SalesMap />
          </div> */}
        </div>
        
        </div>
      
      </div>
    </div>
  );
};

export default Analytics;
