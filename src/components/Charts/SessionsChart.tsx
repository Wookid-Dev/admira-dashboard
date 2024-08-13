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
import { FC } from 'react';

// Register chart components
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

import { Sesion } from '@/utils/types';

interface SessionsChartProps {
  data: Sesion[];
}

const SessionsChart: FC<SessionsChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.fecha),
    datasets: [
      {
        label: 'Sesiones',
        data: data.map((item) => item.sesiones),
        borderColor: 'rgb(255 87 34)',
        backgroundColor: 'rgb(255 87 34)',
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

  // @ts-ignore
  return <Line data={chartData} options={options} />;
};

export default SessionsChart;
