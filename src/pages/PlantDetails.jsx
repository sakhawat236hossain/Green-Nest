import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaDollarSign,
  FaStar,
  FaBoxes,
  FaPaperPlane,
} from "react-icons/fa";
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

    toast.success(`Hi ${name}, your email (${email}) is booked successfully!`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });

    setName("");
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <title>Plant Details</title>

      {/*  Plant Info Card */}
      <div className="md:flex gap-8 bg-gradient-to-br from-green-50 via-white to-green-100 shadow-2xl rounded-3xl p-8 border border-green-100 hover:shadow-green-200 transition-transform transform hover:-translate-y-2 duration-300">
        {/*  Plant Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full max-w-md h-[250px] rounded-2xl shadow-lg object-cover border border-green-200"
          />
        </div>

        {/*  Plant Details */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-green-700 mb-3 tracking-wide">
              {plant.plantName}
            </h1>
            <p className="text-gray-700 mt-3 text-lg leading-relaxed">
              {plant.description}
            </p>

            {/*  Info Section */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-gray-700 text-md font-medium">
              <p>
                <FaDollarSign className="inline text-green-600 mr-2" />
                <span className="text-gray-500">Price:</span>{" "}
                <span className="text-green-700 font-bold text-xl">
                  ${plant.price}
                </span>
              </p>

              <p>
                <FaStar className="inline text-yellow-500 mr-2" />
                <span className="text-yellow-500 font-semibold">
                  {plant.rating}
                </span>
              </p>

              <p>
                <FaBoxes className="inline text-green-600 mr-2" />
                Stock:{" "}
                <span className="text-green-600">{plant.availableStock}</span>
              </p>

              <p>🌱 Care Level: {plant.careLevel}</p>
              <p>🪴 Category: {plant.category}</p>
              <p>👨‍🌾 Provider: {plant.providerName}</p>
            </div>
          </div>
        </div>
      </div>

      {/*  Book Consultation Form */}
      <div className="mt-16 bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl max-w-md mx-auto border border-green-100 transition-transform transform hover:-translate-y-2 duration-300">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8 flex justify-center items-center gap-2">
          <MdOutlineEventAvailable className="text-green-600 text-4xl" />
          Book a Free Consultation
        </h2>

        <form onSubmit={handleForm} className="space-y-5">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            className="input input-bordered w-full rounded-xl border-green-200 focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="email"
            name="email"
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
