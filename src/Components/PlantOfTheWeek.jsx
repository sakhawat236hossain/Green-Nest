import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const PlantOfTheWeek = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/week.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 rounded-[50px]">
      <h1 className="text-center font-bold text-3xl text-green-700 mb-8">
        Plant <span className="text-gray-800">Of The Week</span>
      </h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {plants.map((plant) => (
          <SwiperSlide key={plant.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={plant.image}
                alt={plant.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-green-700 font-semibold hover:underline cursor-pointer text-sm">
                  {plant.title}
                </h2>
                <p className="text-gray-400 text-xs mt-1">{plant.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlantOfTheWeek;
