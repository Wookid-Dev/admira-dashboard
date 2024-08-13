// components/SessionsTrendChart.tsx
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

// Registrar los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const SessionsTrendChart = ({ data }) => {
  const chartData = {
    labels: data.campañas.map((campaña) => campaña.nombre),
    datasets: [
      {
        label: 'Clics',
        data: data.campañas.map((campaña) => campaña.clics),
        borderColor: '#1A73E8',
        backgroundColor: 'rgba(26, 115, 232, 0.2)',
        fill: false,
      },
      {
        label: 'Conversiones',
        data: data.campañas.map((campaña) => campaña.conversiones),
        borderColor: '#FBBC05',
        backgroundColor: 'rgba(251, 188, 5, 0.2)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tendencia de Sesiones',
      },
    },
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default SessionsTrendChart;
