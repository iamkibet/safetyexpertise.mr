import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaGlobe, FaTools } from "react-icons/fa";
import TrustBanner from "./TrustBanner";

const AboutSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt className="w-8 h-8" />,
      number: "01",
      title: "TRUST",
      description: "A proven partner in fire safety and industrial maintenance"
    },
    {
      id: 2,
      icon: <FaGlobe className="w-8 h-8" />,
      number: "02",
      title: "AFEX CERTIFIED",
      description: "Official AFEX representative in Mauritania"
    },
    {
      id: 3,
      icon: <FaTools className="w-8 h-8" />,
      number: "03",
      title: "EXPERTISE",
      description: "Experienced expat and local teams with global standards knowledge"
    }
  ];

  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* About Heading Section */}
        <section className="pt-8 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-5">
                <motion.span
                  className="h-0.5 w-12 bg-primary mr-3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                ></motion.span>
                <span className="text-sm font-semibold tracking-wider text-red-600 uppercase">
                  About Us
                </span>
                <motion.span
                  className="h-0.5 w-12 bg-primary ml-3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                ></motion.span>
              </div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Why Choose <span className="text-primary">Safety Expertise</span>?
              </motion.h2>


            </motion.div>
          </div>
        </section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content Section - First on Mobile, Second on Desktop */}
          <div className="relative order-2 lg:order-1">
            {/* Enhanced Background Pattern */}
            <div className="absolute -inset-4 bg-gradient-to-br from-gray-50 to-white rounded-xl opacity-80 shadow-sm"></div>

            <div className="relative z-10 p-8 lg:p-12 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md">



              {/* Introductory Text */}
              <motion.div
                className="mb-12 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Your trusted fire safety partner in Mauritania, we deliver robust industrial fire suppression solutions tailored to mining operations.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  As the official AFEX representative, our experienced expat and local teams provide installation, commissioning, maintenance, inspections, and emergency support. With rapid response capabilities and deep expertise, we ensure continuous protection, compliance with global standards, and peace of mind for heavy‑duty equipment worldwide.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="flex flex-col items-center text-center relative group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {/* Icon Container */}
                    <div className="flex-shrink-0 mb-6 p-3 bg-primary rounded-full group-hover:bg-primary/50 transition-colors duration-300">
                      <div className="text-white text-2xl">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Number Box */}
                      <div className="flex justify-center mb-4">
                        <div className="bg-white border border-gray-200 rounded-md px-3 py-1 shadow-sm group-hover:border-red-300 transition-colors duration-300">
                          <span className="text-gray-700 font-bold text-sm">{feature.number}</span>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wide mb-3 group-hover:text-red-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section - Second on Mobile, First on Desktop */}
          <div className="relative order-1 lg:order-2">
            {/* Main Van Image Container */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <motion.img
                src="/images/hero/afex.png"
                alt="Safety Expertise Service Vehicle"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Enhanced Company Info Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-5 shadow-lg border border-gray-100 max-w-[70%]">
                <div className="text-center">
                  <h3 className="text-red-600 font-bold text-xl tracking-wide mb-1">SAFETY EXPERTISE</h3>
                  <div className="h-1 w-12 bg-red-500 mx-auto mb-2"></div>
                  <p className="text-gray-800 text-base font-semibold mb-1">PROFESSIONAL SERVICES</p>
                  <p className="text-gray-600 text-xs uppercase tracking-wider">TRUSTED PARTNER</p>
                </div>
              </div>
            </div>

            {/* Enhanced Bottom Banner */}
            <motion.div
              className="mt-8 bg-primary p-5 rounded-xl shadow-lg border border-red-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="bg-red-500 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white text-base font-medium">
                  24/7 Emergency Response – Always available when it matters most.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
