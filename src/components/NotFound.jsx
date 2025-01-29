import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-col">
      {/* Header with logo */}
      <div className="flex justify-start items-center px-6 py-4">
        <Link to="/">
          <img src="/EagleDocs Logo.png" alt="EagleDocs Logo" className="w-28" />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center">
        {/* Galaxy Image */}
        <div className="flex items-center">
          <img
            src="/Galaxy.webp"
            alt="Galaxy Character"
            className="w-80"
          />
        </div>

        {/* 404 Text */}
        <div className="ml-8 text-left">
          <h1 className="text-[8rem] font-extrabold text-black leading-none">404</h1>
          <p className="text-2xl text-black mb-6">
            The page you have entered does not exist.
          </p>
          <Link
            to="/"
            className="text-xl text-blue-700 hover:underline"
          >
            Go To EagleDocs Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
