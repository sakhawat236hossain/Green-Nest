import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./slider.css"; 

import plant1 from "../assets/plant1.jpg";
import plant2 from "../assets/plant2.jpg";
import plant3 from "../assets/plant3.jpg";
import plant4 from "../assets/plant4.jpg";
import plant5 from "../assets/plant5.jpg";
import plant6 from "../assets/plant6.jpg";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) progressCircle.current.style.setProperty('--progress', 1 - progress);
    if (progressContent.current) progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const slides = [
    { slogan: "Bring Nature Home – Let your space breathe life with indoor plants.", img: plant1 },
    { slogan: "Fresh Indoor Plants for Your Home – Perfect companions for your living space.", img: plant2 },
    { slogan: "Grow Happiness with GreenNest – Nurture joy, peace, and greenery.", img: plant3 },
    { slogan: "Indoor Plants Made Easy – Enjoy a greener lifestyle with tips and top-quality plants.", img: plant4 },
    { slogan: "Transform Your Living Space – Add a touch of nature and elegance.", img: plant5 },
    { slogan: "Eco-Friendly & Healthy – Improve air quality with beautiful indoor greenery.", img: plant6 },
  ];

  return (
    <div className="w-full relative">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="relative z-10 mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] flex justify-center items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Text with colorful background */}
              <p className="relative text-white text-sm md:text-lg lg:text-2xl font-bold text-center px-4 md:px-8 lg:px-20 py-2 md:py-4 rounded-lg bg-green-600/30 hover:bg-green-600/50 transition-all duration-500">
                {slide.slogan}
              </p>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" stroke="limegreen" strokeWidth="4" fill="transparent"/>
          </svg>
          <span ref={progressContent} className="text-white font-bold ml-2"></span>
        </div>
      </Swiper>

      {/* Hide arrows on mobile/tablet */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: limegreen;
          display: none;
        }
        @media(min-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
