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
    <div className="min-h-screen bg-gradient-to-l from-black via-black to-gray-800 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Background image - barely visible */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/safety4.png")`,
            }}
          />
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

        {/* Accent color highlights */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#ff3131] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: Math.random() * 0.4 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Content */}
        <div className="flex-grow flex items-center pt-32 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#ff3131]/30 shadow-lg">
                  <span className="h-2 w-2 bg-[#ff3131] rounded-full mr-2"></span>
                  <span className="text-[#ff3131] text-sm font-bold drop-shadow-sm">
                    24/7 EMERGENCY RESPONSE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                  <span className="block">FIRE SAFETY</span>
                  <span className="block bg-gradient-to-r from-[#ff3131] to-[#ff6b6b] bg-clip-text text-transparent drop-shadow-sm">
                    SOLUTIONS
                  </span>
                </h1>

                <p className="text-lg text-white max-w-xl mx-auto lg:mx-0 mb-10 font-medium drop-shadow-md leading-relaxed">
                  Professional fire suppression systems installation,
                  maintenance, and emergency response services across
                  Mauritania.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-[#ff3131] to-[#ff6b6b] text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff3131]/30 shadow-lg"
                  >
                    Contact Us
                  </Link>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition hover:bg-white/30 shadow-lg">
                    Our Services
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Main fire suppression image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl shadow-[#ff3131]/20">
                    <img
                      src="/images/safety1.png"
                      alt="Fire Suppression System"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#ff3131] to-[#ff6b6b] text-white p-4 rounded-xl shadow-xl">
                    <div className="text-2xl font-bold">99.8%</div>
                    <div className="text-sm">Success Rate</div>
                  </div>

                  {/* Certified badge */}
                  <div className="absolute -top-4 -left-4 bg-white text-gray-900 p-3 rounded-xl shadow-xl flex items-center">
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#ff3131]"
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
          <div className="text-white text-sm mb-2 font-medium drop-shadow-sm">
            Scroll to explore
          </div>
          <svg
            className="w-6 h-6 text-white drop-shadow-sm"
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
