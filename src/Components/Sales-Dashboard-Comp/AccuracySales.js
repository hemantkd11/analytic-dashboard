
import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { TOP_SELLING_CUISINE } from "../../Apis/constant";

const SalesAccuracy = () => {
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
const options = {
    chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  title: {
    text: "Sales Accuracy",
    align: "left",
    style: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333"
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Percent'],
  };

  const series =[85]; 
  return (
    <Chart options={options} series={series} type="radialBar" height={350}  />
  );
};

export default SalesAccuracy;
