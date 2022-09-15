import React, { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );






const LineChart = ({data}) => {

    console.log("data from chart:")
    console.log(data)

   const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };


    const [chartData, setChartData] = useState({
        labels: data.prices.map((item) => item[0]),
        // labels: ["1st", "2nd", "3rd"],
        datasets: [
            {
                label: "price",
                data: data.prices.map((item) => item[1])
                // data: [3,5,7]
            }
        ],
    })

  return (
    
    <Line data={chartData} options={options} />
    // <div>sal chart</div>
  )
}

export default LineChart