// components/SessionsChart.tsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const SessionsChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.fecha),
    datasets: [
      {
        label: 'Sesiones',
        data: data.map((item) => item.sesiones),
        borderColor: '#34A853',
        backgroundColor: 'rgba(52, 168, 83, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      y2: {
        beginAtZero: true,
        position: 'right',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default SessionsChart;
