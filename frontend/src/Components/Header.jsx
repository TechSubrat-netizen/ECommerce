import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const categories = [
    "New Arrivals", "Women", "Men", "Accessories", "Sale"
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-center text-sm">
        Free shipping on all orders over $50 | Shop now
      </div>
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-900">MODA</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {categories.map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-700 hover:text-black font-medium"
                >
                  {category}
                </a>
              ))}
            </nav>
            
            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-black">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-black">
                <User size={20} />
              </button>
              <button className="text-gray-700 hover:text-black">
                <Heart size={20} />
              </button>
              <button className="text-gray-700 hover:text-black relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <button className="text-gray-700 hover:text-black font-medium">Sign In</button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-4">
                {categories.map((category, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-gray-700 hover:text-black font-medium py-2"
                  >
                    {category}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;