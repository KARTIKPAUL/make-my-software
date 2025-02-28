import React from "react";
import { Link } from "react-router-dom";
//import processImage from '../assets/process.svg';
// import step1 from '../assets/step1.svg';
// import step2 from '../assets/step2.svg';
// import step3 from '../assets/step3.svg';
// import step4 from '../assets/step4.svg';

const OurProcess = () => {
  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
            fill="#fba419"
          />
        </svg>
      ),
      title: "Discovery & Consultation",
      description:
        "We start by understanding your business needs, target audience, and vision through detailed consultations.",
      examples: [
        "Gym: Equipment management, class scheduling",
        "Restaurant: Online ordering, menu management",
        "Medical: Appointment system, patient records",
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
            fill="#fba419"
          />
          <path d="M8.57 12.89l1.41 1.42 4.24-4.24-1.41-1.42z" fill="#fff" />
        </svg>
      ),
      title: "Custom Solution Design",
      description:
        "Our experts create tailored software solutions matching your business workflow.",
      examples: [
        "Gym: Member portal with workout tracking",
        "Restaurant: Table reservation system",
        "Medical: E-prescription integration",
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
            fill="#fba419"
          />
        </svg>
      ),
      title: "Development & Testing",
      description: "Agile development process with regular updates.",
      examples: [
        "Multi-device compatibility testing",
        "Payment gateway integration",
        "Security audits & performance checks",
      ],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
            fill="#fba419"
          />
        </svg>
      ),
      title: "Launch & Support",
      description: "Complete deployment and ongoing support.",
      examples: [
        "Staff training sessions",
        "24/7 technical support",
        "Regular feature updates",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Development Process
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming your business vision into powerful digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16">{step.icon}</div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      <span className="text-amber-400">0{index + 1}.</span>{" "}
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-amber-400">▹</span>
                          <span className="text-gray-300">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-20 hidden md:block">
            {/* <img src={processImage} alt="Process" className="w-full h-auto" /> */}
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 250 Q200 50 350 250 T650 250"
                stroke="#fba419"
                fill="none"
                stroke-width="4"
                stroke-dasharray="8"
              />
              <circle cx="100" cy="250" r="15" fill="#fba419" />
              <circle cx="250" cy="100" r="15" fill="#fba419" />
              <circle cx="400" cy="250" r="15" fill="#fba419" />
              <circle cx="250" cy="400" r="15" fill="#fba419" />
            </svg>
            <div className="mt-8 p-6 bg-gray-800 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Industry-Specific Solutions
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="text-amber-400 font-semibold mb-2">
                    Gym Management
                  </h4>
                  <p className="text-sm text-gray-300">
                    Member tracking, class scheduling, payment integration,
                    workout analytics
                  </p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="text-amber-400 font-semibold mb-2">
                    Restaurant System
                  </h4>
                  <p className="text-sm text-gray-300">
                    Online ordering, table reservation, inventory management,
                    staff scheduling
                  </p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="text-amber-400 font-semibold mb-2">
                    Medical Portal
                  </h4>
                  <p className="text-sm text-gray-300">
                    Patient records, appointment system, telemedicine, pharmacy
                    integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
