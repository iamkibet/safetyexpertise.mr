import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCog, FaShieldAlt, FaGift } from "react-icons/fa";

/* === Typewriter Component === */
const TypewriterText = ({ text, delay = 50, className = "", onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      // Call onComplete when typing is finished
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

/* === Slide Data === */
const SLIDE_DATA = [
  {
    id: 1,
    badge: "Fire Suppression",
    title: "Dependable fire suppression systems",
    subtitle: "Discover dependable, automatic fire suppression systems and solutions for server rooms and data centres.",
    image: "/images/hero/Extinguishers.png",
    cta: "Discover Systems",
    ctaLink: "/services",
    accentColor: "#10B981", // Green
    features: ["24/7 Emergency Response", "Certified Safety Systems", "National Compliance"]
  },
  {
    id: 2,
    badge: "Fire Detection",
    title: "Advanced fire detection technology",
    subtitle: "State-of-the-art fire detection systems with early warning capabilities for maximum safety and protection.",
    image: "/images/hero/Detectors-1.png",
    cta: "Learn More",
    ctaLink: "/services",
    accentColor: "#EF4444", // Red
    features: ["Early Warning Systems", "Smart Detection", "24/7 Monitoring"]
  },
  {
    id: 3,
    badge: "Industrial Maintenance",
    title: "Professional industrial maintenance",
    subtitle: "Expert maintenance services for industrial equipment and mobile mining machinery with AFEX - ICAT specialization.",
    image: "/images/hero/Servicing.png",
    cta: "Get Quote",
    ctaLink: "/contact",
    accentColor: "#F59E0B", // Yellow
    features: ["Preventive Maintenance", "Equipment Optimization", "Safety Compliance"]
  },
  {
    id: 4,
    badge: "Mining Equipment",
    title: "AFEX - ICAT mobile equipment",
    subtitle: "Specialized maintenance and safety systems for mobile mining equipment and industrial machinery.",
    image: "/images/hero/mining.png",
    cta: "Explore Solutions",
    ctaLink: "/services",
    accentColor: "#3B82F6", // Blue
    features: ["Mobile Equipment", "Mining Safety", "24/7 Support"]
  }
];

/* === Navigation Arrows === */
const NavigationButton = ({ direction, onClick, disabled = false, isMobile = false }) => (
  <motion.button
    onClick={onClick}
    disabled={disabled}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`${
      isMobile 
        ? 'p-4 bg-white/95 backdrop-blur-sm rounded-full shadow-xl hover:bg-white transition-all duration-300' 
        : 'p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors'
    } ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    }`}
    aria-label={`${direction} slide`}
  >
    {direction === "prev" ? (
      <FaArrowLeft className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'} text-gray-800`} />
    ) : (
      <FaArrowRight className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'} text-gray-800`} />
    )}
  </motion.button>
);

/* === Progress Dots === */
// Removed ProgressIndicator component

/* === Feature Cards === */
const FeatureCards = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Card - Red fill animation on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="relative flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            {/* Red fill animation background */}
            <motion.div
              className="absolute inset-0 bg-red-600 origin-bottom"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: hoveredCard === 0 ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex items-start space-x-4">
              <motion.div 
                className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  hoveredCard === 0 ? 'bg-white/20' : 'bg-red-100'
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaShieldAlt className={`w-6 h-6 transition-colors duration-300 ${
                  hoveredCard === 0 ? 'text-white' : 'text-red-600'
                }`} />
              </motion.div>
              <div>
                <motion.h3 
                  className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    hoveredCard === 0 ? 'text-white' : 'text-gray-900'
                  }`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Passion for fire safety
                </motion.h3>
                <motion.p 
                  className={`text-sm transition-colors duration-300 ${
                    hoveredCard === 0 ? 'text-white/90' : 'text-gray-600'
                  }`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  Dedicated to protecting lives and property with certified fire safety solutions.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Middle Card - Always red */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex items-start space-x-4 p-6 bg-red-600 rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div 
              className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FaGift className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <motion.h3 
                className="text-lg font-bold text-white mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Reliable Fire Protection
              </motion.h3>
              <motion.p 
                className="text-white/90 text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                Comprehensive fire protection systems designed for maximum reliability and safety.
              </motion.p>
            </div>
          </motion.div>

          {/* Third Card - Red fill animation on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="relative flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredCard(2)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            {/* Red fill animation background */}
            <motion.div
              className="absolute inset-0 bg-red-600 origin-bottom"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: hoveredCard === 2 ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex items-start space-x-4">
              <motion.div 
                className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  hoveredCard === 2 ? 'bg-white/20' : 'bg-green-100'
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaCog className={`w-6 h-6 transition-colors duration-300 ${
                  hoveredCard === 2 ? 'text-white' : 'text-green-600'
                }`} />
              </motion.div>
              <div>
                <motion.h3 
                  className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    hoveredCard === 2 ? 'text-white' : 'text-gray-900'
                  }`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Engineering the quality
                </motion.h3>
                <motion.p 
                  className={`text-sm transition-colors duration-300 ${
                    hoveredCard === 2 ? 'text-white/90' : 'text-gray-600'
                  }`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  Expert engineering and maintenance services for industrial equipment and systems.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* === Main Hero Component === */
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const intervalRef = useRef(null);
  const typingCompleteRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDE_DATA.length);
    setIsTypingComplete(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);
    setIsTypingComplete(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsTypingComplete(false);
  };

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
    // Wait 3 seconds after typing is complete, then move to next slide
    typingCompleteRef.current = setTimeout(() => {
      if (isAutoPlaying) {
        nextSlide();
      }
    }, 3000);
  };

  // Clear timeout when component unmounts or slide changes
  useEffect(() => {
    return () => {
      if (typingCompleteRef.current) {
        clearTimeout(typingCompleteRef.current);
      }
    };
  }, []);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, []);

  const currentSlideData = SLIDE_DATA[currentSlide];

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-200/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-gray-200 shadow-lg"
            >
              <div 
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mr-3 sm:mr-4"
                style={{ backgroundColor: currentSlideData.accentColor }}
              />
              <span className="text-sm sm:text-base font-bold text-gray-800 tracking-wide">
                {currentSlideData.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black sm:font-bold lg:font-bold text-gray-900 leading-tight tracking-tight"
            >
              <TypewriterText 
                text={currentSlideData.title} 
                delay={80}
                className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                onComplete={handleTypingComplete}
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-700 sm:text-gray-600 max-w-lg sm:max-w-xl lg:max-w-2xl leading-relaxed font-medium sm:font-normal"
            >
              {currentSlideData.subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Link
                to={currentSlideData.ctaLink}
                className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 shadow-xl text-base sm:text-lg lg:text-xl transform hover:scale-105"
              >
                <FaCog className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-3 sm:mr-4" />
                {currentSlideData.cta}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            key={`image-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[550px]">
              <motion.img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-auto object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Enhanced Glow effect */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: currentSlideData.accentColor }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop (side positioning) */}
      <div className="absolute inset-y-0 left-2 sm:left-4 lg:left-8 flex items-center z-20 hidden lg:flex">
        <NavigationButton direction="prev" onClick={prevSlide} />
      </div>
      <div className="absolute inset-y-0 right-2 sm:right-4 lg:right-8 flex items-center z-20 hidden lg:flex">
        <NavigationButton direction="next" onClick={nextSlide} />
      </div>

      {/* Navigation Arrows - Mobile (bottom positioning) */}
      <div className="absolute bottom-20 left-4 flex items-center z-20 lg:hidden">
        <NavigationButton direction="prev" onClick={prevSlide} isMobile={true} />
      </div>
      <div className="absolute bottom-20 right-4 flex items-center z-20 lg:hidden">
        <NavigationButton direction="next" onClick={nextSlide} isMobile={true} />
      </div>

      {/* Progress Indicator */}
      {/* Removed ProgressIndicator */}

      {/* Feature Cards - Only visible on large screens */}
      <FeatureCards />
    </section>
  );
};

export default Hero;
