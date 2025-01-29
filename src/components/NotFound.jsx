import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-col">
      {/* Header with logo */}
      <div className="flex justify-start items-center px-6 py-4">
        <Link to="/">
          <img src="/EagleDocs Logo.png" alt="EagleDocs Logo" className="w-28" />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        
        {/* Galaxy Image on top (mobile) / left side (desktop) */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/Galaxy.webp"
            alt="Galaxy Character"
            className="w-60 md:w-80"
          />
        </div>

        {/* 404 Text on bottom (mobile) / right side (desktop) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[5rem] md:text-[8rem] font-extrabold text-black leading-none mb-4">
            404
          </h1>
          <p className="text-xl md:text-2xl text-black mb-6">
            The page you have entered does not exist.
          </p>
          <Link
            to="/"
            className="text-lg md:text-xl text-blue-700 hover:underline"
          >
            Go To EagleDocs Home Page
          </Link>
        </div>

      </div>
    </div>
  );
}

export default NotFound;
