import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { TOP_SELLING_CUISINE } from "../../Apis/constant";

const Advertising = () => {
//   const [data,setData]=useState([])
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(TOP_SELLING_CUISINE);
//       const jsonData = await response.json();
//       setData(jsonData.data);
//       console.log(jsonData.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
  const chartOptions = {
    chart: {
      type: "pie",
      toolbar: {
        show: true, // Hide the toolbar and zoom icon
      },
    },
    title: {
      text: "Advertising performance of restaurants",
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
    // labels: data.map((item) => item.cuisine_type),
    labels: ["Pureness","Batata Mudahdah","Bo Zaid","AlBal","DePe"],
    colors: ["#FF5722", "#03A9F4", "#4CAF50", "#FF9800", "#9C27B0"],
  };

//   const chartData = data.map((item) => item.serving); 
const chartData = [22000,34000,21000,55000,18000] 
  return (
    <Chart options={chartOptions}  series={chartData}  type="pie" height={300} />
  );
};

export default Advertising;
