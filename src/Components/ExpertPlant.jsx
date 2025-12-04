import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ExpertPlant = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <section className="py-14 bg-gradient-to-b from-green-50 to-green-100 rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        🌿 Meet Our Green Experts
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {experts.map((expert, index) => (
          <motion.div
            key={expert.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-green-200 hover:border-green-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.10, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.img
              src={expert.image}
              alt={expert.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-300 shadow-md"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <h3 className="text-lg font-semibold text-green-700 mb-1">
              {expert.name}
            </h3>
            <p className="text-sm text-green-600 font-medium mb-2">
              {expert.specialization}
            </p>
            <p className="text-gray-600 text-sm">{expert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExpertPlant;
