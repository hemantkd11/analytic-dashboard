import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { SALES_BY_SAGEMANT } from "../../Apis/constant";

const SalesBySegmants = () => {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(SALES_BY_SAGEMANT);
  //     setData(response.data.data);
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SALES_BY_SAGEMANT);
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
      stacked: true,
      type: "bar",
      height: 350,
      width: "auto",
      distributed: true,
      toolbar: {
        show: false, // Hide the toolbar and zoom icon
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
        horizontal: true,
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
    colors: [
      // this array contains different color code for each data
      "#33b2df",
      "#546E7A",
      "#d4526e",
      "#13d8aa",
      "#A5978B",
      "#900fdd"
    ],
    stroke: {
      width: 1,
      colors: ["$fff"],
    },
    title: {
      text: " Sales by Custumer Segmants",
    },

    xaxis: {
      categories: data.map((items) => items.customer_segment_name),
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
     show:true
    },
    tooltip: {
      enabled: true,
    },
  };
  const chartData = [
    {
      data: data.map((item) => item.no_of_users),
    },
  ];
  return (
    <Chart options={chartOptions} series={chartData} type="bar" height={300} />
  );
};

export default SalesBySegmants;
