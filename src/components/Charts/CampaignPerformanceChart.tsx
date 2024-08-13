import { Bar } from 'react-chartjs-2';

const CampaignPerformanceChart = ({ data }) => {
  const chartData = {
    labels: data.campañas.map((campaña) => campaña.nombre),
    datasets: [
      {
        label: 'Impresiones',
        data: data.campañas.map((campaña) => campaña.impresiones),
        backgroundColor: 'rgba(26, 115, 232, 0.6)',
      },
      {
        label: 'Clics',
        data: data.campañas.map((campaña) => campaña.clics),
        backgroundColor: 'rgba(52, 168, 83, 0.6)',
      },
      {
        label: 'Conversiones',
        data: data.campañas.map((campaña) => campaña.conversiones),
        backgroundColor: 'rgba(251, 188, 5, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default CampaignPerformanceChart;
