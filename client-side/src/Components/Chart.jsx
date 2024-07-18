
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box } from '@chakra-ui/react';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: Array.from({ length: data }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Construction Progress (Height in ft)',
        data: Array.from({ length: data }, (_, i) => (i + 1) * (6 / data)), 
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Height (ft)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
    },
  };

  return (
    <Box mt={6}>
      <Bar data={chartData} options={options} />
    </Box>
  );
};

export default ChartComponent;
