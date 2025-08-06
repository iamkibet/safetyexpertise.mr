import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

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
    }
    setShowEmergencyPopup(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
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
                    : " rounded-lg p-2"
                }`}
              >
                <img
                  src="/images/logo.png"
                  alt="Safety Expertise Logo"
                  className="h-10 w-auto drop-shadow-sm"
                />
              </div>
            </Link>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Call Icon */}
              <div className="relative" ref={emergencyRef}>
                <button
                  className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                    isScrolling || !isHomePage
                      ? "text-gray-600 hover:text-primary"
                      : "text-white hover:text-primary"
                  }`}
                  onClick={handleEmergencyClick}
                  aria-label="Emergency call"
                >
                  <FaPhone className="w-5 h-5" />
                </button>

                {/* Emergency Popup */}
                {showEmergencyPopup && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <button
                      onClick={() => handleContactMethod("call")}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center text-sm"
                    >
                      <FaPhone className="mr-2 text-red-500" />
                      Call Now
                    </button>
                  </div>
                )}
              </div>

              {/* Menu button */}
              <button
                className="p-2 z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes
                    className={`w-6 h-6 ${
                      isScrolling || !isHomePage
                        ? "text-gray-600"
                        : "text-white"
                    }`}
                  />
                ) : (
                  <FaBars
                    className={`w-6 h-6 ${
                      isScrolling || !isHomePage
                        ? "text-gray-600"
                        : "text-white"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center">
          <div className="text-center">
            <div className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-3xl md:text-4xl font-bold transition-all duration-300 hover:scale-110 ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}

              {/* Emergency Line in Full Screen Menu */}
              <div className="pt-8 border-t border-gray-600">
                <button
                  className="bg-[#ff3131] hover:bg-[#ff3131]/90 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105"
                  onClick={handleEmergencyClick}
                >
                  Emergency Line
                </button>
                {showEmergencyPopup && (
                  <div className="mt-4 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-w-xs mx-auto">
                    <button
                      onClick={() => handleContactMethod("call")}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center justify-center"
                    >
                      <FaPhone className="mr-2 text-red-500" />
                      Call Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
