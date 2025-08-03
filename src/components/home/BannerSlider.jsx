import React, { useEffect, useState } from 'react';
const images = [
  "/banner/anti-fraud-mobile-banner.webp",
  "/banner/homepage-mobile-image.webp",
  "/banner/pay-bill-mobile-banner.webp",
  "/banner/website.webp",
  "/banner/website-mobile.webp",
];

const BannerSlider = () => {
      const [current, setCurrent] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // change every 3 seconds
        return () => clearInterval(interval);
      }, []);
    return (
      <div className="relative w-full pb-10 max-w-xl  mb-24 mx-auto overflow-hidden rounded-lg">
        {/* Images Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition ${
                current === index ? "bg-pink-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
};

export default BannerSlider;