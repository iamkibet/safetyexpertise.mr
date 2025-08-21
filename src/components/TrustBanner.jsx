import React from "react";
import { motion } from "framer-motion";

const TrustBanner = () => {
  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff20_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/12.png"
          alt="Emergency response background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-red-900/70"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Section - Text Content */}
          <div className="text-white">
            {/* Company Badge */}
            <motion.div 
              className="inline-flex items-center text-red-400 text-xs font-semibold uppercase tracking-widest mb-3 py-1.5 px-3 bg-red-900/30 rounded-full border border-red-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              24/7 EMERGENCY RESPONSE
            </motion.div>
            
            {/* Main Heading */}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">ALWAYS AVAILABLE</span>
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mt-1">WHEN IT MATTERS MOST</span>
            </motion.h2>
            
            {/* Descriptive Paragraph */}
            <motion.p 
              className="text-lg text-gray-200 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our rapid response capabilities ensure you're never alone in an emergency. With experienced teams and global standards compliance, we provide immediate support for your critical safety needs.
            </motion.p>
          </div>
          
          {/* Right Section - Enhanced Circular Badge */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Outer Ring with Animation */}
              <div className="absolute inset-0">
                <div className="w-48 h-48 border-4 border-red-500/30 rounded-full animate-ping-slow opacity-20"></div>
              </div>
              
              {/* Main Circle */}
              <div className="relative w-44 h-44 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex flex-col items-center justify-center text-white shadow-2xl shadow-red-900/50 border-2 border-red-400/20">
                {/* Pulsing Dot */}
                <div className="absolute -top-1.5 w-5 h-5 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500"></div>
                
                {/* Main Number */}
                <div className="text-4xl font-black leading-none mb-1 tracking-tighter">24/7</div>
                
                {/* Service Text */}
                <div className="text-xs font-bold uppercase tracking-widest mt-1 text-center px-4">
                  <span className="block">Emergency</span>
                  <span className="block">Response</span>
                </div>
                
                {/* Inner Circle Detail */}
                <div className="absolute bottom-5 w-24 h-0.5 bg-red-300/40 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;