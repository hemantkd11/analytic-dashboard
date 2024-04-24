import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { FORCASTING_SALES_DATA } from "../../Apis/constant";
const ForecastionSsales = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(FORCASTING_SALES_DATA);
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
      type: "line",
      height: 350,
      width: "auto",
      zome: {
        enabled: false,
      },
      toolbar: {
        show: false, // Hide the toolbar and zoom icon
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 6,
      style: {
        fontSize: "12px",
        colors: ["black"],
      },
    },
    title: {
      text: "Forecasting Sales ",
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      // categories: [
      //   "Jan",
      //   "feb",
      //   "mar",
      //   "apl",
      //   "may",
      //   "june",
      //   "july",
      //   "aug",
      //   "sep",
      //   "oct",
      //   "nov",
      //   "dec",
      // ],
      categories: data.map((item)=>item.months),
      labels: {
        show: true,
      },
    },
    yaxis: {
      categories: [2023, 2024, 2025],
      labels: {
        show: true,
      },
    },
    fill: {
      opacity: 1,
    },
    // grid: {
    //   row: {
    //     color: ["red", "green", "yellow"],
    //   },
    // },
    tooltip: {
      enabled: true,
    },
  };
  const chartData = [
    {
      name: "Totel Sale",
      // data: [44, 55, 41, 67, 22, , 23, 44, 55, 22, 11, 22, 33],
      data: data.map((item)=>item.no_of_users),
    },
  ];
  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartData}
        type="line"
        height={300}
      />
    </div>
  );
};

export default ForecastionSsales;
