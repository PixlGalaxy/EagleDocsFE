import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [text, setText] = useState(''); // Text being typed
  const [index, setIndex] = useState(0); // Current character index
  const [phraseIndex, setPhraseIndex] = useState(0); // Current phrase index

  // Array of phrases for animation
  const phrases = [
    'Your Knowledge, Our Mission.',
    'Elevating Education for Every Eagle.',
    'Smart Learning Made Simple.',
    'Empowering Eagles, One Question at a Time.',
    'AI-Powered Learning, Tailored for You.',
    'Turning Challenges into Achievements.',
    'Discover. Learn. Excel.',
    'Your Academic Companion at FGCU.'
  ];
  

  useEffect(() => {
    document.title = 'EagleDocs'; // Page Title
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '/favicon.ico'; // Page Icon
    }
  }, []);

  useEffect(() => {
    if (index < phrases[phraseIndex].length) {
      // Add one character at a time
      const timeout = setTimeout(() => {
        setText((prev) => prev + phrases[phraseIndex][index]);
        setIndex((prev) => prev + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Pause before starting next phrase
      const timeout = setTimeout(() => {
        setText(''); // Clear the text
        setIndex(0); // Reset character index
        setPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to next phrase
      }, 2000); // Pause duration
      return () => clearTimeout(timeout);
    }
  }, [index, phraseIndex]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-blue-50">
      <div className="text-center max-w-xl p-8 bg-white shadow-lg rounded-lg">
        <img src="/EagleDocs Logo.png" alt="EagleDocs Logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to EagleDocs
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {text}
          <span className="blinking-cursor">.</span>
        </p>
        <div className="flex justify-center space-x-4">
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
      </div>
    </div>
  );
}

export default HomePage;
