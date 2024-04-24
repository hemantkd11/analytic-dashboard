import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { SALES_BY_CHANNEL } from "../../Apis/constant";
const SalesByChannel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SALES_BY_CHANNEL);
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

      animations: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
      },
    },
    dataLabels: {
      enabled: true,
      //   offsetX : -6 ,
      style: {
        fontSize: "10px",
        colors: ["#fff"],
      },
    },
    titlel: {
      text: "Sales By Channel",
    },
    stroke: {
      show: "ture",
      width: 0,
      colors: ["#fff"],
      radius: "10px",
    },
    title: {
      text: " Sales By Different Channel",
    },
    xaxis: {
      categories: data.map((item)=>item.restaurantName),
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
      show: false,
    },
    tooltip: {
      enabled: true,
    },
  };

  const chartData = [
    {
      name: "Delivery",
      data:data.map((item)=>item.countOfDelivery) ,
    },
    {
      name: "Online",
      data:data.map((item)=>item.countOfOnline),
    },
    {
      name: "Dinein",
      data:data.map((item)=>item.countOfDinein),
    },
  ];

  return (
    <Chart options={chartOptions} series={chartData} type="bar" height={300} />
  );
};

export default SalesByChannel;
