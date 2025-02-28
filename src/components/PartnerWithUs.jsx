import React from "react";
import { Link } from "react-router-dom";
//import collaboration from "../assets/collaboration.svg";
//import shield from "../assets/shield.svg";
//import growth from "../assets/growth.svg";

const PartnerWithUs = () => {
  const industries = [
    {
      name: "Fitness & Gym",
      features: [
        "Member Management",
        "Class Scheduling",
        "Progress Tracking",
        "Payment Integration",
      ],
      icon: "🏋️♂️",
    },
    {
      name: "Food & Restaurant",
      features: [
        "Online Ordering",
        "Table Reservation",
        "Inventory Management",
        "Delivery Tracking",
      ],
      icon: "🍴",
    },
    {
      name: "Healthcare",
      features: [
        "Appointment System",
        "Patient Records",
        "Telemedicine",
        "Pharmacy Integration",
      ],
      icon: "⚕️",
    },
    {
      name: "Retail",
      features: [
        "E-commerce Platform",
        "POS Integration",
        "Stock Management",
        "Customer Analytics",
      ],
      icon: "🛍️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business <br />
            <span className="text-amber-400">With Digital Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hands with India's leading software solution provider to create
            exceptional digital experiences that drive growth and customer
            engagement.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-amber-400 text-gray-900 text-lg font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-amber-400">MakeMySoftWare</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-xl">
              <div className="w-12 h-12 mb-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fba419"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Enterprise-Grade Security
              </h3>
              <p className="text-gray-300">
                GDPR-compliant solutions with SSL encryption and regular
                security audits
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-xl">
              <div className="w-12 h-12 mb-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fba419"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Collaboration</h3>
              <p className="text-gray-300">
                Agile development process with weekly updates and dedicated
                project management
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-xl">
              <div className="w-12 h-12 mb-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fba419"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Growth-Focused Solutions
              </h3>
              <p className="text-gray-300">
                Data-driven insights and marketing integration for measurable
                business impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-amber-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Collaborative Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Discovery", "Strategy", "Development", "Launch"].map(
              (step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step} Phase</h3>
                  <p className="text-gray-300">
                    {
                      {
                        0: "Deep dive into your business needs and goals",
                        1: "Custom solution design and planning",
                        2: "Agile development with continuous feedback",
                        3: "Deployment and growth monitoring",
                      }[index]
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Digitalize Your Business?
          </h2>
          <p className="text-gray-800 mb-8 text-xl">
            Let's build something extraordinary together. Start your digital
            transformation journey today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
            >
              Get Free Proposal
            </Link>
            <Link
              to="/work"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;
