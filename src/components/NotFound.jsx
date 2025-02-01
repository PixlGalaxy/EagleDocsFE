// NotFound.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Mobile Logo */}
            <Link to="/">
                <img
                src="/EagleDocs Logo.png"
                alt="EagleDocs Logo"
                className="w-10 md:hidden"
                />
            </Link>
            
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-500"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Navigation Links */}
            <div
              className={`md:flex items-center space-x-6 ${
                isMenuOpen
                  ? 'absolute top-full left-0 right-0 bg-white py-4 px-6 shadow-lg text-center'
                  : 'hidden'
              }`}
            >
              <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
                >
                  Home
                </Link>
                <a
                  href="https://onlinestatus.eagledocs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
                >
                  Server Status
                </a>
                <a
                  href="https://discord.gg/4RuUjT2jNv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
                >
                  Discord
                </a>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
                >
                  About
                </Link>
                <Link
                  to="/developers"
                  className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
                >
                  Developers
                </Link>
                <a
                  href="https://github.com/PixlGalaxy/EagleDocsFE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
            The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="text-xl md:text-2xl text-blue-700 hover:underline race-font"
          >
            Go To EagleDocs Home Page.
          </Link>
          </div>
      </div>

      {/* ArtWork By PulexArt - Ubicado en la esquina inferior derecha */}
      <div className="fixed bottom-4 right-4 text-sm text-gray-700 opacity-80 hover:opacity-100 transition-opacity">
        <p>ArtWork By PulexArt</p>
      </div>
    </div>
  );
}

export default NotFound;
