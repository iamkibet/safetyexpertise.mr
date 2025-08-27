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
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">

            {/* Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 hero-text-container">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="hero-title text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight max-w-3xl"
                  style={{
                    textShadow: '2px 2px 8px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.1)'
                  }}
                >
                  <span className="block break-words hyphens-auto">
                    {currentSlideData.title}
                  </span>
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="hero-subtitle text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl  font-bold leading-tight tracking-tight max-w-4xl"
                  style={{
                    textShadow: '1px 1px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <span className="block break-words hyphens-auto">
                    {currentSlideData.subtitle}
                  </span>
                </motion.h2>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12"
              >
                {/* Main CTA Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hero-button py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 lg:py-4 lg:px-8 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 sm:hover:scale-110 transition-all duration-300"
                  style={{
                    boxShadow: '0 6px 20px 0 rgba(24, 85, 140, 0.4), 0 3px 8px 0 rgba(24, 85, 140, 0.2)'
                  }}
                >
                  <span className="tracking-wide">GET IN TOUCH</span>
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ml-2 sm:ml-3 md:ml-4 lg:ml-5 transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>


            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 sm:gap-3">
          {HERO_SLIDES.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 sm:w-12 h-2 sm:h-3 bg-primary'
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-400 hover:bg-primary/60'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Auto-play Controls */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
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