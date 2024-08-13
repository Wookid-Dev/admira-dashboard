'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaChartPie, FaBullhorn, FaChartLine, FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsExpanded(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {!isExpanded && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 text-primary text-white focus:outline-none"
        >
          <FaBars />
        </button>
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-background shadow-md transition-transform duration-300 ease-in-out z-40 ${
          isExpanded ? (isMobile ? 'w-64' : 'w-64') : 'w-16'
        } ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 flex flex-col items-center">
          <button
            onClick={toggleSidebar}
            className={`text-primary mb-6 self-end focus:outline-none ${
              !isExpanded ? 'hidden' : ''
            }`}
          >
            <FaBars />
          </button>

          <div className={`${isExpanded ? 'mb-6' : 'mb-0'} flex justify-center`}>
            <Image
              src="/images/logo-transformed.webp"
              alt="Admira Logo"
              width={isExpanded ? 100 : 50}
              height={isExpanded ? 100 : 50}
            />
          </div>

          {isExpanded && (
            <h2 className="text-primary text-2xl font-bold mb-6 text-center">
              LoopSquare
            </h2>
          )}

          <nav className="w-full">
            <ul>
              <li className="mb-4">
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors duration-200"
                >
                  <FaChartPie className="mr-2" />
                  {isExpanded && <span>General Overview</span>}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/ads-manager"
                  className="flex items-center p-2 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors duration-200"
                >
                  <FaBullhorn className="mr-2" />
                  {isExpanded && <span>Ads Manager</span>}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/reporting"
                  className="flex items-center p-2 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors duration-200"
                >
                  <FaChartLine className="mr-2" />
                  {isExpanded && <span>Reporting</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
