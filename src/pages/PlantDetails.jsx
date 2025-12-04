import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { FaDollarSign, FaStar, FaBoxes, FaPaperPlane, FaSeedling, FaSun } from "react-icons/fa";


import { MdOutlineEventAvailable } from "react-icons/md";

const PlantDetails = () => {
  const { id } = useParams();
  const plants = useLoaderData();
  const plant = plants.find((p) => p.plantId === parseInt(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!plant) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Plant not found!
          </h2>
          <p className="text-gray-600">
            Sorry, the plant you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  const handleForm = (e) => {
    e.preventDefault();

    toast.success(
      `Hi ${name}, your consultation for ${plant.plantName} is booked successfully!`,
      {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      }
    );

    setName("");
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <title>{plant.plantName} | GreenNest</title>

      {/* Plant Card */}
      <div className="md:flex gap-10 bg-white rounded-3xl shadow-2xl border border-green-200 p-8 hover:shadow-green-300 transition-transform transform hover:-translate-y-2 duration-300">
        {/* Plant Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full max-w-md h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg border border-green-200"
          />
        </div>

        {/* Plant Info */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-green-700 mb-4 tracking-wide">
              {plant.plantName}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {plant.description}
            </p>

            {/* Key Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 text-md font-medium mb-6">
              <p className="flex items-center gap-2">
                <FaDollarSign className="text-green-600" />
                <span>Price:</span>
                <span className="text-green-700 font-bold text-lg">
                  ${plant.price}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span className="text-yellow-500 font-semibold">
                  {plant.rating}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaBoxes className="text-green-600" />
                <span>Stock:</span>
                <span className="text-green-600">{plant.availableStock}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaSeedling className="text-green-600" />
                Care Level: {plant.careLevel}
              </p>
              <p className="flex items-center gap-2">
                <FaSun className="text-yellow-500" />
                Category: {plant.category}
              </p>
              <p className="flex items-center gap-2">
                🌿 Provider: {plant.providerName}
              </p>
              <p className="flex items-center gap-2">
                🌎 Origin: {plant.originCountry || "Unknown"}
              </p>
              <p className="flex items-center gap-2">
                💧 Watering: {plant.wateringFrequency || "Moderate"}
              </p>
              <p className="flex items-center gap-2">
                🪴 Pot Size: {plant.potSize || "Medium"}
              </p>
              <p className="flex items-center gap-2">
                🐾 Pet Safe: {plant.petSafety || "Yes"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-green-100 hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8 flex justify-center items-center gap-2">
          <MdOutlineEventAvailable className="text-green-600 text-4xl" />
          Book a Free Consultation
        </h2>

        <form onSubmit={handleForm} className="space-y-5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            className="input input-bordered w-full rounded-xl border-green-200 focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="input input-bordered w-full rounded-xl border-green-200 focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-md hover:shadow-lg hover:scale-[1.03] transition duration-300"
          >
            <FaPaperPlane />
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
