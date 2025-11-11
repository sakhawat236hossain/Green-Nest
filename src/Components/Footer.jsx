import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-emerald-900 via-green-800 to-lime-600  text-white py-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="GreenNest Logo"
              className="w-12 h-12 rounded-full shadow-lg border-2 border-white/20"
            />
            <h2 className="text-2xl font-extrabold tracking-wide text-green-400 drop-shadow-md">
              GreenNest
            </h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed font-medium">
            GreenNest helps you nurture indoor plants, explore care tips,
            and create a greener, healthier lifestyle inside your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4 text-lg drop-shadow-sm">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-green-300 transition-all duration-200">Home</a></li>
            <li><a href="/plants" className="hover:text-green-300 transition-all duration-200">Plants</a></li>
            <li><a href="/about" className="hover:text-green-300 transition-all duration-200">About</a></li>
            <li><a href="/contact" className="hover:text-green-300 transition-all duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4 text-lg drop-shadow-sm">
            Support
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li><a href="/faq" className="hover:text-green-300 transition-all duration-200">FAQ</a></li>
            <li><a href="/contact" className="hover:text-green-300 transition-all duration-200">Contact Us</a></li>
            <li><a href="/privacy-policy" className="hover:text-green-300 transition-all duration-200">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-green-300 transition-all duration-200">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact  Social Icons */}
        <div className="flex flex-col gap-4">
          <h3 className="text-green-400 font-semibold mb-3 text-lg drop-shadow-sm">
            Contact Us
          </h3>
          <p className="text-sm text-gray-300">📧 hmdsakhawat@gmail.com</p>
          <p className="text-sm text-gray-300">📞 +880 1851-121472</p>
          <p className="text-sm text-gray-300">📍 Dhaka, Bangladesh, Dinajpur</p>

          <div className="flex gap-5 text-2xl mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-green-400 transition-transform">
              <FaFacebookF />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-green-400 transition-transform">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-green-400 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-green-400 transition-transform">
              <FaYoutube />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-green-400 transition-transform">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm font-medium">
        © 2025 <span className="font-semibold text-green-400">GreenNest</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
