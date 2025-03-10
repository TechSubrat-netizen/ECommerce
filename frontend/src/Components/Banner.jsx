import React from 'react';

const Banner = () => {
  return (
    <section className="relative bg-gray-100 h-96 md:h-screen">
      <img 
        src="/api/placeholder/1920/1080" 
        alt="Hero Image" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Spring Collection 2025
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              Discover the latest trends and essentials for the new season.
            </p>
            <button className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;