import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/header-bg.svg";
import "./Header.css";
import { motion } from "framer-motion";

const Header = () => {
  const fontLato = {
    fontFamily: "Lato, sans-serif",
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
      }}
      className="relative bg-cover bg-center h-screen flex flex-col"
    >
      {/* Hero Section */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1
              className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#fba419] to-orange-400 bg-clip-text text-transparent"
              style={fontLato}
            >
              Creative Ideas for{" "}
              <span className="inline-block animate-float">Business</span>
            </h1>
            <p
              className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed"
              style={fontLato}
            >
              Transform your digital presence with cutting-edge solutions that
              blend innovation and strategy. We craft exceptional experiences
              that drive growth and captivate audiences.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/about-us"
                className="inline-block bg-gradient-to-r from-[#fba419] to-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                style={fontLato}
              >
                Explore Solutions →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-[#fba419] flex items-center justify-center">
          <div className="w-2 h-2 bg-[#fba419] rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
