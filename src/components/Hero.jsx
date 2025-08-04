import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".section-padding");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Fire particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTYwIDBIMFY2MEg2MFYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Content */}
        <div className="flex-grow flex items-center pt-32 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-red-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-red-500/30">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-ping"></span>
                  <span className="text-red-200 text-sm font-bold">
                    24/7 EMERGENCY RESPONSE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  <span className="block">FIRE SAFETY</span>
                  <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    SOLUTIONS
                  </span>
                </h1>

                <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10">
                  Professional fire suppression systems installation,
                  maintenance, and emergency response services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
                  >
                    Contact Us
                  </Link>
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition hover:bg-white/20">
                    Our Services
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Main fire suppression image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-red-500/10">
                    <img
                      src="/images/safety.png"
                      alt="Fire Suppression System"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-600 to-orange-500 text-white p-4 rounded-xl shadow-xl">
                    <div className="text-2xl font-bold">99.8%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>

                  {/* Certified badge */}
                  <div className="absolute -top-4 -left-4 bg-white text-gray-900 p-3 rounded-xl shadow-xl flex items-center">
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">NFPA</div>
                      <div className="text-xs">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center cursor-pointer transition-transform hover:scale-110"
        >
          <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
