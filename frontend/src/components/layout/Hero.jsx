import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between h-screen bg-white text-gray-900 p-5 md:p-10">
      <div className="w-full md:w-1/2 max-w-lg p-5 md:p-10"> 
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Comprehensive Care for Your Family
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Experience healthcare that puts you first, with expert physicians and personalized treatment plans.
        </p>
        <div className="space-x-2 md:space-x-4">
          <Link to="/doctors">
            <button className="bg-blue-900 hover:scale-110 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:bg-blue-800 transition">
              Book an Appointment
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-transparent border border-blue-900 text-blue-900 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:bg-blue-900 hover:scale-105 hover:text-white transition">
              About us?
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/3 max-w-md"> 
        <img
          src="/bg.png"
          alt="Healthcare Services"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
