import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./layout/Navbar";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-col">
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 flex-grow flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/Galaxy.webp"
            alt="Galaxy Character"
            className="w-72 md:w-[32rem] transition-all duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[6rem] md:text-[10rem] font-extrabold text-black leading-none mb-4 race-font">
            OOPS :(
          </h1>
          <p className="text-2xl md:text-4xl text-black mb-6 race-font">
            We're Still Working On This Page. <br/>
            Check Out Our <Link to="https://github.com/PixlGalaxy/EagleDocsFE" className='text-blue-700 hover:underline race-font'>GitHub</Link> For Recent Updates!
          </p>
          <Link
            to="/"
            className="text-xl md:text-2xl text-blue-700 hover:underline race-font"
          >
            Go To EagleDocs Home Page
          </Link>
        </div>
      </div>

      {/* Artwork Credits */}
      <footer className="w-full py-2  text-right pr-4 text-gray-700 text-sm opacity-80 hover:opacity-100 transition-opacity">
        ArtWork By PulexArt 
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
