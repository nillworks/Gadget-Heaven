'use client';
import { useState } from 'react';

const categories = [
  { id: 1, name: 'All Product', value: 'all' },
  { id: 2, name: 'Smartphones', value: 'Smartphones' },
  { id: 3, name: 'Laptops', value: 'Laptops' },
  { id: 4, name: 'Accessories', value: 'Accessories' },
  { id: 5, name: 'Smart Watches', value: 'Smartwatch' },
  { id: 6, name: 'Gadgets', value: 'Gadgets' },
];

const ExploreCuttingNavBar = ({ handleFilterCategory }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className=" space-y-4 flex flex-col justify-center mx-auto text-left">
      {categories.map(item => (
        <button
          key={item.id}
          onClick={() => {
            setActiveCategory(item.value);
            handleFilterCategory(item.value);
          }}
          className={`font-bold mx-auto ${
            activeCategory === item.value
              ? 'bg-primaryColor text-white'
              : 'text-black bg-gray-100'
          } px-4 py-2 rounded-full max-w-max hover:bg-primaryColor hover:text-white transition duration-300 cursor-pointer`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ExploreCuttingNavBar;
