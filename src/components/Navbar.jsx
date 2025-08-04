import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showEmergencyPopup, setShowEmergencyPopup] = useState(false);
  const location = useLocation();
  const emergencyRef = useRef(null);

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
    };

    if (showEmergencyPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmergencyPopup]);

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
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolling || !isHomePage
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div
              className={`relative ${
                isScrolling || !isHomePage
                  ? ""
                  : "bg-white backdrop-blur-lg rounded-lg p-2"
              }`}
            >
              <img
                src="/images/logo.png"
                alt="Safety Expertise Logo"
                className="h-10 w-auto drop-shadow-sm"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isScrolling || !isHomePage
                    ? isActive(item.path)
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-primary"
                    : isActive(item.path)
                    ? "text-white border-b-2 border-white drop-shadow-sm"
                    : "text-gray-200 hover:text-white drop-shadow-sm"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Emergency Line Button */}
            <div className="relative" ref={emergencyRef}>
              <button
                className={`px-4 py-2 rounded-lg font-medium transition transform hover:-translate-y-0.5 shadow-lg ${
                  isScrolling || !isHomePage
                    ? "bg-primary hover:bg-blue-700 text-white"
                    : "bg-[#ff3131] hover:bg-[#ff3131]/90 text-white"
                }`}
                onClick={handleEmergencyClick}
              >
                Emergency Line
              </button>

              {/* Emergency Popup */}
              {showEmergencyPopup && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => handleContactMethod("call")}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center"
                  >
                    <FaPhone className="mr-2 text-red-500" />
                    Call Now
                  </button>
                  <button
                    onClick={() => handleContactMethod("email")}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center"
                  >
                    <FaEnvelope className="mr-2 text-red-500" />
                    Send Email
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes
                className={`w-6 h-6 ${
                  isScrolling || !isHomePage ? "text-gray-600" : "text-white"
                }`}
              />
            ) : (
              <FaBars
                className={`w-6 h-6 ${
                  isScrolling || !isHomePage ? "text-gray-600" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium w-full text-center"
                  onClick={handleEmergencyClick}
                >
                  Emergency Line
                </button>
                {showEmergencyPopup && (
                  <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <button
                      onClick={() => handleContactMethod("call")}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center"
                    >
                      <FaPhone className="mr-2 text-red-500" />
                      Call Now
                    </button>
                    <button
                      onClick={() => handleContactMethod("email")}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center"
                    >
                      <FaEnvelope className="mr-2 text-red-500" />
                      Send Email
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
