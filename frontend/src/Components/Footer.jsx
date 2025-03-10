import React from 'react';

const Footer = () => {
  const categories = [
    "New Arrivals", "Women", "Men", "Accessories", "Sale"
  ];

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-black">{category}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Order Tracking</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Sustainability</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@moda.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>1234 Fashion Street</li>
              <li>New York, NY 10001</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-black">FB</a>
              <a href="#" className="text-gray-600 hover:text-black">IG</a>
              <a href="#" className="text-gray-600 hover:text-black">TW</a>
              <a href="#" className="text-gray-600 hover:text-black">YT</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">MODA</div>
            <div className="text-gray-600 text-sm">
              © 2025 MODA. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;