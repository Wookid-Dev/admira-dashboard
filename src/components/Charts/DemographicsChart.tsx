import { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { MetricsData } from '@/utils/types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DemographicsChartProps {
  data: MetricsData;
  options?: any;
}

const DemographicsChart: React.FC<DemographicsChartProps> = ({ data, options }) => {
  const chartRef = useRef<ChartJS<'pie'> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
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

  return <Pie ref={chartRef} data={chartData} options={options} />;
};

export default DemographicsChart;
