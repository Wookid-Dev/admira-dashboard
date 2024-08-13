'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative flex items-center bg-white shadow-md rounded-lg border border-primary p-4 overflow-hidden w-full max-w-full">
      <button
        onClick={prevSlide}
        className="text-primary absolute left-0 ml-2 z-10"
      >
        <FaChevronLeft />
      </button>
      <div className="flex overflow-hidden space-x-4 mx-12 w-full">
        {data.slice(currentIndex, currentIndex + 6).map((item, index) => (
          <div
            key={index}
            className={`min-w-[220px] p-4 bg-white shadow-md rounded-lg border border-primary flex-shrink-0 transition-transform duration-300 ${
              index === 0 ? 'transform scale-100' : 'transform scale-90'
            }`}
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
