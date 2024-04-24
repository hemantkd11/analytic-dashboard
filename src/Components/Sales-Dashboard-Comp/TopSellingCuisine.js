import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { TOP_SELLING_CUISINE } from "../../Apis/constant";

const TopSellingCuisine = () => {
  const [data,setData]=useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(TOP_SELLING_CUISINE);
      const jsonData = await response.json();
          // setData(jsonData.data);
      // console.log(jsonData.data);
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const chartOptions = {
    chart: {
      type: "pie",
      toolbar: {
        show: true, // Hide the toolbar and zoom icon
      },
    },
    title: {
      text: "Top Selling Cuisine",
    },
    dataLabels: {
      enabled: true,

      style: {
        fontSize: "10px",
        colors: ["#fff"],
      },
    },
    tooltip: {
      enabled: true,
    },
    labels: data.map((item) => item.cuisine_type),
    colors: ["#FF5722", "#03A9F4", "#4CAF50", "#FF9800", "#9C27B0"],
  };

  const chartData = data.map((item) => item.count); 
  return (
    <Chart options={chartOptions}  series={chartData}  type="pie" height={300} />
  );
};

export default TopSellingCuisine;
