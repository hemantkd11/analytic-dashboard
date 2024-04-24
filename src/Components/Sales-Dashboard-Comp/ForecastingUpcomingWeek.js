import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { FORCASTING_FOR_UPCOMING_DAYS } from "../../Apis/constant";
const Forecastingforupcomingweek = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(FORCASTING_FOR_UPCOMING_DAYS);
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
      text: "Forecasting Sales For UpComing Week/Season ",
    },
    stroke: {
      curve: "stepline",
    },
    xaxis: {
      categories:data.map((item)=>item.weeks),
      labels: {
        show: true,
      },
    },
    // yaxis: {
    //   categories: [2023, 2024, 2025],
    //   labels: {
    //     show: true,
    //   },
    // },
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
      name: "day",
      data: data.map((item)=>item.no_of_users_by_weeks),
    },
    // {
    //   name: "season",
    //   data: [13, 23, 20, 8, 13],
    // },
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

export default Forecastingforupcomingweek;
