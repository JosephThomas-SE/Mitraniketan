import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ProjectsPage from './components/Projects'; // Import the Projects page
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on every route change */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* New Projects Route */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any unmatched routes to Home */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
