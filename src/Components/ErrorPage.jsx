import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const ErrorPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-green-50 px-4">
      {/* Floating plant emoji */}
      <div className="text-9xl mb-6 animate-bounce">🪴</div>
      
      <h1 className="text-7xl md:text-9xl font-extrabold text-green-700 mb-4 tracking-wide">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 text-center">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mb-8 text-center max-w-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-3xl shadow-xl hover:bg-green-700 transform hover:scale-105 transition-transform duration-300 font-semibold"
      >
        <FiArrowLeft size={20} />
        Go Back Home
      </Link>

      {/* Decorative bouncing leaves */}
      <div className="absolute bottom-10 left-10 text-4xl animate-bounce">🍃</div>
      <div className="absolute bottom-16 right-12 text-3xl animate-bounce">🌿</div>
    </div>
  );
};

export default ErrorPage;
