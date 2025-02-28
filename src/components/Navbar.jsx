import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import agencyLogo from "../assets/Logo/MakeMySoftWare3.png";
import "./Header.css";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaRegEnvelope,
  FaTimes,
  FaPhone,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const socialLinks = [
    { Icon: FaFacebook, color: "#1877F2" , link: "https://facebook.com" }, // Facebook Blue
    { Icon: FaInstagram, color: "#E4405F" , link: "https://instagram.com"}, // Instagram Pink-Red
    { Icon: FaLinkedin, color: "#0A66C2" , link: "https://linkedin.com"}, // LinkedIn Blue
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu")) {
        setIsMenuOpen(false);
      }
    };

    // Close menu on ESC key press
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

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
              {/* <i className="fas fa-phone text-yellow-400 text-lg"></i> */}
              <FaPhone className="text-yellow-400 text-lg" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                +91 7363928225
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <FaRegEnvelope className="text-yellow-400 text-lg" />

              <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                kartikpaul330@gmail.com
              </span>
            </motion.div>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map(({ Icon, color , link }, index) => (
              <motion.a
                key={index}
                href={link}
                className="text-gray-400 rounded-full p-2 bg-gray-800"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transition: "color 0.3s, background-color 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.backgroundColor = "#222";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.backgroundColor = "";
                }}
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

            {/* Desktop Navigation */}
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
            <div className="lg:hidden relative z-60">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                className="mobile-menu absolute right-0 top-0 h-full w-3/4 max-w-sm bg-gradient-to-b from-yellow-700 to-yellow-600 shadow-xl"
              >
                <div className="p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-8">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-white hover:text-black transition-colors"
                    >
                      <FaTimes className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <nav className="flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={`/${item.toLowerCase().replace(" ", "-")}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-2xl text-white hover:text-black transition-colors duration-300 px-4 py-2"
                          style={fontLato}
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}

                    {/* Mobile Search Bar */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: navItems.length * 0.1 }}
                      className="px-4"
                    >
                      <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2">
                        <FaSearch className="text-gray-500" />
                        <input
                          type="text"
                          placeholder="Search..."
                          className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
                        />
                      </div>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
