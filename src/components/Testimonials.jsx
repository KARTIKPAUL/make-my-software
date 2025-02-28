import React from "react";
import TestimonialCard from "./TestimonialCard";
import Image1 from "../assets/testimonial1.svg";
import Image2 from "../assets/testimonial2.svg";

const Testimonials = () => {
  const testimonialsData = [
    {
      image: Image1,
      description:
        "MakeMySoftware transformed our vision into reality with seamless solutions and innovative technology. Their expertise helped us scale our business effortlessly.",
      name: "Kartik Paul",
      title: "Founder & CEO",
    },
    {
      image: Image2,
      description:
        "Working with MakeMySoftware has been a game-changer. Their dedication and technical excellence enabled us to launch our product ahead of schedule.",
      name: "Pankaj Barman",
      title: "Co-Founder",
    },
  ];

  return (
    <section
      id="clients"
      className="py-8 md:py-16 flex flex-col justify-center items-center mx-4 md:mx-40"
    >
      <div className="container mx-auto px-4 text-center md:text-left flex flex-col my-4 md:my-10 justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-0 mr-0 md:mr-10">
            Our <span className="text-[#fba419]">Founder Details</span>
          </h2>
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <div className="w-full md:w-auto flex items-center justify-center ">
              <TestimonialCard
                image={testimonialsData[0].image}
                description={testimonialsData[0].description}
                name={testimonialsData[0].name}
                title={testimonialsData[0].title}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
          <TestimonialCard
            image={testimonialsData[1].image}
            description={testimonialsData[1].description}
            name={testimonialsData[1].name}
            title={testimonialsData[1].title}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
