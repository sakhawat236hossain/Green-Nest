import React from "react";
import Marquee from "react-fast-marquee";

const PlantMarquee = () => {
  return (
    <div className="mb-6 mx-4 p-4 bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-green-200 overflow-hidden">
      <Marquee pauseOnHover={true} speed={70} gradient={false}>
        <p className="font-semibold text-green-700 text-base sm:text-lg mx-4">
          🌿 Check out our new plant collection!
        </p>
        <p className="font-semibold text-green-700 text-base sm:text-lg mx-4">
          🪴 Each plant brings natural beauty to your home.
        </p>
        <p className="font-semibold text-green-700 text-base sm:text-lg mx-4">
          🌱 Take care, and they will give you fresh air.
        </p>
        <p className="font-semibold text-green-700 text-base sm:text-lg mx-4">
          ✨ Order now and grow your green space!
        </p>
      </Marquee>
    </div>
  );
};

export default PlantMarquee;
