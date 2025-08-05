import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Link } from "react-router-dom";

// Custom hook for slide management
const useSlideManager = (slides, autoPlayInterval = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  const resetProgress = useCallback(() => {
    setProgress(0);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.min((elapsed / autoPlayInterval) * 100, 100);
      setProgress(percentage);
      if (percentage >= 100) {
        clearInterval(progressRef.current);
      }
    }, 50);
  }, [autoPlayInterval]);

  const goToSlide = useCallback(
    (index) => {
      if (index === currentSlide || index < 0 || index >= slides.length) return;

      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
        resetProgress();
      }, 300);
    },
    [currentSlide, slides.length, resetProgress]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const pauseAutoPlay = useCallback(() => setIsPaused(true), []);
  const resumeAutoPlay = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
      return;
    }

    resetProgress();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, [currentSlide, isPaused, autoPlayInterval, nextSlide, resetProgress]);

  return {
    currentSlide,
    isTransitioning,
    progress,
    isPaused,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoPlay,
    resumeAutoPlay,
  };
};

// Slide data with enhanced metadata
const SLIDE_DATA = [
  {
    id: 1,
    title: "Fire Protection Services",
    subtitle:
      "Comprehensive fire safety solutions for your business. From detection systems to suppression equipment, we protect what matters most.",
    image: "/images/safety1.png",
    badge: "FIRE PROTECTION",
    cta: "Get Free Consultation",
    ctaLink: "/contact",
    secondaryCta: "View Services",
    secondaryCtaLink: "/services",
    gradient: "from-red-600/20 via-red-800/30 to-red-900/50",
    accentColor: "red",
    features: [
      "Detection Systems",
      "Suppression Equipment",
      "Safety Compliance",
    ],
  },
  {
    id: 2,
    title: "Industrial Maintenance",
    subtitle:
      "Professional maintenance services to keep your industrial equipment running efficiently and safely. Preventive and corrective maintenance solutions.",
    image: "/images/background2.jpg",
    badge: "INDUSTRIAL MAINTENANCE",
    cta: "Schedule Maintenance",
    ctaLink: "/contact",
    secondaryCta: "Learn More",
    secondaryCtaLink: "/services",
    gradient: "from-blue-600/20 via-blue-800/30 to-blue-900/50",
    accentColor: "blue",
    features: [
      "Preventive Maintenance",
      "Corrective Repairs",
      "Equipment Optimization",
    ],
  },
];

// Enhanced button component with proper accessibility
const NavigationButton = ({ onClick, direction, className = "", ...props }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md hover:bg-black/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 ${className}`}
    aria-label={`Go to ${direction} slide`}
    {...props}
  >
    <svg
      className="w-5 h-5 text-white"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d={
          direction === "previous"
            ? "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            : "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        }
      />
    </svg>
  </button>
);

// Progress indicator component
const ProgressIndicator = ({
  slides,
  currentSlide,
  progress,
  onSlideClick,
}) => (
  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => onSlideClick(index)}
        className="group relative w-12 h-1 sm:w-16 sm:h-1.5 bg-white/30 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/50"
        aria-label={`Go to slide ${index + 1}`}
      >
        {index === currentSlide && (
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        )}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
      </button>
    ))}
  </div>
);

// Feature list component with enhanced animations
const FeatureList = ({ features, accentColor }) => (
  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
    {features.map((feature, index) => (
      <span
        key={index}
        className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 transition-all duration-500 hover:bg-white/20 hover:scale-105 transform`}
        style={{
          animationDelay: `${index * 100}ms`,
          animation: "fadeInUp 0.6s ease-out forwards",
        }}
      >
        <div
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-${accentColor}-400 mr-2 animate-pulse`}
        />
        {feature}
      </span>
    ))}
  </div>
);

const Hero = () => {
  const {
    currentSlide,
    isTransitioning,
    progress,
    isPaused,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoPlay,
    resumeAutoPlay,
  } = useSlideManager(SLIDE_DATA, 6000);

  const currentSlideData = useMemo(
    () => SLIDE_DATA[currentSlide],
    [currentSlide]
  );

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          prevSlide();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextSlide();
          break;
        case " ":
          e.preventDefault();
          isPaused ? resumeAutoPlay() : pauseAutoPlay();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [prevSlide, nextSlide, isPaused, pauseAutoPlay, resumeAutoPlay]);

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[100vh] overflow-hidden"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      role="banner"
      aria-label="Hero section"
    >
      {/* Enhanced CSS with better performance and animations */}
      <style jsx>{`
        .slide-gradient {
          background: radial-gradient(
            circle at 20% 30%,
            transparent 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }
        .text-shadow {
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        .slide-transition {
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .content-transition {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .progress-bar {
          transition: width 0.1s linear;
        }
        .glass-effect {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glow-effect {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
        .text-area-glow {
          background: radial-gradient(
            ellipse at center bottom,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 70%
          );
        }
        .overlay-pattern {
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(255, 255, 255, 0.05) 0%,
              transparent 50%
            );
        }
      `}</style>

      {/* Background Slides with enhanced performance */}
      <div className="absolute inset-0">
        {SLIDE_DATA.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 slide-transition ${
              index === currentSlide && !isTransitioning
                ? "opacity-100"
                : "opacity-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Creative overlay system */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Geometric overlay pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 1px, transparent 1px),
                      radial-gradient(circle at 40% 60%, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px, 80px 80px, 100px 100px",
                    backgroundPosition: "0 0, 40px 40px, 20px 20px",
                  }}
                />
              </div>

              {/* Gradient overlay for text area */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Side accent overlay */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent" />

              {/* Text area highlight */}
              <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Content with better typography and spacing */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end sm:justify-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl content-transition text-area-glow ${
            isTransitioning
              ? "opacity-0 translate-y-6"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Mobile-optimized content spacing */}
          <div className="sm:hidden mb-4">
            <div className="h-8"></div>
          </div>
          {/* Badge with enhanced styling */}
          <div className="inline-flex items-center px-4 py-2 sm:px-4 sm:py-2 text-sm sm:text-sm font-semibold text-white glass-effect rounded-full mb-4 sm:mb-6 border border-white/20 shadow-lg">
            <div
              className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-${currentSlideData.accentColor}-400 mr-2 animate-pulse`}
            />
            {currentSlideData.badge}
          </div>

          {/* Enhanced typography hierarchy with gradient effects */}
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-shadow leading-tight">
            {currentSlideData.title.split(" ").map((word, index) => (
              <span
                key={index}
                className={`block transition-all duration-500 ${
                  index === 1
                    ? `text-${currentSlideData.accentColor}-300 glow-effect`
                    : ""
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Feature list for better content structure - hidden on mobile */}
          <div className="hidden sm:block">
            <FeatureList
              features={currentSlideData.features}
              accentColor={currentSlideData.accentColor}
            />
          </div>

          {/* Enhanced subtitle */}
          <p className="text-xl sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl text-shadow leading-relaxed font-light">
            {currentSlideData.subtitle}
          </p>

          {/* Enhanced CTA buttons with better UX and micro-interactions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
            {/* Primary CTA - visible on all devices */}
            <Link
              to={currentSlideData.ctaLink}
              className="group py-4 px-8 sm:py-4 sm:px-8 inline-flex items-center gap-x-2 sm:gap-x-3 text-base sm:text-base font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-50 transition-all duration-300 hover-lift shadow-xl relative overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">{currentSlideData.cta}</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            {/* Secondary CTA - hidden on mobile for cleaner UX */}
            <Link
              to={currentSlideData.secondaryCtaLink}
              className="hidden sm:inline-flex group py-3 px-6 sm:py-4 sm:px-8 items-center gap-x-2 sm:gap-x-3 text-sm sm:text-base font-semibold rounded-xl glass-effect border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover-lift relative overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">
                {currentSlideData.secondaryCta}
              </span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Indicators */}
      <ProgressIndicator
        slides={SLIDE_DATA}
        currentSlide={currentSlide}
        progress={progress}
        onSlideClick={goToSlide}
      />

      {/* Enhanced Navigation Arrows */}
      <div className="absolute inset-y-0 w-full flex items-center justify-between px-2 sm:px-4 md:px-6 z-10">
        <NavigationButton
          onClick={prevSlide}
          direction="previous"
          className="transform -translate-x-1 sm:-translate-x-2 w-10 h-10 sm:w-12 sm:h-12"
        />
        <NavigationButton
          onClick={nextSlide}
          direction="next"
          className="transform translate-x-1 sm:translate-x-2 w-10 h-10 sm:w-12 sm:h-12"
        />
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse overlay-pattern" />
      <div className="absolute bottom-1/3 left-8 w-40 h-40 rounded-full bg-red-500/5 blur-3xl animate-pulse overlay-pattern" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/3 blur-3xl animate-pulse overlay-pattern" />

      {/* Additional overlay elements for depth */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Accessibility indicator for auto-play status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isPaused ? "Auto-play paused" : "Auto-play active"}
      </div>
    </section>
  );
};

export default Hero;
