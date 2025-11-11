import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PlantTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <section className="py-10 bg-green-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        🌱 Plant Care Tips
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            className="p-[3px] rounded-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div className="bg-white rounded-2xl p-6 shadow-lg h-full">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-700 mb-1">{tip.short}</p>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlantTips;
