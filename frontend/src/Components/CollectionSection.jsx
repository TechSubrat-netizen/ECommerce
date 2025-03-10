import React from 'react';

const CollectionSection = () => {
  const collections = [
    {
      title: "Summer Collection",
      description: "Light fabrics for hot days",
      image: "/api/placeholder/800/500",
    },
    {
      title: "Essentials",
      description: "Timeless pieces for every wardrobe",
      image: "/api/placeholder/800/500",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="relative overflow-hidden group h-64 md:h-96">
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                  <p className="text-white mb-4">{collection.description}</p>
                  <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition duration-300">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;