import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation } from "swiper/modules";

const PlantOfTheWeek = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/week.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 rounded-[50px]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-700">
          PLANT <span className="text-gray-800">OF THE WEEK</span>
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          From Proven Winners® ColorChoice® Flowering Shrubs
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper relative"
      >
        {plants.map((plant) => (
          <SwiperSlide key={plant.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative">
                <img
                  src={plant.image}
                  alt={plant.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-green-800 text-white text-xs font-semibold px-3 py-1 rounded-md">
                  {plant.date}
                </span>
              </div>

              {/* Title */}
              <div className="p-4 text-center">
                <h2 className="text-green-700 font-semibold hover:underline cursor-pointer text-sm">
                  {plant.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom arrow styling with animation */}
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            top: 10px;
            color: #16a34a;
            width: 2.5rem;
            height: 2.5rem;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: #16a34a;
            color: white;
            transform: scale(1.2);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          }
        `}</style>
      </Swiper>
    </div>
  );
};

export default PlantOfTheWeek;
