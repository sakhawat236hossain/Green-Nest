// src/components/ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Contact GreenNest</h2>
      <p className="text-gray-700 mb-8 text-center">
        Questions, orders, or plant care tips? We'd love to hear from you.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        {/* Email */}
        <div className="p-4 border rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold text-green-600 mb-2">Email</h3>
          <p className="text-gray-700">hello@greennest.com</p>
        </div>

        {/* Phone */}
        <div className="p-4 border rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold text-green-600 mb-2">Phone</h3>
          <p className="text-gray-700">+1 (555) 123-4567</p>
          <p className="text-gray-500 text-sm mt-1">
            Our support is available Monday — Friday, 9am — 6pm. We usually reply within 24 hours.
          </p>
        </div>

        {/* Visit Store */}
        <div className="p-4 border rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold text-green-600 mb-2">Visit Our Store</h3>
          <p className="text-gray-700">42 Plant Lane, Green City</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
