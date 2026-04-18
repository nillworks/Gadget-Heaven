'use client';
import React, { useState } from 'react';
import ProductCards from './ProductCard';
import WishlistCard from './WishlistCard';

const DashBoard = () => {
  const [active, setActive] = useState('cart');

  return (
    <section>
      <div className="bg-primaryColor text-white flex flex-col items-center justify-center h-80 text-center space-y-4">
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br className="hidden sm:block" /> the
          coolest accessories, we have it all!
        </p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setActive('cart')}
            className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 ${
              active === 'cart'
                ? 'bg-white text-primaryColor shadow-lg scale-105'
                : 'border-2 border-white text-white hover:bg-white/10'
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActive('wishlist')}
            className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 ${
              active === 'wishlist'
                ? 'bg-white text-primaryColor shadow-lg scale-105'
                : 'border-2 border-white text-white hover:bg-white/10'
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {active === 'cart' ? (
          <div>
            <ProductCards />
          </div>
        ) : (
          <div>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">WishList</h2>
              <WishlistCard />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashBoard;
