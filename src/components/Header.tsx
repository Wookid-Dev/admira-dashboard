'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [message, setMessage] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    switch (pathName) {
      case '/':
        setMessage('LoopSquare Dashboard');
        break;
      case '/ads-manager':
        setMessage('Ads Manager');
        break;
      case '/reporting':
        setMessage('Reporting');
        break;
      default:
        setMessage('You are in ' + pathName.replace('/', ''));
    }
  }, [pathName]);

  return (
    <header className="bg-primary text-white py-8 px-6">
      <h1 className="ml-20 text-white text-3xl md:text-4xl font-bold">
        {message}
      </h1>
    </header>
  );
};

export default Header;
