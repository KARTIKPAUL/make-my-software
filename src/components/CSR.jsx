import React from "react";
import { Link } from "react-router-dom";
// import csrHero from "../assets/csr-hero.svg";
// import education from "../assets/education.svg";
// import environment from "../assets/environment.svg";
// import community from "../assets/community.svg";

const CSRPage = () => {
  const initiatives = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="#fba419"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
      title: "Digital Literacy Programs",
      description:
        "Providing free coding workshops and tech education to underprivileged youth",
      impact: "5,000+ students trained",
    },

    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="#fba419"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6.75 7h3.5c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5c-.41 0-.75-.34-.75-.75S6.34 7 6.75 7zM18 19H5L19 5v13c0 .55-.45 1-1 1zm-3.5-3v1.25c0 .41.34.75.75.75s.75-.34.75-.75V16h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75h1.25z" />
        </svg>
      ),
      title: "Green Computing Initiative",
      description:
        "Implementing energy-efficient coding practices and sustainable infrastructure",
      impact: "40% reduced carbon footprint",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="#fba419"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: "Community Tech Solutions",
      description:
        "Developing affordable software for NGOs and social enterprises",
      impact: "150+ non-profits supported",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Technology With
              <span className="text-amber-400"> Purpose</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              At MakeMySoftWare, we believe in harnessing technology to create
              positive social change while maintaining sustainable business
              practices.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="w-full h-auto">
              {" "}
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#fba419"
                  d="M250 50c110.5 0 200 89.5 200 200s-89.5 200-200 200S50 360.5 50 250 139.5 50 250 50zm-30 320l-90-90 42-42 48 48 96-96 42 42-138 138z"
                />
              </svg>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Social Responsibility Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="p-8 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300"
              >
                <div className="w-20 h-20 mb-6">{initiative.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                <p className="text-gray-300 mb-4">{initiative.description}</p>
                <div className="text-amber-400 font-semibold">
                  {initiative.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empowering Communities Through Technology
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="text-amber-400 text-2xl">▹</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Rural Digital Centers
                    </h4>
                    <p className="text-gray-300">
                      Established 25 digital literacy centers in remote areas
                      with free internet access and computer training facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-amber-400 text-2xl">▹</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Disability-Inclusive Design
                    </h4>
                    <p className="text-gray-300">
                      Developing assistive technologies and accessible
                      interfaces for differently-abled users
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-amber-400 text-2xl">▹</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Tech for Agriculture
                    </h4>
                    <p className="text-gray-300">
                      Created farmer-friendly apps benefiting 10,000+ rural
                      farmers with market prices and weather updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-6 bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    25k+
                  </div>
                  <div className="text-sm text-gray-300">Volunteer Hours</div>
                </div>
                <div className="p-6 bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    1M+
                  </div>
                  <div className="text-sm text-gray-300">Lives Impacted</div>
                </div>
                <div className="p-6 bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    75%
                  </div>
                  <div className="text-sm text-gray-300">
                    Renewable Energy Use
                  </div>
                </div>
                <div className="p-6 bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-300">Green Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Environmental Promise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl">🌱</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Carbon Neutral Operations
                  </h3>
                  <p className="text-gray-300">
                    Committed to net-zero emissions by 2025 through renewable
                    energy adoption and reforestation programs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl">♻️</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">E-Waste Management</h3>
                  <p className="text-gray-300">
                    Proper recycling and disposal of 100% electronic waste
                    generated through certified partners
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl">💧</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Water Conservation</h3>
                  <p className="text-gray-300">
                    Implemented rainwater harvesting systems across all offices,
                    saving 5 million liters annually
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="aspect-w-16 aspect-h-9">
                {/* Replace with actual environment video/image */}
                <div className="bg-gray-800 w-full h-full rounded-lg flex items-center justify-center">
                  <span className="text-amber-400">
                    Environmental Impact Video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-800 mb-8 text-xl">
            Whether you're a client, partner, or community member - together we
            can create technology that benefits everyone.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
            >
              Partner for Social Good
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Volunteer Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSRPage;
