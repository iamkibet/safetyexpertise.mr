import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSearch, FaEnvelope, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showEmergencyPopup, setShowEmergencyPopup] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const location = useLocation();
  const emergencyRef = useRef(null);
  const contactRef = useRef(null);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/compliance", label: "Compliance" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emergencyRef.current &&
        !emergencyRef.current.contains(event.target)
      ) {
        setShowEmergencyPopup(false);
      }
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target)
      ) {
        setShowContactDropdown(false);
      }
    };

    if (showEmergencyPopup || showContactDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmergencyPopup, showContactDropdown]);

  // Prevent body scroll when menu is open
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

  const isActive = (path) => location.pathname === path;
  const isHomePage = location.pathname === "/";

  const handleEmergencyClick = () => {
    setShowEmergencyPopup(!showEmergencyPopup);
  };

  const handleContactMethod = (method) => {
    if (method === "call") {
      window.location.href = "tel:+222-3694-9611";
    } else if (method === "email") {
      window.location.href = "mailto:operations@safetyexpertise.mr";
    }
    setShowEmergencyPopup(false);
    setShowContactDropdown(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed w-full z-50">
        {/* Top Bar - Only visible on desktop when not scrolled */}
        {!isScrolling && (
          <div className="bg-white border-b border-gray-100 hidden lg:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Desktop Layout */}
              <div className="flex items-center justify-between py-3">
                {/* Left Section - Tagline and Social Media */}
                <div className="flex items-center space-x-6">
                  {/* Tagline Banner */}
                  <div className="relative">
                    <div className="bg-red-600 text-white px-4 py-2 text-sm font-semibold relative">
                      Your fire safety is our TOP priority!
                      <div className="absolute -left-2 top-0 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-red-600"></div>
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-3 mt-2">
                      <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                        <FaFacebook className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-sky-500 hover:text-sky-600 transition-colors">
                        <FaTwitter className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-blue-700 hover:text-blue-800 transition-colors">
                        <FaLinkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
                        <FaInstagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Section - Contact Info and Address */}
                <div className="flex items-center space-x-6">
                  {/* Contact Information */}
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <FaPhone className="w-4 h-4 text-red-600" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">Call Us: +222-3694-9611</div>
                      <div className="text-gray-600">operations@safetyexpertise.mr</div>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="w-px h-8 bg-gray-300"></div>

                  {/* Address */}
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-red-600" />
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">ILOT K EXT S4, Tevragh Zeine</div>
                      <div className="text-gray-600">Noaukchott, Mauritania</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dashed border separator */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b-2 border-dashed border-gray-300"></div>
            </div>
          </div>
        )}

        {/* Bottom Bar - Main Navigation with Decorative Fire-Themed Accent */}
<div className={`${isScrolling ? "bg-white shadow-lg" : ""} relative`}>
  <div className="max-w-7xl bg-white rounded-b-xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main navigation row */}
    <div className="relative flex items-center justify-between py-3 lg:py-4">
      
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <div className="relative">
          <img
            src="/images/logo.png"
            alt="Safety Expertise Logo"
            className="h-8 sm:h-10 lg:h-12 drop-shadow-sm"
          />
        
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative font-medium transition-all duration-200 ${
              isActive(item.path)
                ? "text-red-600"
                : "text-gray-800 hover:text-red-600"
            }`}
          >
            {item.label}
            {isActive(item.path) && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 rounded-full"></span>
            )}
          </Link>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        {/* Email */}
        <button
          onClick={() =>
            (window.location.href = "mailto:operations@safetyexpertise.mr")
          }
          className="p-2 text-gray-600 hover:text-red-600 transition-colors"
        >
          <FaEnvelope className="w-5 h-5" />
        </button>

        {/* CTA */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105 shadow-md">
          Ask for Free
        </button>

        {/* Mobile Menu */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>

    {/* Decorative Underline - Fire Wave Effect */}
    <div className="relative h-[8px] overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

      {/* Subtle heat shimmer lines */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-400/50 to-transparent animate-pulse"></div>

      {/* Angled flame-like edges */}
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-red-500 rotate-45 transform origin-bottom-left"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 -rotate-45 transform origin-bottom-right"></div>
    </div>
  </div>
</div>

      </header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm"></div>
          
          {/* Menu Container */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/logo.png"
                  alt="Safety Expertise Logo"
                  className="h-8 drop-shadow-sm"
                />
                <span className="text-white font-semibold text-lg">Menu</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-4 rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-red-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                    onClick={closeMenu}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{item.label}</span>
                      {isActive(item.path) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Section */}
            <div className="p-6 border-t border-gray-700 bg-gray-900/50">
              {/* Quick Contact */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">Call Us</div>
                    <div className="text-gray-400 text-sm">+222-3694-9611</div>
                  </div>
                  <button
                    onClick={() => handleContactMethod("call")}
                    className="px-3 py-1 bg-red-600 text-white text-xs rounded-full hover:bg-red-700 transition-colors"
                  >
                    Call
                  </button>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-gray-400 text-sm">operations@safetyexpertise.mr</div>
                  </div>
                  <button
                    onClick={() => handleContactMethod("email")}
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Email
                  </button>
                </div>
              </div>

              {/* Emergency Button */}
              <button
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                onClick={handleEmergencyClick}
              >
                <div className="flex items-center justify-center space-x-2">
                  <FaPhone className="w-5 h-5" />
                  <span>Emergency Line</span>
                </div>
              </button>

              {/* Emergency Popup */}
              {showEmergencyPopup && (
                <div className="mt-4 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-4 bg-red-50 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Emergency Contact</h3>
                    <p className="text-sm text-gray-600">Choose your preferred method</p>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={() => handleContactMethod("call")}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-center space-x-3 rounded-lg transition-colors"
                    >
                      <FaPhone className="w-4 h-4 text-red-600" />
                      <span className="font-medium text-gray-900">Call Emergency Line</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-white font-semibold mb-4 text-center">Follow Us</h3>
                <div className="flex items-center justify-center space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
                    <FaFacebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors shadow-lg">
                    <FaTwitter className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg">
                    <FaLinkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors shadow-lg">
                    <FaInstagram className="w-5 h-5 text-white" />
                  </a>
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
