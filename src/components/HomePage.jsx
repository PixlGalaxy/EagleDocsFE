// HomePage.jsx
//Not Ready For Deployment PIXL 01/29/2025

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // State for the typing effect
  const [text, setText] = useState('');        
  const [charIndex, setCharIndex] = useState(0);  
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Array of phrases for animation
  const phrases = [
    'Your Knowledge, Our Mission.',
    'Elevating Education for Every Eagle.',
    'Smart Learning Made Simple.',
    'Empowering Eagles, One Question at a Time.',
    'AI-Powered Learning, Specialized for Your Course Data.',
    'Turning Challenges into Achievements.',
    'Discover. Learn. Excel.',
    'Your Academic Companion at FGCU.'
  ];

  // Set page title and favicon on mount
  useEffect(() => {
    document.title = 'EagleDocs';
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, []);

  // Typing effect
  useEffect(() => {
    if (charIndex < phrases[phraseIndex].length) {
      // Type one character at a time
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Pause before starting the next phrase
      const timeout = setTimeout(() => {
        setText('');     
        setCharIndex(0); 
        setPhraseIndex((prevPhraseIndex) => (prevPhraseIndex + 1) % phrases.length);
      }, 2000); // Pause duration
      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex, phrases]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-blue-50">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Use flex-col on small screens, flex-row on medium and up */}
        <div className="flex flex-col md:flex-row">
          
          {/* Left Column: Introducing EagleDocs and animated phrases */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              Introducing EagleDocs
            </h1>
            <p>
              
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {text}
              <span className="blinking-cursor">.</span>
            </p>
          </div>

          {/* Right Column: Logo, Sign In, Register, and "Continue without login" */}
          <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
            <img
              src="/EagleDocs Logo.png"
              alt="EagleDocs Logo"
              className="w-20 md:w-32 mb-6"
            />
            <div className="flex space-x-4 mb-4">
              <Link
                to="/login"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:ring focus:ring-blue-300"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 focus:ring focus:ring-gray-300"
              >
                Register
              </Link>
            </div>
            <Link
              to="/chat"
              className="inline-flex items-center space-x-1 text-sm text-blue-500 hover:text-blue-600"
            >
              <span>Try EagleDocs BETA </span>
              <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
