import React from 'react';
import welcomePic from '../assets/welcome-pic.svg';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div id="about" className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="max-w-4xl mx-auto p-8">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                    <div className="md:w-1/2">
                        <h1 className="text-7xl font-bold mb-2">Welcome To</h1>
                        <h2 className="text-4xl text-[#fba419] font-semibold mb-4">MakeMySoftware</h2>
                        <p className="italic text-gray-600 mb-4">
                            <span className='m-0 p-0 font-extrabold text-4xl' >"</span>
                            At our company, we believe that success is built on innovation, expertise, and collaboration. 
                            We provide tailored solutions that help businesses grow, streamline operations, and achieve 
                            their highest potential."
                        </p>
                        <p className="text-gray-700 mb-8 font-bold">
                            Whether you're looking for strategic insights, digital transformation, or creative solutions, 
                            our team is here to guide you every step of the way. Join us on this journey to excellence 
                            and make an impact in your industry.
                        </p>
                        <Link
                        to="/about-us"
                        className="inline-block px-5 py-2 bg-[#fba419] text-white rounded-full hover:bg-[#f88e0a] transition duration-200">
                            Read More
                        </Link>
                    </div>
                    <div className="mt-8 md:mt-0 md:ml-8 relative w-full md:w-1/2 overflow-hidden">
                        <img src={welcomePic} alt="Welcome Professionals" className="w-full h-96 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="p-4">Building a brighter future, one professional at a time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
