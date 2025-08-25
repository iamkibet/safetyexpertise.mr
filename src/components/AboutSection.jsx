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
      title: "CERTIFIED",
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
                Who are <span className="text-primary">We</span>?
              </motion.h2>


            </motion.div>
          </div>
        </section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content Section - First on Mobile, Second on Desktop */}
          <div className="relative order-1 lg:order-1">
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
                  Your trusted partner for industrial engineering and maintenance solutions in Mauritania, we deliver robust, reliable, and tailored support to meet the demanding needs of mining and heavy industry.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-light">

                  Backed by global expertise and local insight, our teams provide end-to-end services including installation, commissioning, preventive and corrective maintenance, inspections, and emergency support. With rapid response capabilities, a proven track record, and strict adherence to international standards, we ensure operational continuity, compliance, and peace of mind—empowering your equipment and facilities to perform at their best.

                </p>
              </motion.div>

              

              {/* Features Grid */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="flex flex-row sm:flex-col items-center sm:text-center relative group mb-4 sm:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {/* Icon Container */}
                    <div className="flex-shrink-0 mb-0 sm:mb-6 mr-3 sm:mr-0 p-2 sm:p-3 bg-primary rounded-full group-hover:bg-primary/50 transition-colors duration-300">
                      <div className="text-white text-xl sm:text-2xl">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Number Box */}
                    <div className="flex-shrink-0 mb-0 sm:mb-4 mr-3 sm:mr-0">
                      <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 shadow-sm group-hover:border-red-300 transition-colors duration-300">
                        <span className="text-gray-700 font-bold text-xs sm:text-sm">{feature.number}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-bold text-base sm:text-lg uppercase tracking-wide mb-0 sm:mb-3 group-hover:text-red-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section - First on Mobile, Second on Desktop */}
          <div className="relative order-2 lg:order-2">
            {/* Section Title */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Official Distributor of:
              </h3>
              <div className="h-1 w-16 bg-primary mx-auto"></div>
            </motion.div>

            {/* Dual Logo Images Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* AFEX Logo */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <h3 className="text-red-600 font-bold text-lg sm:text-xl tracking-wide mb-2">AFEX</h3>
                    <div className="h-1 w-12 bg-red-500 mx-auto mb-3"></div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.img
                      src="/images/afex.png"
                      alt="AFEX Logo"
                      className="w-full h-auto max-h-48 object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-700 text-sm font-medium">Fire Suppression</p>
                    <p className="text-gray-500 text-xs">For Heavy Duty Equipment</p>
                  </div>
                </div>
              </motion.div>

              {/* ICAT Logo */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <h3 className="text-red-600 font-bold text-lg sm:text-xl tracking-wide mb-2">ICAT</h3>
                    <div className="h-1 w-12 bg-red-500 mx-auto mb-3"></div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.img
                      src="/images/icat.png"
                      alt="ICAT Logo"
                      className="w-full h-auto max-h-48 object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-700 text-sm font-medium">Fire Suppression</p>
                    <p className="text-gray-500 text-xs">Technologies</p>
                  </div>
                </div>
              </motion.div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
