import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { SALES_BY_CATEGORY } from "../../Apis/constant";
const SalesByCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SALES_BY_CATEGORY);
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
      offsetX: -6,
      offsetY: 0,
      style: {
        fontSize: "8px",
        colors: ["black"],
      },
    },
    title: {
      text: "Sale By Category ",
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
      categories:data.map((item)=>item.months),
      labels: {
        show: true,
      },
    },
    // yaxis: {
    //     categories:['20k' ,'25k','30k','40k','50k','100k'],
    //   labels: {
    //     show: true,
    //   },
    // },
    fill: {
      opacity: 1,
    },
    grid: {
      row: {
        color: ["red", "green", "yellow"],
      },
    },
    tooltip: {
      enabled: true,
    },
  };
  const chartData = [
    {
      name: "Totel Sale",
      data:data.map((item)=>item.total_sales),
    },
    {
      name: "Total profit",
      data:data.map((item)=>item.gain),
    },
    {
      name: "Total loss",
      data:data.map((item)=>item.loss),
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

export default SalesByCategory;
