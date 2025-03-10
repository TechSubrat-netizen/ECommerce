import React from 'react';
import ProductCard from './productCard';

const ProductSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "/api/placeholder/600/800",
      discount: null,
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      price: 59.99,
      image: "/api/placeholder/600/800",
      discount: 15,
    },
    {
      id: 3,
      name: "Oversized Wool Sweater",
      price: 79.99,
      image: "/api/placeholder/600/800",
      discount: null,
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      price: 119.99,
      image: "/api/placeholder/600/800",
      discount: 20,
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Products</h2>
          <a href="#" className="text-black font-medium hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;