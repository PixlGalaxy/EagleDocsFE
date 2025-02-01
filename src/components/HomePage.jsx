import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function HomePage() {
  // States
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0); // Contador de clics
  const [isLogoAnimated, setIsLogoAnimated] = useState(false); // Controlar la animación del logo

  const phrases = [
    'Your Knowledge, Our Mission.',
    'Elevating Education For Every Eagle.',
    'Smart Learning Made Simple.',
    'Empowering Eagles, One Question At A Time.',
    'AI-Powered Learning, Specialized For You.',
    'Turning Challenges Into Achievements.',
    'Discover. Learn. Excel.',
    'Your Academic Companion At FGCU.'
  ];

  useEffect(() => {
    document.title = 'EagleDocs';
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, []);

  useEffect(() => {
    if (charIndex < phrases[phraseIndex].length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setPhraseIndex((prevPhraseIndex) => (prevPhraseIndex + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex, phrases]);

  // Función para manejar clics en el logo
  const handleLogoClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount + 1 === 10) {
      // Iniciar animación después de 10 clics
      setIsLogoAnimated(true);

      // Resetear el contador de clics después de la animación
      setTimeout(() => {
        setIsLogoAnimated(false);
        setClickCount(0);
      }, 3000); // Duración de la animación
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50">
      <Helmet>
        <title>EagleDocs - Elevating Education for Every Eagle</title>
        <meta
          name="description"
          content="Welcome to EagleDocs. Elevating Education for Every Eagle. Sign in or Register to access educational resources and chat with Azul AI."
        />
        <meta
          property="og:title"
          content="EagleDocs - Elevating Education for Every Eagle"
        />
        <meta
          property="og:description"
          content="Welcome to EagleDocs. Elevating Education for Every Eagle. Sign in or Register to access educational resources and chat with Azul AI."
        />
      </Helmet>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Mobile Logo */}
            <img
              src="/EagleDocs Logo.png"
              alt="EagleDocs Logo"
              className="w-10 md:hidden"
            />
            
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
            <div className={`md:flex items-center space-x-6 ${isMenuOpen ? 
              'absolute top-full left-0 right-0 bg-white py-4 px-6 shadow-lg text-center' : 
              'hidden'}`}
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

      {/* Main Content */}
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden mx-4">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                Introducing EagleDocs
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {text}
                <span className="blinking-cursor">.</span>
              </p>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
              <img
                src="/EagleDocs Logo.png"
                alt="EagleDocs Logo"
                className={`w-16 md:w-32 mb-6 transition-all duration-300 ${isLogoAnimated ? 'falling-logo' : ''}`}
                onClick={handleLogoClick}
              />
              <div className="flex space-x-4 mb-4">
                <Link
                  to="/login"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors text-sm md:text-base"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition-colors text-sm md:text-base"
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
    </div>
  );
}

export default HomePage;
