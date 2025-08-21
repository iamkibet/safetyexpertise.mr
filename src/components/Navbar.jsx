import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone, FaChevronDown, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { contactInfo } from "../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Our Services" },
    { id: "why-us", label: "Why Us" },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between py-2">
            {/* Left - Logo */}
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center"
            >
              <img
                src="/images/logo.png"
                alt="Safety Expertise Logo"
                className="h-10 sm:h-12 lg:h-14"
              />
            </button>

            {/* Right - Phone Number */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <FaPhone className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Call Us</div>
                <div className="text-sm font-bold text-gray-900">{contactInfo.phone}</div>
              </div>
            </div>

            {/* Mobile Contact */}
            <div className="lg:hidden">
              <FaPhone className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolling ? 'shadow-lg' : ''}`}>
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex items-center justify-between">
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-1 text-white hover:text-gray-200 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <FaChevronDown className="w-3 h-3" />}
                  </button>
                ))}
              </nav>

          
              <div className="hidden lg:flex items-center space-x-4 py-4 bg-gray-800 hover:bg-gray-900">
               
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center space-x-2  text-white px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-300"
                >
                  <span>CONTACT US</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>

              {/* GET A FREE QUOTE - Side Tab */}
              <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-8 font-bold text-sm tracking-wider transition-all duration-300 shadow-lg"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  GET A FREE QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={closeMenu}></div>
          
          <div className="relative bg-white w-80 h-full shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <img src="/images/logo.png" alt="Logo" className="h-8" />
                <button onClick={closeMenu} className="p-2 text-gray-500">
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-3 text-gray-900 font-medium border-b border-gray-100 last:border-0"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 font-semibold transition-colors"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
