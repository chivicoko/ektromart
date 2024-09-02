'use client';

import React, { useState, useEffect } from 'react';

interface FilterProps {
  onFilter: (category: string, minPrice: number, maxPrice: number) => void;
}

const categories = [
  'Audio and Sound Devices', 'Computers and Accessories', 'Cameras and Photography Equipment', 
  'Smart Home and Automation', 'Wearable Technology', 'Mobile Devices and Accessories', 
  'Home Appliances', 'TVs and Home Entertainment', 'Gaming', 
  'Motor Gadgets and Electronics', 'Health and Personal Care Electronics', 
  'Networking and Connectivity', 'Office Electronics'
];

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  useEffect(() => {
    onFilter(
      category,
      typeof minPrice === 'string' ? (minPrice === '' ? 0 : Number(minPrice)) : minPrice,
      typeof maxPrice === 'string' ? (maxPrice === '' ? Infinity : Number(maxPrice)) : maxPrice
    );
  }, [category, minPrice, maxPrice]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || Number(value) >= 0) {
      setMinPrice(value === '' ? '' : Number(value));
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || Number(value) >= 0) {
      setMaxPrice(value === '' ? '' : Number(value));
    }
  };

  const handleReset = () => {
    setCategory('');
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <section className="mb-4 w-full flex items-center justify-center gap-2 flex-wrap md:mt-10 lg:mt-auto">
      <select value={category} onChange={handleCategoryChange} className="md:w-2/6  bg-transparent text-gray-700 border rounded-lg border-[#aa5600] focus-within:border-[#aa5600] focus-within:ring-1 focus-within:ring-[#aa5600] focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)] p-2 md:p-3 shadow-lg text-base leading-tight focus:outline-0 focus:ring-0">
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="number"
        value={minPrice === '' ? '' : minPrice}
        onChange={handleMinPriceChange}
        placeholder="Min Price"
        min="0"
        className="bg-transparent text-gray-700 w-2/5 md:w-[150px] border rounded-lg border-[#aa5600] focus-within:border-[#aa5600] focus-within:ring-1 focus-within:ring-[#aa5600] focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)] p-2 md:p-3 shadow-lg text-base leading-tight focus:outline-0 focus:ring-0"
      />
      <input
        type="number"
        value={maxPrice === '' ? '' : maxPrice}
        onChange={handleMaxPriceChange}
        placeholder="Max Price"
        min="0"
        className="bg-transparent text-gray-700 w-2/5 md:w-[150px] border rounded-lg border-[#aa5600] focus-within:border-[#aa5600] focus-within:ring-1 focus-within:ring-[#aa5600] focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)] p-2 md:p-3 shadow-lg text-base leading-tight focus:outline-0 focus:ring-0"
      />
      <button onClick={handleReset} className="bg-btn w-full xl:w-auto hover:bg-btn-hover text-white transition-all duration-300 ease-in-out rounded-lg py-2 md:py-3 px-6 focus:outline-none focus:ring-2 focus:ring-[#aa5600]">Reset</button>
    </section>
  );
};

export default Filter;
