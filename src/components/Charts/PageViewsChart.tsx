// components/PageViewsChart.tsx
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
  Legend,
);

import { MetricsData } from '@/utils/types';

interface PageViewsChartProps {
  data: MetricsData;
}

const PageViewsChart: React.FC<PageViewsChartProps> = ({ data }) => {
  const chartData = {
    labels: data.vistasPagina.map((item: any) => item.fecha),
    datasets: [
      {
        label: 'Vistas de Página',
        data: data.vistasPagina.map((item: any) => item.vistas),
        borderColor: '#1A73E8',
        backgroundColor: 'rgba(26, 115, 232, 0.5)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default PageViewsChart;
