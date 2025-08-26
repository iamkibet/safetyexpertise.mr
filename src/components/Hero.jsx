import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

// Hero slide data with focused services
const HERO_SLIDES = [
  {
    id: 1,
    title: "Mobile Equipment Maintenance",
    subtitle: "& Fire Suppression Systems",
    image: "/images/17.png"
  },
  {
    id: 2,
    title: "Maintenance Engineering",
    subtitle: "Services",
    image: "/images/hero/3.png"
  },
  {
    id: 3,
    title: "Manpower Expertise",
    subtitle: "Professional Services",
    image: "/images/hero/11.png"
  },
  {
    id: 4,
    title: "Industrial Procurement",
    subtitle: "& Supply Services",
    image: "/images/hero/7.jpg"
  },
  {
    id: 5,
    title: "Comprehensive Transport",
    subtitle: "& Mobility Services",
    image: "/images/hero/8.jpg"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsPaused(!isPaused);
    setIsAutoPlaying(!isPaused);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isPaused]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        toggleAutoPlay();
      }
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [isPaused]);

  const currentSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative overflow-hidden h-[70vh]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background with Sliding Images - Right Half Only */}
      <div className="absolute inset-0">
        {/* Background Images Layer - Right Half */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`background-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute right-0 top-0 w-3/4 h-full bg-cover bg-center bg-no-repeat opacity-100"
            style={{
              backgroundImage: `url(${currentSlideData.image})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Diagonal Design Overlay with Smooth Blending */}
      <div className="absolute inset-0">
        {/* Base gradient background */}


        {/* Diagonal Shape 1 - Light with smooth blend */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white to-white"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
          }}
        ></div>

        {/* Diagonal Shape 2 - Medium with smooth blend */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-300/25 to-gray-400/25"
          style={{
            clipPath: 'polygon(40% 0, 80% 0, 60% 100%, 20% 100%)'
          }}
        ></div>

        {/* Diagonal Shape 3 - Dark with smooth blend */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-red-700/10 to-gray-900/10"
          style={{
            clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 50% 100%)'
          }}
        ></div>


      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex items-center py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="max-w-2xl">

            {/* Content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="w-3/4 md:w-1/2 xl:w-5/6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 tracking-tight"
                  style={{
                    textShadow: '2px 2px 6px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  <span className="block mb-3   font-black">{currentSlideData.title}</span>
                  <span className="block text-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.15), 0 3px 8px rgba(0,0,0,0.1)' }}>
                    {currentSlideData.subtitle}
                  </span>
                </motion.h1>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="pt-6 md:pt-8 lg:pt-10"
              >
                {/* Main CTA Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="relative inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 text-base transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5), 0 5px 10px -5px rgba(59, 130, 246, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 15px 30px -5px rgba(59, 130, 246, 0.6), 0 5px 15px -5px rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.5), 0 5px 10px -5px rgba(59, 130, 246, 0.25)';
                  }}
                >
                  <span className="relative z-10 tracking-wide">GET IN TOUCH</span>
                  <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>

                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-transparent to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </button>
              </motion.div>


            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3 pt-8">
          {HERO_SLIDES.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`slide-indicator transition-all duration-300 rounded-full ${index === currentSlide
                  ? 'w-12 h-3 bg-red-500'
                  : 'w-3 h-3 bg-gray-400 hover:bg-red-400'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Auto-play Controls */}
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
        <button
          onClick={toggleAutoPlay}
          className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
          title={isPaused ? "Resume auto-play" : "Pause auto-play"}
        >
          {isPaused ? (
            <FaPlay className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800" />
          ) : (
            <FaPause className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800" />
          )}
        </button>
      </div>

    </section>
  );
};

export default Hero;