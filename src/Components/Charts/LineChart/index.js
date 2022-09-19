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
          },
        ],
      });
    }
  }, [data]);

  return <Line data={chartData} options={options} />;
};

export default LineChart;
