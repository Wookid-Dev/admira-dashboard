'use client';

import { FaDollarSign, FaMousePointer, FaPercentage } from 'react-icons/fa';
import CampaignPerformanceChart from '@/components/Charts/CampaignPerformanceChart';
import AdPerformanceChart from '@/components/Charts/AdPerformanceChart';
import Carousel from '@/components/Carousel';
import { addsData } from '@/services/google/ads';
import { metaAdsData } from '@/services/meta/ads';
import { crmData } from '@/services/crm/crm';

export default function AdsManagerPage() {
  const totalSpend = addsData.campañas.reduce(
    (total, campaign) => total + campaign.costo,
    0,
  );
  const totalClicks = addsData.campañas.reduce(
    (total, campaign) => total + campaign.clics,
    0,
  );
  const totalImpressions = addsData.campañas.reduce(
    (total, campaign) => total + campaign.impresiones,
    0,
  );
  const averageCTR = ((totalClicks / totalImpressions) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center border border-primary">
          <FaDollarSign className="text-2xl text-primary mb-2" />
          <h4 className="text-secondary text-lg font-semibold">Total Spend</h4>
          <p className="text-2xl font-bold text-primary">${totalSpend}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center border border-primary">
          <FaMousePointer className="text-2xl text-primary mb-2" />
          <h4 className="text-secondary text-lg font-semibold">Total Clicks</h4>
          <p className="text-2xl font-bold text-primary">{totalClicks}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center border border-primary">
          <FaPercentage className="text-2xl text-primary mb-2" />
          <h4 className="text-secondary text-lg font-semibold">Average CTR</h4>
          <p className="text-2xl font-bold text-primary">{averageCTR}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
        <div>
          <h3 className="text-primary text-xl font-semibold mb-2 text-center">
            Campaign Performance
          </h3>
          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center border border-primary h-full">
            <CampaignPerformanceChart data={addsData} />
          </div>
        </div>
        <div>
          <h3 className="text-primary text-xl font-semibold mb-2 text-center">
            Ad Performance
          </h3>
          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center border border-primary h-full">
            <AdPerformanceChart data={metaAdsData} />
          </div>
        </div>
      </div>

      <div className="mt-20 w-full">
        <Carousel data={crmData.leads} />
      </div>
    </div>
  );
}
