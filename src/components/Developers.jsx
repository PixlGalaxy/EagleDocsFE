// Developers.jsx

// DO NOT MODIFY THIS SECTION IF YOU ARE SUBMITTING A PULL REQUEST. CONTRIBUTORS WILL BE AUTOMATICALLY ADDED FROM GITHUB.

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Developers() {
  const [userData, setUserData] = useState(null);
  const [contributors, setContributors] = useState([]);

  // Founder Profile
  const founder = {
    username: 'PixlGalaxy',
    name: 'Founder',
    html_url: 'https://github.com/PixlGalaxy',
    color: 'gold',
  };

  // GitHub Data 
  const repoOwner = 'PixlGalaxy'; 
  const repoName = 'EagleDocsFE';

  // Fetch data from GitHub API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${founder.username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    // Fetch contributors data from GitHub repository
    const fetchContributors = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`);
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error('Error fetching contributor data:', error);
      }
    };

    fetchUserData();
    fetchContributors();
  }, []);

  const contributorRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5,
    });

    contributorRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [contributors]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50">
      <Helmet>
        <title>Developers - EagleDocs</title>
        <meta
          name="description"
          content="Meet the developers behind EagleDocs. Learn more about the team and their contributions."
        />
      </Helmet>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="md:flex items-center space-x-6">
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
      </nav>

      {/* Main Content */}
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden mx-4">
          <div className="flex flex-col md:flex-row">
            {/* Left Column (Founder) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                Meet the Developers
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Learn more about the team behind EagleDocs.
              </p>

              {/* Founder */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src={userData ? userData.avatar_url : founder.avatar_url}
                  alt={founder.username}
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h2 className="text-2xl font-bold text-yellow-500">
                  {founder.name} {/* Founder in golden color */}
                </h2>
                <p className="text-gray-600 text-lg">{userData ? userData.bio : 'Founder of EagleDocs'}</p>
                <a
                  href={userData ? userData.html_url : founder.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-500 hover:text-blue-600"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>

            {/* Right Column (Contributors) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contributors</h3>

              {/* Dynamic Contributors */}
              <div className="max-h-96 overflow-y-auto space-y-4 custom-scrollbar">
                {contributors.length === 0 ? (
                  <p className="text-gray-600">Loading contributors...</p>
                ) : (
                  contributors.map((contributor, index) => (
                    <div
                      key={contributor.login}
                      ref={(el) => (contributorRefs.current[index] = el)}
                      className="flex items-center space-x-4 contributor mb-4 opacity-0 transition-opacity duration-300"
                    >
                      <img
                        src={contributor.avatar_url}
                        alt={contributor.login}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="text-xl font-semibold">{contributor.name || contributor.login}</h4>
                        <a
                          href={contributor.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600"
                        >
                          GitHub Profile
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developers;
