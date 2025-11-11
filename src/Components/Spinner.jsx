import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-green-300 border-t-green-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
