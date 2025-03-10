import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Join Our Newsletter</h2>
          <p className="mb-6">Sign up for our newsletter and get 10% off your first order</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 text-black focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;