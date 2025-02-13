import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ChatPage from './components/ChatPage';
import NotFound from './components/NotFound';
import Developers from './components/Developers';
import About from './components/About';
import TermsOfService from './components/TermsOfServicePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/ContactPage';

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <Routes>

        {/* Catch-all for unmatched routes */}
        <Route path="*" element={<NotFound />} />

        {/* Anyone can view homepage */}
        <Route path="/" element={<HomePage />} />

        {/* If authenticated, go to /chat. Otherwise, show login. */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/chat" /> : <LoginPage />}
        />

        {/* If authenticated, go to /chat. Otherwise, show register. */}
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/chat" /> : <RegisterPage />}
        />

        {/* Anyone can visit /chat, whether logged in or not. */}
        <Route path="/chat" element={<ChatPage />} />

        {/* Developers Page */}
        <Route path="/developers" element={<Developers />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* TermsOfService Page */}
        <Route path="/tos" element={<TermsOfService />} />
        
        {/* PrivacyPolicy Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
