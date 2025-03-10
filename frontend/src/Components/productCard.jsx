import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      <div className="relative mb-4 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition duration-500"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1">
            {product.discount}% OFF
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 translate-y-full group-hover:translate-y-0">
          <button className="w-full bg-white text-black py-2 font-medium hover:bg-gray-100 transition duration-300">
            Add to Cart
          </button>
        </div>
        <button className="absolute top-2 right-2 text-gray-700 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <Heart size={16} />
        </button>
      </div>
      <h3 className="text-gray-900 font-medium mb-1">{product.name}</h3>
      <div className="flex items-center">
        {product.discount ? (
          <>
            <span className="text-red-600 font-semibold">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
            <span className="text-gray-500 line-through ml-2">${product.price}</span>
          </>
        ) : (
          <span className="text-gray-900 font-semibold">${product.price}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;