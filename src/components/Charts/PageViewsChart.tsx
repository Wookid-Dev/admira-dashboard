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
        borderColor: 'rgb(26 115 232)',
        backgroundColor: 'rgb(26 115 232)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default PageViewsChart;
