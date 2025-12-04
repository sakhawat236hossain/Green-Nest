import React from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import PlantCart from "../Components/PlantCart";
import PlantTips from "../Components/PlantTips";
import ExpertPlant from "../Components/ExpertPlant";
import EcoDecorIdeas from "../Components/EcoDecorIdeas";
import PlantOfTheWeek from "../Components/PlantOfTheWeek";
import { motion } from "framer-motion";


const Home = () => {
  const plantsData = useLoaderData();

  return (
    <div>
      <title>Home</title>

      {/* Slider Section */}
      <section className="mb-5">
        <Slider />
      </section>

      {/* Top Rated Indoor Plants */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
            🌿 Top Rated Indoor Plants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {plantsData.slice(0, 8).map((data, index) => (
              <motion.div
                key={data.plantId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
              >
                <PlantCart data={data} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Of The Week */}
      <section className="py-16 bg-gradient-to-b from-green-100 via-green-50 to-white relative overflow-hidden rounded-2xl">
        <PlantOfTheWeek />
        {/* Decorative Floating Circles */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-green-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </section>

      {/* Meet Our Green Experts */}
      <section className="py-16 ">
        <ExpertPlant />
      </section>

      {/* Plant Care Tips */}
      <section className="py-16 bg-gradient-to-b from-green-50 via-green-100 to-green-50 rounded-2xl">
        <PlantTips />
      </section>

      {/* Eco Decor Ideas */}
      <section className="py-16">
        <EcoDecorIdeas />
      </section>
    </div>
  );
};

export default Home;
