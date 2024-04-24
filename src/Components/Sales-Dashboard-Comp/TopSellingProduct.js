import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { TOP_SELLING_PRODUCTS } from "../../Apis/constant";
const TopsellingProduct = () => {
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
      console.log( " top selling", jsonData);
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
      },
    },
    colors: [
      // this array contains different color code for each data
      "#33b2df",
      "#fd7e14",
      "#d4526e",
      "#13d8aa",
      "#4CAF50",
    ],
    title: {
      text: "Top Selling Product",
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
      categories: data.map((item) => item.menu_type_desc),
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
      data: data.map((item) => item.no_of_serving),
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

export default TopsellingProduct;
