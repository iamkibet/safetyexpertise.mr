import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight, FaArrowRight, FaShieldAlt, FaCog, FaUsers, FaTruck, FaTools } from "react-icons/fa";

// Hero slide data with focused services
const HERO_SLIDES = [
  {
    id: 1,
    title: "Mobile Equipment",
    subtitle: "Fire Suppression",
    description: "Advanced maintenance solutions with cutting-edge fire suppression technology. Ensuring your equipment operates safely, efficiently, and meets the highest industry standards.",
    image: "/images/17.png",
    icon: FaShieldAlt
  },
  {
    id: 2,
    title: "Maintenance",
    subtitle: "Engineering Excellence",
    description: "Expert engineering services delivering predictive maintenance strategies. We minimize downtime while maximizing operational efficiency across all your industrial systems.",
    image: "/images/hero/3.png",
    icon: FaCog
  },
  {
    id: 3,
    title: "Professional",
    subtitle: "Manpower Solutions",
    description: "Skilled professionals providing specialized expertise across industrial sectors. Our certified team delivers comprehensive training and maintains the highest safety protocols.",
    image: "/images/hero/11.png",
    icon: FaUsers
  },
  {
    id: 4,
    title: "Industrial",
    subtitle: "Procurement & Supply",
    description: "Strategic procurement solutions connecting you with premium suppliers. We ensure seamless supply chain management and cost-effective sourcing for your operations.",
    image: "/images/hero/7.jpg",
    icon: FaTruck
  },
  {
    id: 5,
    title: "Transport &",
    subtitle: "Mobility Solutions",
    description: "Reliable transportation solutions designed for modern industrial needs. Our services focus on safety, operational efficiency, and environmental responsibility.",
    image: "/images/hero/8.jpg",
    icon: FaTools
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      }, 6000);
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
  const IconComponent = currentSlideData.icon;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
      style={{ minHeight: 'calc(100vh - 120px)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Background Images with Modern Overlay */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Base dark background to prevent white flash */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`background-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Image with proper background */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${currentSlideData.image})`,
                backgroundColor: '#1e293b' // slate-800 as fallback
              }}
            />
            {/* Professional Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-6">
              <div className="space-y-6 md:space-y-8">
                {/* Icon Badge */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/90">
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium">Professional Services</span>
                </div>

                {/* Main Title */}
                <div className="space-y-3 sm:space-y-4">
                  <motion.h1
                    key={`title-${currentSlide}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl  md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight"
                    style={{
                      textShadow: '0 6px 20px rgba(0,0,0,0.6), 0 3px 8px rgba(0,0,0,0.4)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {currentSlideData.title}
                  </motion.h1>
                  
                  <motion.h2
                    key={`subtitle-${currentSlide}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-100 leading-tight tracking-wide"
                    style={{
                      textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {currentSlideData.subtitle}
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl font-normal"
                  style={{
                    textShadow: '0 3px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)',
                    lineHeight: '1.6',
                    letterSpacing: '0.01em'
                  }}
                >
                  {currentSlideData.description}
                </motion.p>

                {/* CTA Buttons with Navigation */}
                <div className="space-y-4 pt-6">
                  {/* Mobile: Stack vertically, Desktop: Side by side */}
                  <div className="flex sm:flex-row items-stretch sm:items-center gap-4">
                    {/* Primary CTA */}
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="inline-flex items-center justify-center gap-3 bg-primary text-white font-bold px-3 md:px-6 py-2 md:py-4 rounded-xl text-lg sm:text-lg flex-1 sm:flex-none"
                      style={{
                        boxShadow: '0 10px 25px -5px rgba(24, 85, 140, 0.4), 0 4px 6px -2px rgba(24, 85, 140, 0.2)',
                        minHeight: '56px'
                      }}
                    >
                      <span>Get Started</span>
                      <FaArrowRight className="w-3 h-3 md:w-5 md:h-5" />
                    </button>
                    
                    {/* Navigation Buttons Row */}
                    <div className="flex gap-3 justify-center items-center sm:justify-start shrink-0">
                      <button
                        onClick={prevSlide}
                        className="w-11 h-11 md:w-14 md:h-14 inline-flex items-center justify-center bg-white/15 backdrop-blur-md border-2 border-white/25 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        style={{ 
                          borderRadius: '12px',
                          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15)'
                        }}
                        aria-label="Previous slide"
                      >
                        <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="w-11 h-11 md:w-14 md:h-14 inline-flex items-center justify-center bg-white/15 backdrop-blur-md border-2 border-white/25 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        style={{ 
                          borderRadius: '12px',
                          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15)'
                        }}
                        aria-label="Next slide"
                      >
                        <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Slide Indicators */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20 bottom-5 md:bottom-10" >
        <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-3 shadow-lg">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2 bg-white shadow-sm'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play Controls */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleAutoPlay}
          className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
          title={isPaused ? "Resume auto-play" : "Pause auto-play"}
          aria-label={isPaused ? "Resume auto-play" : "Pause auto-play"}
        >
          {isPaused ? (
            <FaPlay className="w-4 h-4" />
          ) : (
            <FaPause className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Progress Bar - Enhanced Visibility */}
      <div className="absolute left-0 right-0 z-30" style={{ bottom: '0px' }}>
        <div className="h-2 bg-black/40 backdrop-blur-sm">
          <motion.div
            key={currentSlide}
            className="h-full bg-gradient-to-r from-primary to-primary shadow-lg"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            style={{
              boxShadow: '0 0 20px rgba(24, 85, 140, 1), 0 0 40px rgba(24, 85, 140, 0.6), 0 2px 8px rgba(24, 85, 140, 0.8)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;