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


          <div className="relative order-2 lg:order-2">


            {/* Featured Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
                {/* Background Image */}
                <div className="relative h-96 sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  <img
                    src="/images/afex/3.jpg"
                    alt="Industrial Safety Excellence"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />

                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-red-500/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Content Overlay - Bottom Positioned */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <div className="text-center text-white relative z-10">
                      <div className="mb-4">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/40 shadow-2xl">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6)' }}>Trusted Safety Partner</h4>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-2xl mx-auto leading-relaxed font-semibold" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)' }}>
                          Delivering world-class safety solutions with 15+ years of industrial expertise
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-red-500/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute top-1/2 right-8 w-3 h-3 bg-white/60 rounded-full"></div>
                  <div className="absolute bottom-1/3 left-12 w-2 h-2 bg-primary/80 rounded-full"></div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-500/20 to-transparent rounded-tr-3xl"></div>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
