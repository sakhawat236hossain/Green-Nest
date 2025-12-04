import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import plant1 from "../assets/plant1.jpg";
import plant2 from "../assets/plant2.jpg";
import plant3 from "../assets/plant3.jpg";
import plant4 from "../assets/plant4.jpg";
import plant5 from "../assets/plant5.jpg";
import plant6 from "../assets/plant6.jpg";

const slides = [
  {
    image: plant1,
    title: "Bring Nature Home",
    subtitle: "Fill your home with fresh greenery and calm energy",
  },
  {
    image: plant2,
    title: "Fresh Indoor Plants",
    subtitle: "Perfect plants for a healthier lifestyle",
  },
  {
    image: plant3,
    title: "Grow Happiness",
    subtitle: "Create peaceful spaces with GreenNest plants",
  },
  {
    image: plant4,
    title: "Plant Care Made Easy",
    subtitle: "Simple care, beautiful results",
  },
  {
    image: plant5,
    title: "Transform Your Space",
    subtitle: "Add life and elegance to your home",
  },
  {
    image: plant6,
    title: "Eco Living",
    subtitle: "Breathe better with natural air-purifying plants",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");

  // Update current index when slide changes
  const handleSlideChange = (swiper) => {
    setCurrent(swiper.realIndex);
  };

  // Typewriter effect
  useEffect(() => {
    const title = slides[current].title;
    const subtitle = slides[current].subtitle;

    setTypedTitle("");
    setTypedSubtitle("");

    let t = 0;
    let s = 0;

    const titleInterval = setInterval(() => {
      setTypedTitle((prev) => prev + title[t]);
      t++;
      if (t === title.length) clearInterval(titleInterval);
    }, 90);

    const subtitleTimeout = setTimeout(() => {
      const subInterval = setInterval(() => {
        setTypedSubtitle((prev) => prev + subtitle[s]);
        s++;
        if (s === subtitle.length) clearInterval(subInterval);
      }, 40);
    }, title.length * 90 + 300);

    return () => {
      clearInterval(titleInterval);
      clearTimeout(subtitleTimeout);
    };
  }, [current]);

  return (
    <div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        className="rounded-xl shadow-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
             className="relative w-full h-[240px] md:h-[380px] lg:h-[480px] flex items-center justify-center bg-cover bg-center"

              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Text */}
              {index === current && (
                <div className="relative text-center text-white px-6">

                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 tracking-wide">
                    {typedTitle}
                  </h2>

                  <p className="text-sm md:text-lg lg:text-xl text-green-200 mb-5">
                    {typedSubtitle}
                  </p>

                  {/* Button */}
                  <motion.a
                    href="/plants"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 12px rgba(0,255,0,0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2 md:px-7 md:py-3
                      bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full
                      transition shadow-md"
                  >
                    Explore Plants <FaArrowRight />
                  </motion.a>

                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hide arrows on mobile */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #22c55e;
          display: none;
        }
        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
