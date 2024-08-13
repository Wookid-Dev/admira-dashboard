import Link from 'next/link';
import Image from 'next/image';
import { FaChartPie, FaBullhorn, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-background shadow-md min-h-screen overflow-y-auto">
      <div className="p-4">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/logo-transformed.webp"
            alt="Admira Logo"
            width={150}
            height={150}
          />
        </div>

        <h2 className="text-primary text-2xl font-bold mb-6 text-center">
          LoopSquare
        </h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                href="/"
                className="flex items-center p-2 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors duration-200"
              >
                <FaChartPie className="mr-2" />
                General Overview
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/ads-manager"
                className="flex items-center p-2 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors duration-200"
              >
                <FaBullhorn className="mr-2" />
                Ads Manager
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/reporting"
                className="flex items-center p-2 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors duration-200"
              >
                <FaChartLine className="mr-2" />
                Reporting
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
