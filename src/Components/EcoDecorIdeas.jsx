import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EcoDecorIdeas = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("/EcoDecorIdeas.json") 
      .then((res) => res.json())
      .then((data) => setIdeas(data))
      .catch((err) => console.error("Error loading EcoDecorIdeas:", err));
  }, []);

  return (
    <section className="py-14 bg-gradient-to-b from-green-50 to-green-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        🌿 Eco Decor Ideas
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {ideas.map((idea, index) => (
          <motion.div
            key={idea.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-green-200 hover:border-green-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            {idea.image && (
              <motion.img
                src={idea.image}
                alt={idea.title}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-300 shadow-md"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            )}

            <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-2">
              {idea.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              {idea.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EcoDecorIdeas;
