'use client';

import PageViewsChart from '../components/Charts/PageViewsChart';
import SessionsChart from '../components/Charts/SessionsChart';
import DemographicsChart from '../components/Charts/DemographicsChart';
import { FaChartLine, FaEye, FaPercentage } from 'react-icons/fa';
import { metrics } from '@/services/google/analytics';

export default function HomePage() {
  const totalSessions = metrics.sesiones.reduce(
    (total, item) => total + item.sesiones,
    0,
  );
  const totalPageViews = metrics.vistasPagina.reduce(
    (total, item) => total + item.vistas,
    0,
  );
  const conversionRate = ((totalSessions / totalPageViews) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10 bg-background">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">General Overview</h1>
        <p className="text-secondary text-lg">
          A summary of key performance metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 w-full">
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-center border border-primary">
          <FaChartLine className="text-2xl text-primary mb-2" />
          <h4 className="text-secondary text-lg font-semibold">
            Total Sessions
          </h4>
          <p className="text-3xl font-bold text-primary">{totalSessions}</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-center border border-primary">
          <FaEye className="text-2xl text-primary mb-2" />
          <h4 className="text-secondary text-lg font-semibold">
            Total Page Views
          </h4>
          <p className="text-3xl font-bold text-primary">{totalPageViews}</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-center border border-primary">
          <FaPercentage className="text-2xl text-primary mb-2" />
          <h4 className="text-secondary text-lg font-semibold">
            Conversion Rate
          </h4>
          <p className="text-3xl font-bold text-primary">{conversionRate}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        <div className="flex flex-col gap-5">
          <h3 className="text-primary text-xl font-semibold mb-2 text-center">
            Demographics
          </h3>
          <div className="bg-white p-4 shadow-md rounded-lg max-w-2xl flex items-center justify-center border border-primary h-96">
            <DemographicsChart
              data={metrics}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-primary text-xl font-semibold mb-2 text-center">
            Sessions
          </h3>
          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center border border-primary h-96">
            <SessionsChart
              data={metrics.sesiones.map(({ fecha, sesiones }) => ({
                fecha,
                sesiones,
              }))}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-primary text-xl font-semibold mb-2 text-center">
            Page Views
          </h3>
          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center border border-primary h-96">
            <PageViewsChart data={metrics} />
          </div>
        </div>
      </div>
    </div>
  );
}
