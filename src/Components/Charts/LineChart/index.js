import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { green } from "@mui/material/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data, name, days }) => {
  const unixTimestampConvertor = (unixTimestamp) => {


    const dateObject = new Date(unixTimestamp);

    const date = dateObject.toLocaleDateString("en-US");
    const time = dateObject.toLocaleTimeString("en-US");



    return `${date} ${time}`;
  };

  console.log("data from chart:");
  console.log(data);

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          // For a category axis, the val is the index so the lookup via getLabelForValue is needed
          autoSkip: true,
          maxTicksLimit: 8,
        }
      },
      y: {
        ticks: {
          beginAtZero:true,
          callback: function(value, index, values) {
                  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '$';
          }
      },
      }
    },
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: `${name} price in the last ${days} days`,
      },
    },
  };

  const [chartData, setChartData] = useState({
    labels: ["placeholder"],
    // labels: ["1st", "2nd", "3rd"],
    datasets: [
      {
        label: "price",
        data: [1],
        // data: [3,5,7]
      },
    ],
  });

  console.log(data.prices)
  
  useEffect(() => {
    if (data.length !== 0) {
      setChartData({
        labels: data?.prices.map((item) => unixTimestampConvertor(item[0])),
        // labels: ["1st", "2nd", "3rd"],
        datasets: [
          {
            label: "price",
            data: data?.prices.map((item) => item[1]),
            // data: [3,5,7]
            borderColor: '#6ED3B3',
            tension: 0.5,
            pointBorderColor: 'transparent',
          },
        ],
      });
    }
  }, [data]);

  return <Line data={chartData} options={options} />;
};

export default LineChart;
