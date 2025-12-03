import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      
      {/* About Greennest */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">About Greennest</h2>
        <p className="text-gray-700 text-lg">
          At Greennest, we believe every home deserves a touch of nature. Our mission is to make plant care simple, enjoyable, and accessible to everyone.
        </p>
      </section>

      {/* Our Story */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>
        <p className="text-gray-700 text-lg">
          Greennest started with a simple idea: helping people bring life into their living spaces. What began as a small collection of handpicked indoor plants has grown into a trusted platform loved by plant enthusiasts across the country. We focus on delivering healthy, nurtured plants and providing proper guidance so they thrive long after arriving at your doorstep.
        </p>
      </section>

      {/* Our Mission */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          To inspire greener lifestyles through quality plants, simple care tips, and sustainable products. We aim to guide beginners and support plant lovers at every step of their journey.
        </p>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Healthy and carefully curated plants</li>
          <li>Clear plant care guidance for beginners</li>
          <li>Fast and safe delivery right to your door</li>
          <li>Passionate support team available for help</li>
        </ul>
      </section>

      {/* Our Vision */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
        <p className="text-gray-700 text-lg">
          We dream of a world where every space—homes, offices, communities—has a greener, fresher touch. Greennest is committed to promoting sustainable living by providing eco-friendly products, reducing waste, and encouraging everyone to build their own green sanctuary.
        </p>
      </section>

      {/* Contact Us */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Want to know more or need help choosing a plant?</h2>
        <p className="text-gray-700 text-lg">Contact Us</p>
      </section>

    </div>
  );
};

export default AboutUs;
