import { Bar } from 'react-chartjs-2';
import { AddsData, Campaña } from '@/utils/types'; // Assuming these types are defined in your utils/types file

interface CampaignPerformanceChartProps {
  data: AddsData;
}

const CampaignPerformanceChart: React.FC<CampaignPerformanceChartProps> = ({ data }) => {
  const chartData = {
    labels: data.campañas.map((campaña) => campaña.nombre),
    datasets: [
      {
        label: 'Impresiones',
        data: data.campañas.map((campaña) => campaña.impresiones),
        backgroundColor: 'rgb(26 115 232)',
      },
      {
        label: 'Clics',
        data: data.campañas.map((campaña) => campaña.clics),
        backgroundColor: 'rgb(75 85 99)',
      },
      {
        label: 'Conversiones',
        data: data.campañas.map((campaña) => campaña.conversiones),
        backgroundColor: 'rgb(255 87 34)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default CampaignPerformanceChart;
