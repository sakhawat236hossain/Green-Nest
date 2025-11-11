import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
        <p className="text-gray-600 mb-6">The page or plant you are looking for does not exist.</p>
        <Link to="/" className="btn btn-green">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
