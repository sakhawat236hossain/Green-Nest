import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./slider.css"; 
import bgImg from "../assets/slide.jpg";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const slides = [
    { slogan: "Bring Nature Home – Let your space breathe life with indoor plants that make every corner a fresh and calming sanctuary." },
    { slogan: "Fresh Indoor Plants for Your Home – Discover our top-rated plants that are perfect companions for your living space and wellness." },
    { slogan: "Grow Happiness with GreenNest – Nurture joy, peace, and a green environment inside your home effortlessly." },
    { slogan: "Indoor Plants Made Easy – Simplify plant care and enjoy a greener lifestyle with tips and top-quality plants." },
    { slogan: "Transform Your Living Space – Add a touch of nature and elegance to your home with our curated indoor plants." },
    { slogan: "Eco-Friendly & Healthy – Create a refreshing atmosphere and improve air quality with beautiful indoor greenery." },
  ];

  return (
    <div 
      className="w-full relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-30"></div>

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
            <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] flex justify-center items-center">
              <p className="text-white text-base md:text-lg lg:text-2xl font-semibold text-center px-6 md:px-12 lg:px-20 leading-relaxed">
                {slide.slogan}
              </p>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      {/* Hide arrows on mobile/tablet */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
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
