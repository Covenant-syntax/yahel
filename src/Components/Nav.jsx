import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { Link as RouterLink } from 'react-router-dom'; // For routing
import logo from "../assets/ymc-logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="py-3 px-5 sticky top-0 z-50 
                 bg-gray-900 md:bg-gray-900 
                 shadow-sm md:shadow-none transition-all duration-300"
    >
      {/* Mobile Layout */}
      <div className="flex items-center justify-between md:hidden">
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex items-center justify-center group"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          ></span>
        </button>

        {/* Logo */}
        <ScrollLink to="movie">
          <img
            src="https://ik.imagekit.io/Movieid/Images/ymc-logo.png?updatedAt=1732929750359"
            alt="Logo"
            className="w-20"
          />
        </ScrollLink>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
          >
            <FaFacebook className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          </a>
          
          <a 
            href="https://www.instagram.com/yahelmovieconcept?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
          >
            <FaInstagram className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          </a>

          <a 
            href="https://youtube.com/@yahelmovieconcept?si=UVduMO2OadkcwCAm" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Youtube"
          >
            <FaYoutube className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-6">
          <ScrollLink to="movie">
            <img src={logo} alt="Logo" className="w-24 mr-4" />
          </ScrollLink>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="https://facebook.com/YourPage" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
          >
            <FaFacebook className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          </a>
          <a 
            href="https://twitter.com/YourProfile" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter"
          >
            <FaTwitter className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          </a>
          <a 
            href="https://instagram.com/YourProfile" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
          >
            <FaInstagram className="text-white w-5 h-5 hover:scale-125 transition-transform" />
          </a>
          <RouterLink to="/stream">
            <button className="bg-white text-blue-900 px-4 py-2 text-sm rounded-md font-bold hover:bg-blue-100 transition">
              Stream Now
            </button>
          </RouterLink>
        </div>
      </div>

      {/* Dropdown Menu Positioned Below Nav */}
      <div
        className={`absolute left-0 right-0 bg-gray-900 bg-opacity-80 border-t border-gray-700 transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ top: '100%', overflow: 'hidden' }}
      >
        <ul className="text-white text-sm divide-y divide-gray-600">
          <li className="py-3 pl-6 hover:bg-gray-700 hover:text-blue-300 transition">
            <ScrollLink to="movie" smooth duration={500} offset={-70} className="block">
              Movie
            </ScrollLink>
          </li>
          <li className="py-3 pl-6 hover:bg-gray-700 hover:text-blue-300 transition">
            <ScrollLink to="about" smooth duration={500} offset={-70} className="block">
              Synopsis
            </ScrollLink>
          </li>
          <li className="py-3 pl-6 hover:bg-gray-700 hover:text-blue-300 transition">
            <ScrollLink to="gallery" smooth duration={500} offset={-70} className="block">
              Gallery
            </ScrollLink>
          </li>
          <li className="py-3 pl-6 hover:bg-gray-700 hover:text-blue-300 transition">
            <RouterLink to="stream" smooth duration={500} offset={-70} className="block">
              Stream Movie
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
