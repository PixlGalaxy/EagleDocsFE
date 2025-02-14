// NotFound.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./layout/Navbar";

function NotFound() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-col">
      
      {/* Navigation Bar */}
      <Navbar />

      <div className="pt-20 flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/Galaxy.webp"
            alt="Galaxy Character"
            className="w-72 md:w-[32rem] transition-all duration-500"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[6rem] md:text-[10rem] font-extrabold text-black leading-none mb-4 race-font">
            404
          </h1>
          <p className="text-2xl md:text-4xl text-black mb-6 race-font">
            The page you are looking for does not exist
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
      <footer className="w-full py-2 text-right pr-4 text-black-700 text-sm">
        ArtWork By PulexArt 
      </footer>
    </div>
  );
}

export default NotFound;
