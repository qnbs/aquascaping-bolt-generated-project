import React from 'react';
    import { Line } from 'react-chartjs-2';
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

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

    const WaterChart = ({ waterParams }) => {
      const data = {
        labels: ['Ammoniak', 'Nitrit', 'Nitrat'],
        datasets: [
          {
            label: 'Konzentration (mg/L)',
            data: [waterParams.ammonia, waterParams.nitrite, waterParams.nitrate],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return <Line data={data} options={options} />;
    };

    export default WaterChart;
