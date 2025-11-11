import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const PlantCart = ({ data }) => {
  const { image, plantName, price, rating, plantId } = data;

  //  Rating calculation
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="p-[3px] rounded-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 transition-transform hover:scale-105 shadow-lg">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden p-6 flex flex-col items-center text-center border border-green-200 hover:border-green-400 transition-all duration-300">
        
        {/* Plant Image */}
        <img
          src={image}
          alt={plantName}
          className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-green-300 shadow-md"
        />

        {/* Plant Name & Price */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-green-700">
          {plantName}
        </h2>
        <p className="text-green-800 font-semibold mb-2">${price}</p>

        {/*  Rating  */}
        <div className="flex items-center mb-4 gap-1">
          {Array(fullStars).fill(0).map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
          {halfStar && <span className="text-yellow-400 text-lg">☆</span>}
          {Array(emptyStars).fill(0).map((_, i) => (
            <span key={i} className="text-gray-300 text-lg">★</span>
          ))}
          <span className="ml-2 text-sm text-gray-600 font-medium">
            {rating.toFixed(1)}/5
          </span>
        </div>

        {/*  View Details Button */}
       <Link
      to={`/plantDetails/${plantId}`}
      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
    >
      View Details
      <FiArrowRight className="text-lg" />
    </Link>
      </div>
    </div>
  );
};

export default PlantCart;
