import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { MetricsData } from '@/utils/types';

interface DemographicsChartProps {
  data: MetricsData;
  options: any;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const DemographicsChart:React.FC<DemographicsChartProps> = ({ data, options }) => {
  useEffect(() => {
    return () => {
      ChartJS.getChart()?.destroy();
    };
  }, []);

  const chartData = {
    labels: data.demografía.edad.map((item) => item.rango),
    datasets: [
      {
        label: 'Demografía por Edad',
        data: data.demografía.edad.map((item) => item.porcentaje),
        backgroundColor: ['#1A73E8', '#34A853', '#FBBC05'],
      },
    ],
  };

  return <Pie data={chartData} options={options} />;
};

export default DemographicsChart;
