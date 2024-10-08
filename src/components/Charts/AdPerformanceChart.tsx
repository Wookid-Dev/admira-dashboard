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

import { MetaAdsData } from '@/utils/types';

interface AdPerformanceChartProps {
  data: MetaAdsData;
}

const AdPerformanceChart: React.FC<AdPerformanceChartProps> = ({ data }) => {
  const chartData = {
    labels: data.anuncios.map((anuncio) => anuncio.nombre),
    datasets: [
      {
        type: 'bar',
        label: 'Gasto Publicitario',
        data: data.anuncios.map((anuncio) => anuncio.gastoPublicidad),
        backgroundColor: 'rgb(26 115 232)',
      },
      {
        type: 'line',
        label: 'Participación',
        data: data.anuncios.map((anuncio) => anuncio.participación),
        borderColor: 'rgb(255 87 34)',
        fill: false,
      },
    ],
  };

  return (
    <Bar
      // @ts-ignore
      data={chartData}
      options={{ responsive: true, scales: { y: { beginAtZero: true } } }}
    />
  );
};

export default AdPerformanceChart;
