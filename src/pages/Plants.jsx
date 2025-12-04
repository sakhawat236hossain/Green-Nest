import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import PlantCart from '../Components/PlantCart';

const Plants = () => {
  const allPlantsData = useLoaderData();
  const [plants, setPlants] = useState(allPlantsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortPriceOrder, setSortPriceOrder] = useState('');
  const [sortRatingOrder, setSortRatingOrder] = useState('');

  // Filter plants based on search term
  useEffect(() => {
    const filtered = allPlantsData.filter((plant) =>
      plant.plantName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPlants(filtered);
  }, [searchTerm, allPlantsData]);

  // Price sorting
  const handleSortPrice = (order) => {
    const sorted = [...plants].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setPlants(sorted);
    setSortPriceOrder(order);
    setSortRatingOrder('');
  };

  // Rating sorting
  const handleSortRating = (order) => {
    const sorted = [...plants].sort((a, b) =>
      order === 'asc' ? a.rating - b.rating : b.rating - a.rating
    );
    setPlants(sorted);
    setSortRatingOrder(order);
    setSortPriceOrder('');
  };

  return (
    <div className="px-4 py-6">
      <title>Plants | GreenNest</title>

      {/* 🔹 Title & Description */}
      <div className="text-center mb-10 max-w-[1340px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 animate-bounce">
          🌿 GreenNest Plants
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Discover beautiful indoor plants to refresh your home and soul.  
          Choose from eco-friendly, air-purifying and easy-care plants made for modern life.  
          Bring nature inside with GreenNest.
        </p>
      </div>

      {/* 🔹 Search & Sort Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-green-50 p-4 rounded-xl shadow-sm">

        {/* Search */}
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Sort */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Price */}
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">Price:</span>
            <button
              onClick={() => handleSortPrice('asc')}
              className={`px-3 py-1 rounded-full text-sm transition ${
                sortPriceOrder === 'asc'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-600 border hover:bg-green-100'
              }`}
            >
              Low → High
            </button>
            <button
              onClick={() => handleSortPrice('desc')}
              className={`px-3 py-1 rounded-full text-sm transition ${
                sortPriceOrder === 'desc'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-600 border hover:bg-green-100'
              }`}
            >
              High → Low
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 ml-2">
            <span className="text-sm font-medium">Rating:</span>
            <button
              onClick={() => handleSortRating('asc')}
              className={`px-3 py-1 rounded-full text-sm transition ${
                sortRatingOrder === 'asc'
                  ? 'bg-yellow-400 text-white'
                  : 'bg-white text-yellow-600 border hover:bg-yellow-100'
              }`}
            >
              Low → High
            </button>
            <button
              onClick={() => handleSortRating('desc')}
              className={`px-3 py-1 rounded-full text-sm transition ${
                sortRatingOrder === 'desc'
                  ? 'bg-yellow-400 text-white'
                  : 'bg-white text-yellow-600 border hover:bg-yellow-100'
              }`}
            >
              High → Low
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {plants.map((data) => (
          <PlantCart key={data.plantId} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
