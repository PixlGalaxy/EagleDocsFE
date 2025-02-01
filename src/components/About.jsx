// About.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Graph Data
  const data = [
    { name: "AIME 2024", OpenAI: 63.6, AzulV2: 72.6, AzulV1: 68.0 },
    { name: "Codeforces", OpenAI: 58.7, AzulV2: 90.6, AzulV1: 85.3 },
    { name: "GPQA Diamond", OpenAI: 60.0, AzulV2: 62.1, AzulV1: 59.5 },
    { name: "MATH-500", OpenAI: 90.2, AzulV2: 94.3, AzulV1: 91.5 },
    { name: "MMLU", OpenAI: 87.4, AzulV2: 85.2, AzulV1: 82.0 },
    { name: "SWE-bench Verified", OpenAI: 36.8, AzulV2: 42.0, AzulV1: 38.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Helmet>
        <title>About - EagleDocs</title>
        <meta name="description" content="Learn more about EagleDocs and its AI-powered educational system." />
      </Helmet>

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
                <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0">Home</Link>
                <a href="https://onlinestatus.eagledocs.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0">Server Status</a>
                <a href="https://discord.gg/4RuUjT2jNv" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0">Discord</a>
                <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0">About</Link>
                <Link to="/developers" className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0">Developers</Link>
                <a href="https://github.com/PixlGalaxy/EagleDocsFE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors py-2 md:py-0">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 max-w-3xl text-center mb-12">

        {/* Logo */}
        <div className="flex justify-center mb-8">
            <img src="/EagleDocs Logo.png" alt="EagleDocs Logo" className="w-48 md:w-64" />
        </div>
        
        {/* About Text */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About EagleDocs</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          EagleDocs is an AI-powered educational platform designed to assist students by providing accurate and 
          specialized learning resources. Our goal is to enhance education through intelligent assistance, making 
          learning more efficient and engaging.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          The platform integrates cutting-edge AI models to deliver high-quality answers and explanations. 
          Our latest AI versions include <span className="font-bold text-blue-600">Azul AI V1</span>, 
          based on <span className="font-semibold">Llama3.1:8B-Instruct-fp16</span>, and 
          <span className="font-bold text-green-600"> Azul AI V2</span>, based on <span className="font-semibold">DeepSeek-R1:32B</span>.
        </p>
      </div>

      {/* Comparison Graph */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI Model Performance Comparison</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis label={{ value: "Accuracy (%)", angle: -90, position: "insideLeft", fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="OpenAI" fill="gray" name="OpenAI-o1-Mini" />
            <Bar dataKey="AzulV2" fill="blue" name="Azul AI V2: 32B" />
            <Bar dataKey="AzulV1" fill="green" name="Azul AI V1: 8B" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Server Details */}
        <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 mt-8 mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            🚀 Server Specifications
        </h2>
        
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
            EagleDocs is powered by <span className="font-bold text-indigo-600">SkyWolf</span>, a high-performance server designed for AI workloads and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CPU */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
            <i className="icon-cpu text-4xl text-black-700"></i>
            <div>
                <h3 className="text-xl font-semibold text-gray-900">CPU</h3>
                <p className="text-gray-700">Intel Xeon E5-2690 V4</p>
            </div>
            </div>

            {/* RAM */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
            <i className="icon-memory text-4xl text-black-700"></i>
            <div>
                <h3 className="text-xl font-semibold text-gray-900">Memory</h3>
                <p className="text-gray-700">112GB DDR4 ECC</p>
            </div>
            </div>

            {/* GPU - RX 7900 XTX */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow md:col-span-2">
            <i className="icon-cpu-pinning text-4xl text-black-700"></i>
            <div>
                <h3 className="text-xl font-semibold text-gray-900">Graphics</h3>
                <p className="text-gray-700">AMD Radeon RX 7900 XTX (24GB VRAM)</p>
            </div>
            </div>

            {/* HDD - IronWolf 4TB */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
            <i className="icon-disk text-4xl text-black-700"></i>
            <div>
                <h3 className="text-xl font-semibold text-gray-900">Storage (HDD)</h3>
                <p className="text-gray-700">2× Seagate IronWolf 4TB (RAID 1)</p>
            </div>
            </div>

            {/* SSD - Kingston 120GB */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
            <i className="icon-disk text-4xl text-black-700"></i>
            <div>
                <h3 className="text-xl font-semibold text-gray-900">Storage (SSD)</h3>
                <p className="text-gray-700">2× Kingston 120GB (RAID 1)</p>
            </div>
            </div>

            {/* NVMe - Kingston NV2 500GB */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow md:col-span-2">
            <i className="icon-nvme text-4xl text-black-700"></i>
            <div>
                <h3 className="text-xl font-semibold text-gray-900">Storage (NVMe)</h3>
                <p className="text-gray-700">Kingston NV2 500GB</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default About;
