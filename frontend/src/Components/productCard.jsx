import React, { useContext } from 'react';
import { Heart } from 'lucide-react';
import { CartContext } from '../Context/cartContext';

const ProductCard = () => {
  let product={
    name:"iphone",
    price:400,
    quantity:1,
    discount:40,
    img:"#"
  }
 
   const {item,setItem}=useContext(CartContext)
   function  addCart(){
    let cart={
      name:product.name,
      price:product.price,
      quqntity:product.quantity,
      img:product.img
    }
    setItem(...item,cart)

   }
 
  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {product.discount}% OFF
          </span>
        )}
        <button className="absolute top-3 right-3 bg-white text-gray-700 rounded-full p-2 shadow-md opacity-80 hover:opacity-100 transition">
          <Heart size={18} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
        <div className="flex items-center mt-2">
          {product.discount ? (
            <>
              <span className="text-red-600 font-bold text-lg">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
              <span className="text-gray-500 line-through ml-2">${product.price}</span>
            </>
          ) : (
            <span className="text-gray-900 font-bold text-lg">${product.price}</span>
          )}
        </div>
        <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-700 transition" onClick={addCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;