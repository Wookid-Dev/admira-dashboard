import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  BarController,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Title,
  Tooltip,
  Legend,
);

const AdPerformanceChart = ({ data }) => {
  const chartData = {
    labels: data.anuncios.map((anuncio) => anuncio.nombre),
    datasets: [
      {
        type: 'bar',
        label: 'Gasto Publicitario',
        data: data.anuncios.map((anuncio) => anuncio.gastoPublicidad),
        backgroundColor: 'rgba(26, 115, 232, 0.6)',
      },
      {
        type: 'line',
        label: 'Participación',
        data: data.anuncios.map((anuncio) => anuncio.participación),
        borderColor: 'rgba(251, 188, 5, 1)',
        fill: false,
      },
    ],
  };

  return (
    <Bar
      data={chartData}
      options={{ responsive: true, scales: { y: { beginAtZero: true } } }}
    />
  );
};

export default AdPerformanceChart;
