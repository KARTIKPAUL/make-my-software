// Contact.jsx
import React from "react";
import background from "../assets/contact-bg.svg";
import agencyLogo from "../assets/logo.svg";
import emailIcon from "../assets/emailIcon.png";
import phoneIcon from "../assets/callIcon.png";
import addressIcon from "../assets/addressIcon.png";
import facebookIcon from "../assets/fb-icon.png";
import youtubeIcon from "../assets/youtube.png";
import linkedinIcon from "../assets/linkedin.png";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div
        className="flex-1 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="bg-black bg-opacity-75 h-full flex items-center justify-center px-10 md:px-20">
          <div className="text-center md:text-left text-white p-10">
            <h1 className="text-5xl font-extrabold">Get</h1>
            <h2 className="text-5xl font-extrabold text-[#fba419]">in Touch</h2>
            <p className="mt-4">
              We are here to help you build software solutions that drive
              success. Reach out to us for any inquiries.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white p-8 flex flex-col justify-center md:ml-10 md:pl-10 md:pr-20">
        <div className="flex flex-row gap-2">
          <img
            src={agencyLogo}
            alt="MakeMySoftware Logo"
            className="h-8 mr-2"
          />
          <h2 className="text-3xl font-extrabold mb-4">MakeMySoftware</h2>
        </div>
        <p className="mb-8 text-black text-justify">
          At MakeMySoftware, we craft cutting-edge digital solutions tailored to
          your business needs. Let's innovate together.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <img src={emailIcon} alt="Email" className="w-10 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-bold">EMAIL</h3>
              <p>kartikpaul330@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={phoneIcon} alt="Phone" className="w-10 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-bold">CALL US</h3>
              <p>+91 7363928225</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={addressIcon} alt="Address" className="w-10 h-10 mr-4" />
            <div>
              <h3 className="text-xl font-bold">ADDRESS</h3>
              <p>Rangamati, Ramthenga, Coochbehar, India -735211</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 justify-center md:justify-start mt-8">
          <Link
            to="https://facebook.com"
            title="Facebook"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <FaFacebookF className="w-6 h-6" />
          </Link>
          <Link
            to="https://instagram.com"
            title="LinkedIn"
            className="text-gray-600 hover:text-orange-700 transition duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link
            to="https://linkedin.com"
            title="LinkedIn"
            className="text-gray-600 hover:text-blue-700 transition duration-300"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
