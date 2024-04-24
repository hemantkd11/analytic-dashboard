import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { TOP_SELLING_PRODUCTS } from "../../Apis/constant";
const ComparisonChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(TOP_SELLING_PRODUCTS);
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
      type: "bar",

      // animations: {
      //   enabled: false,
      // },
    },
    plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 8,
          distributed: true,
          columnWidth: "40%", // Adjust the width of the bars
          dataLabels: {
            position: "top", // Enable data labels on top of the bars
          },
        },
      },
    colors: [
      // this array contains different color code for each data
      "#d92323",
      "#2351d9",
      "#2dd923",
      "#e19910",
      "#e110d9",
    ],
    title: {
      text: "Sales Comparison between Restarants",
    },
    dataLabels: {
      enabled: true,
        offsetX : -6 ,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: "ture",
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories:["Pizza Hut", "Domino's","Nurger King" ,"Old kfc BK-3","Johnny Rockets"],
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: true,
    },
    tooltip: {
      enabled: true,
    },
  };

  const chartData = [
    {
      name: "Month OF January",
      data: [23445,34522,43222 ,34432,23223],
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="bar"
      height={300}
    />
  );
};

export default ComparisonChart;
