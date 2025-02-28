import React from "react";
import { Link } from "react-router-dom";
import agencyLogo from "../assets/Logo/MakeMySoftWare3.png";
import "./Header.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaRegEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const fontLato = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 500,
  };

  const navItems = [
    "Home",
    "About Us",
    "Team",
    "Services",
    "Process",
    "Clients",
    "Work",
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-900 border-b border-gray-700 shadow-lg">
        <div className="container mx-auto px-6 py-3 hidden lg:flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <i className="fas fa-phone text-teal-400 text-lg"></i>
              <span className="text-sm font-medium text-gray-300 group-hover:text-teal-400 transition-colors duration-300">
                +91 7363928225
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <FaRegEnvelope className="text-teal-400 text-lg" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-teal-400 transition-colors duration-300">
                kartikpaul330@gmail.com
              </span>
            </motion.div>
          </div>

          <div className="flex items-center space-x-6">
            {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-teal-400 rounded-full p-2 bg-gray-800 hover:bg-gray-700"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-yellow-700 via-yellow-700 to-yellow-600 shadow-md">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex items-center group"
            >
              <img
                src={agencyLogo}
                alt="Agency Logo"
                className="w-24 lg:w-32 transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="relative px-4 py-2 text-white text-xl hover:text-black group transition-colors duration-300"
                    style={fontLato}
                  >
                    <span className="z-10 relative">{item}</span>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors duration-300"
              >
                <FaSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-32 transition-all duration-300 focus:w-48"
                />
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
