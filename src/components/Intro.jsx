import React from "react";
import { FaMagic } from "react-icons/fa";

function Intro() {
  return (
    <div className="relative min-h-[70vh] bg-[#fbfbfb] text-gray-800 font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 bg-white/70 backdrop-blur-md shadow-lg z-50 border-b border-gray-200">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-blue-700 tracking-tight">
          <FaMagic className="text-blue-700" />
          <span>Ai Presentation</span>
        </div>

        {/* Center Title - Hidden on very small screens */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 text-sm sm:text-base md:text-lg font-medium text-gray-700">
          AI Presentation
        </div>

        {/* Right: Button */}
        <a
          href="#PPT"
          className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 pt-28 sm:pt-36 md:pt-40">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
          <span className="block hover:rotate-[-1deg] hover:scale-[1.03] transition-transform duration-300">
            Transform Ideas into Slides
          </span>
          <span className="block hover:rotate-[1deg] hover:scale-[1.03] transition-transform duration-300">
            with AI in Seconds
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl sm:max-w-2xl">
          Save <span className="text-blue-700 font-bold">95%</span> of your time and effort.
          Instantly generate stunning PPTs using AI — no design skills needed.
        </p>

        <a
          href="#PPT"
          className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Try It Now
        </a>
      </div>

      {/* Soft gradient fade bottom */}
      <div className="absolute bottom-0 w-full h-32 sm:h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
    </div>
  );
}

export default Intro;
