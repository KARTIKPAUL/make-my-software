import React from "react";
import CreativeWork from "./CreativeWork";
import backgroundImage from "../assets/background.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import { Link } from "react-router-dom";

const About = () => {
  const creativeWorks = [
    {
      icon: icon1,
      title: "Brand Strategy",
      description:
        "Crafting powerful brand identities that resonate with target audiences and create lasting impact.",
    },
    {
      icon: icon2,
      title: "Digital Marketing",
      description:
        "Data-driven strategies that boost visibility, engagement, and conversions across digital channels.",
    },
    {
      icon: icon3,
      title: "Web Development",
      description:
        "Responsive, high-performance websites optimized for user experience and search engines.",
    },
    {
      icon: icon4,
      title: "Creative Design",
      description:
        "Captivating visual solutions that communicate brand values and drive user action.",
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-sm font-semibold text-amber-400">
                Innovation Leaders
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transforming Visions Into
              <span className="text-amber-400"> Digital Success</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              For over a decade, we've been helping businesses navigate the
              digital landscape with award-winning solutions. Our holistic
              approach combines strategic thinking with technical excellence to
              deliver measurable results.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-amber-400">12+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-amber-400">850+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-amber-400">97%</div>
                <div className="text-sm text-gray-300">Client Retention</div>
              </div>
              <Link
              to="/our-process"
              className="mt-2 px-8 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Process
            </Link>
            </div>

           
          </div>

          

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creativeWorks.map((work, index) => (
              <CreativeWork
                key={index}
                icon={work.icon}
                title={work.title}
                description={work.description}
                className="hover:bg-white/5 transition-all duration-300 group cursor-pointer p-6 rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
