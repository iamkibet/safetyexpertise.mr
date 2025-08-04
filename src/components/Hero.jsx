import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = ({
  title = "Reliable. Preventive. Professional.",
  subtitle = "Your trusted partner in industrial safety solutions. We provide comprehensive safety equipment installation, maintenance, and compliance services across Mauritania.",
  backgroundImage = "/images/hero-bg.jpg",
  ctaText = "Request a Quote",
  ctaLink = "/contact",
}) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 85, 140, 0.8), rgba(24, 85, 140, 0.8)), url(${backgroundImage})`,
      }}
    >
      <div className="container-custom section-padding text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={ctaLink}>
              <Button variant="accent" className="text-lg px-8 py-4">
                {ctaText}
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" className="text-lg px-8 py-4">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
