import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { TOP_SELLING_AREAWWISE } from "../../Apis/constant";
const TopSellingItemsAreaWise = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(TOP_SELLING_AREAWWISE);
      const jsonData = await response.json();
         // setData(jsonData.data);
      // console.log(jsonData.data);
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // const area = [...new Set(data?.map((item) => item.restaurant_area))];

  const chartOptions = {
    chart: {
      stacked: true,
      type: "bar",
      height: 350,
      width: "auto",
      toolbar: {
        show: true, // Hide the toolbar and zoom icon
      },
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: "12px",
        color: ["black"],
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "10px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["$fff"],
    },
    title: {
      text: "Top Selling Item In Areas",
    },
    xaxis: {
      categories: [
        "Al Wafrah",
        "Fahaheel",
        "Al Andalus",
        "Shuwaikh",
        "Abu Halifa",
      ],
      // categories: data.map((item) => item.restaurantArea),
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
      row: {
        color: ["red", "pink", "purple"],
      },
    },
    tooltip: {
      enabled: true,
    },
  };
  const chartData = [
    {
      name: "Non-Veg",
      data:[22,34,21,30,26]
      // data:data.map((item) => item.noOfServing),
    },
    {
      name: "Vegan",
      data:[30,22,26,24,22]
      // data:data.map((item) => item.noOfServing),
    },
    {
      name: "Veg",
      data:[20,27,24,26,28]
      // data:data.map((item) => item.noOfServing),
    },
  ];
  return (
    <Chart options={chartOptions} series={chartData} type="bar" height={300} />
  );
};

export default TopSellingItemsAreaWise;
