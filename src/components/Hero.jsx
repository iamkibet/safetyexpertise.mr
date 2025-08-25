import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

// Hero slide data with focused services
const HERO_SLIDES = [
  {
    id: 1,
    title: "Mobile Equipment Maintenance",
    subtitle: "& Fire Suppression Systems",
    image: "/images/afex/6.jpg"
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
      className="relative overflow-hidden min-h-[70vh]"
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
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-30 lg:pt-38">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8 lg:space-y-10"
            >
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-800 leading-tight tracking-tight"
                >
                  {currentSlideData.title}
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="max-w-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-relaxed"
                >
                  {currentSlideData.subtitle}
                </motion.h2>
              </div>

              {/* CTA Button with Integrated Slide Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="pt-6 sm:pt-8 lg:pt-10"
              >
                {/* Main CTA Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="relative inline-block bg-primary hover:bg-primary/80 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-lg overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  
                  {/* Filling Progress Bar */}
                  <div className="absolute bottom-0 left-0 h-1 bg-red-400 transition-all duration-500 ease-out"
                       style={{ 
                         width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%` 
                       }}>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators at Bottom Middle */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          {/* Show only 3 indicators at a time - always the next 3 from current */}
          {Array.from({ length: Math.min(3, HERO_SLIDES.length) }, (_, index) => {
            // Calculate which slides to show - always the next 3 from current
            let slideIndex;
            if (currentSlide + 2 < HERO_SLIDES.length) {
              // If we have enough slides ahead, show current + next 2
              slideIndex = currentSlide + index;
            } else {
              // If we're near the end, show the last 3 slides
              slideIndex = Math.max(0, HERO_SLIDES.length - 3 + index);
            }
            
            const isActive = slideIndex === currentSlide;
            const isVisible = slideIndex < HERO_SLIDES.length;
            
            return (
              <button
                key={`indicator-${slideIndex}-${currentSlide}`}
                onClick={() => goToSlide(slideIndex)}
                className="group relative"
                aria-label={`Go to slide ${slideIndex + 1}`}
              >
                {/* Main Indicator - Pill Shape */}
                <div className="relative">
                  {/* Background Pill */}
                  <div className="w-16 h-2 sm:w-20 sm:h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    {/* Filling Animation */}
                    <motion.div 
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0.3
                      }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeInOut",
                        delay: index * 0.1 
                      }}
                    />
                  </div>
                  
                  {/* Active State Glow Effect */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full shadow-lg"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(239, 68, 68, 0.4)",
                          "0 0 0 4px rgba(239, 68, 68, 0.2)",
                          "0 0 0 0 rgba(239, 68, 68, 0.4)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </div>
                
                {/* Enhanced Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                  <div className="text-center">
                    <div className="font-semibold">{HERO_SLIDES[slideIndex]?.title || 'More Slides'}</div>
                    <div className="text-gray-300 text-xs mt-1">{HERO_SLIDES[slideIndex]?.subtitle || 'Keep exploring'}</div>
                  </div>
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </button>
            );
          })}
          
          {/* Creative Indicator for Additional Slides */}
          {HERO_SLIDES.length > 3 && (
            <div className="flex items-center space-x-3">
              {/* Animated dots indicating more slides */}
              <div className="flex space-x-1.5">
                {Array.from({ length: Math.min(3, HERO_SLIDES.length - 3) }, (_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-400"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.7, 1.2, 0.7]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Animated arrow indicating more */}
              <motion.div
                className="text-gray-500 text-xl font-bold"
                animate={{
                  x: [0, 3, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.div>
            </div>
          )}
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