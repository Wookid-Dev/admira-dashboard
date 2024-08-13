'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Lead } from '@/utils/types';

interface CarouselProps {
  data: Lead[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);

  const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1440) {
      setItemsToShow(5);
    } else if (width >= 1024) {
      setItemsToShow(3);
    } else if (width >= 768) {
      setItemsToShow(2);
    } else {
      setItemsToShow(1);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);

    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - itemsToShow : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - itemsToShow ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative flex items-center justify-center bg-white shadow-md rounded-lg border border-primary p-4 overflow-hidden w-full max-w-full">
      <button
        onClick={prevSlide}
        className="text-primary absolute left-0 ml-2 z-10"
      >
        <FaChevronLeft />
      </button>
      <div
        className="flex overflow-hidden space-x-4 transition-transform duration-300"
        style={{ width: `${itemsToShow * 220 + (itemsToShow - 1) * 16}px` }} // Calculate the total width dynamically
      >
        {data
          .slice(currentIndex, currentIndex + itemsToShow)
          .map((item, index) => (
            <div
              key={index}
              className="min-w-[220px] p-4 bg-white shadow-md rounded-lg border border-primary flex-shrink-0"
            >
              <h4 className="text-primary text-lg font-semibold mb-2">
                {item.nombre}
              </h4>
              <p className="text-secondary">
                Acquisition Cost: ${item.costoAdquisición}
              </p>
              <p className="text-secondary">
                Lifetime Value: ${item.valorDeVida}
              </p>
            </div>
          ))}
      </div>
      <button
        onClick={nextSlide}
        className="text-primary absolute right-0 mr-2 z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
