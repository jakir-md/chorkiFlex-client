import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">NatureQuest</h2>
            <p className="mt-3 text-sm">
              Discover eco-friendly adventures that connect you with nature while promoting sustainability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Adventures</a></li>
              <li><a href="#" className="hover:text-green-400">Blog</a></li>
              <li><a href="#" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">Mountain Treks</a></li>
              <li><a href="#" className="hover:text-green-400">Ocean Dives</a></li>
              <li><a href="#" className="hover:text-green-400">Wildlife Safaris</a></li>
              <li><a href="#" className="hover:text-green-400">Camping Retreats</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Join Our Newsletter</h3>
            <p className="mt-3 text-sm">
              Stay updated with our latest eco-adventure offers and travel tips.
            </p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-green-500 px-4 py-2 text-white rounded-r-md hover:bg-green-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} NatureQuest. All rights reserved.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;