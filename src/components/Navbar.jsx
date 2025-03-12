import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import logo
import '../styles/main.css'; // Add styles for the background

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll
  const navbarRef = useRef(null); // Ref for the navbar element

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Function to handle scroll and apply class for navbar color change
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add scrolled class for background color change
      } else {
        setIsScrolled(false); // Remove scrolled class
      }

      // Close menu when scrolling
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Function to close the menu when clicking or touching outside
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu when clicked outside
      }
    };

    window.addEventListener('scroll', handleScroll); // Handle scroll
    document.addEventListener('mousedown', handleClickOutside); // Close menu on click outside
    document.addEventListener('touchstart', handleClickOutside); // Close menu on touch outside (for mobile)

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]); // `isMenuOpen` is the only dependency needed

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-left">
        <img src={logo} alt="Mitraniketan Logo" className="logo" />
        <Link to="/" className="brand-link">Mitraniketan</Link>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={handleMenuClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleMenuClick}>About Us</Link></li>
          <li><Link to="/projects" onClick={handleMenuClick}>Projects</Link></li>
          <li><Link to="/gallery" onClick={handleMenuClick}>Gallery</Link></li>
          <li><Link to="/contact" onClick={handleMenuClick}>Contact</Link></li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        {/* Hamburger Icon */}
        <span className="menu-icon"></span>
      </button>
    </nav>
  );
};

export default Navbar;
