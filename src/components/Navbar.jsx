import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone, FaChevronDown, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { contactInfo } from "../data";
import { motion } from "framer-motion";

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <button 
                onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
                className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
              >
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <FaPhone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Call Us</div>
                  <div className="text-sm font-bold text-gray-900 hover:text-red-600 transition-colors duration-200">{contactInfo.phone}</div>
                </div>
              </button>
            </div>

            {/* Mobile Contact */}
            <div className="lg:hidden">
              <button 
                onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
                className="hover:scale-105 transition-transform duration-200"
              >
                <FaPhone className="w-6 h-6 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolling ? 'shadow-lg' : ''}`}>
        <div className="bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

              {/* Mobile Navigation */}
              <div className="lg:hidden flex items-center justify-between w-full">
                {/* Mobile Menu Button - Left */}
                <button
                  className="w-12 h-12 bg-black/20 flex items-center justify-center hover:bg-black/30 transition-all duration-200 hover:scale-105"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FaBars className="w-6 h-6 text-white" />
                </button>
                
                {/* Contact Us Button - Right */}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white font-semibold text-sm uppercase tracking-wide hover:text-gray-200 transition-all duration-200"
                >
                  CONTACT US
                </button>
              </div>

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
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Simple Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu}></div>
          
          {/* Clean Mobile Menu Container */}
          <div className="absolute top-0 left-0 right-0 bg-white w-full h-full shadow-2xl">
            {/* Close Button - Top Right */}
            <div className="absolute top-6 right-6 z-20">
              <button 
                onClick={closeMenu} 
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaTimes className="w-6 h-6 text-white" />
              </button>
            </div>
            
            {/* Navigation Items */}
            <div className="pt-20 px-6">
              <nav className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group w-full text-left p-4 rounded-xl bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/30 transition-all duration-200 hover:shadow-md relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Simple Icon */}
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        {(() => {
                          switch (item.id) {
                            case "home":
                              return <span className="text-white text-lg">🏠</span>;
                            case "about":
                              return <span className="text-white text-lg">ℹ️</span>;
                            case "services":
                              return <span className="text-white text-lg">🔧</span>;
                            case "why-us":
                              return <span className="text-white text-lg">⭐</span>;
                            default:
                              return <span className="text-white text-lg">📋</span>;
                          }
                        })()}
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        <div className="text-gray-900 font-semibold text-lg group-hover:text-primary transition-colors duration-200">
                          {item.label}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {(() => {
                            switch (item.id) {
                              case "home":
                                return "Back to top";
                              case "about":
                                return "Learn about us";
                              case "services":
                                return "Explore our services";
                              case "why-us":
                                return "Why choose us";
                              default:
                                return "Navigate to section";
                            }
                          })()}
                        </div>
                      </div>
                      
                      {/* Simple Arrow */}
                      <div className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors duration-200">
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </nav>
              
              {/* Simple Contact Section */}
              <div className="mt-8 p-6 bg-primary rounded-xl text-white">
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold mb-2">Ready to get started?</div>
                  <div className="text-primary/80 text-sm">Let's discuss your safety needs</div>
                </div>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-white text-primary py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>CONTACT US</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Simple Footer */}
              <div className="mt-6 text-center">
                <div className="text-gray-400 text-xs">
                  Safety First, Always
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
