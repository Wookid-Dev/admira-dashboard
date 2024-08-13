'use client';

import {
  FaChartBar,
  FaMousePointer,
  FaExchangeAlt,
  FaPercentage,
  FaDollarSign,
  FaMoneyBillWave,
} from 'react-icons/fa';
import SessionsTrendChart from '@/components/Charts/SessionsTrendChart';
import DemographicsChart from '@/components/Charts/DemographicsChart';
import { addsData } from '@/services/google/ads';
import { metrics } from '@/services/google/analytics';
import { Campaña } from '@/utils/types';

function calculateTotalMetrics(campaigns: Campaña[]) {
  let totalImpressions = 0;
  let totalClicks = 0;
  let totalConversions = 0;
  let totalCost = 0;

  campaigns.forEach((campaign) => {
    totalImpressions += campaign.impresiones;
    totalClicks += campaign.clics;
    totalConversions += campaign.conversiones;
    totalCost += campaign.costo;
  });

  const conversionRate =
    totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0;
  const costPerClick = totalClicks > 0 ? totalCost / totalClicks : 0;

  return {
    totalImpressions,
    totalClicks,
    totalConversions,
    totalCost,
    conversionRate,
    costPerClick,
  };
}

export default function ReportingPage() {
  const {
    totalImpressions,
    totalClicks,
    totalConversions,
    totalCost,
    conversionRate,
    costPerClick,
  } = calculateTotalMetrics(addsData.campañas);

  return (
    <div className="h-full flex flex-col items-center justify-center w-full p-10 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <div>
          <h3 className="text-primary text-xl font-semibold mb-2 text-center">
            Sessions Trend
          </h3>
          <div className="bg-white p-4 shadow-md rounded-lg w-full h-80 flex items-center justify-center border border-primary">
            <SessionsTrendChart data={addsData} />
          </div>
        </div>
        <div>
          <h3 className="text-primary text-xl font-semibold mb-2 text-center">
            Demographics
          </h3>
          <div className="bg-white p-4 shadow-md rounded-lg w-full h-80 flex items-center justify-center border border-primary">
            <DemographicsChart data={metrics} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-white p-4 shadow-md rounded-lg text-center border border-primary flex flex-col items-center">
          <FaChartBar className="text-2xl text-primary mb-2" />
          <h3 className="text-secondary text-lg font-semibold mb-2">
            Total Impressions
          </h3>
          <p className="text-xl text-primary font-bold">{totalImpressions}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg text-center border border-primary flex flex-col items-center">
          <FaMousePointer className="text-2xl text-primary mb-2" />
          <h3 className="text-secondary text-lg font-semibold mb-2">
            Total Clicks
          </h3>
          <p className="text-xl text-primary font-bold">{totalClicks}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg text-center border border-primary flex flex-col items-center">
          <FaExchangeAlt className="text-2xl text-primary mb-2" />
          <h3 className="text-secondary text-lg font-semibold mb-2">
            Total Conversions
          </h3>
          <p className="text-xl text-primary font-bold">{totalConversions}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg text-center border border-primary flex flex-col items-center">
          <FaPercentage className="text-2xl text-primary mb-2" />
          <h3 className="text-secondary text-lg font-semibold mb-2">
            Conversion Rate
          </h3>
          <p className="text-xl text-primary font-bold">
            {conversionRate.toFixed(2)}%
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg text-center border border-primary flex flex-col items-center">
          <FaDollarSign className="text-2xl text-primary mb-2" />
          <h3 className="text-secondary text-lg font-semibold mb-2">
            Total Cost
          </h3>
          <p className="text-xl text-primary font-bold">${totalCost}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg text-center border border-primary flex flex-col items-center">
          <FaMoneyBillWave className="text-2xl text-primary mb-2" />
          <h3 className="text-secondary text-lg font-semibold mb-2">
            Cost per Click
          </h3>
          <p className="text-xl text-primary font-bold">
            ${costPerClick.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
