import React from "react";
import { motion } from "framer-motion";

const WhyUsSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Industry Expertise",
      gradient: "from-red-500 to-red-600",
      highlights: ["15 years of experience", "international standards", "tailored solutions"],
      description: "Deep expertise across multiple sectors including mining, manufacturing, and energy. Our certified professionals bring international standards to every project, ensuring compliance with NFPA, OSHA, and ISO requirements."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
       title: "Innovation & Technology",
       gradient: "from-primary to-primary/80",
      highlights: ["cutting-edge technology", "predictive maintenance", "research and development"],
      description: "Continuous integration of cutting-edge safety technologies and methodologies. From advanced fire detection systems to predictive maintenance solutions, we leverage the latest developments for superior protection."
    }
  ];

  const distributors = [
    {
      name: "AFEX",
      logo: "/images/afex.png",
      title: "Fire Suppression Systems",
      subtitle: "For Heavy Duty Equipment",
      color: "red-600",
      delay: 0.2
    },
     {
       name: "ICAT",
       logo: "/images/icat.png",
       title: "Fire Suppression Technologies",
       subtitle: "Advanced Safety Solutions",
       color: "primary",
       delay: 0.4
     }
  ];

  return (
    <section id="why-us" className="relative py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-32 -left-32 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-primary/5 to-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtitle with Enhanced Animation */}
          <motion.div
            className="flex items-center justify-center gap-3 md:gap-4 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="block h-px w-8 md:w-16 lg:w-20 bg-gradient-to-r from-transparent via-red-600 to-red-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.span>
            <span className="text-xs md:text-sm font-bold tracking-wider text-red-600 uppercase px-3 py-2 bg-red-50 rounded-full border border-red-200">
              Our Competitive Edge
            </span>
            <motion.span 
              className="block h-px w-8 md:w-16 lg:w-20 bg-gradient-to-l from-transparent via-red-600 to-red-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.span>
          </motion.div>

           {/* Main Heading */}
           <motion.h2
             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, delay: 0.3 }}
           >
             Why <span className="text-primary">SafetyExpertise</span> Excels
           </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Industry-leading expertise combined with innovative technology for uncompromised safety, 
            efficiency, and long-term asset protection.
          </motion.p>
        </motion.div>

        {/* Main Content Container */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Glass Morphism Container */}
          <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-xl"></div>
            
             {/* Corner Decorations */}
             <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
             <div className="absolute top-8 right-8 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
             <div className="absolute bottom-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
             <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="relative z-10 p-6 md:p-8 lg:p-12">
              
              {/* Industry Leadership Badge */}
              <div className="text-center mb-8 md:mb-12">
                <motion.div 
                  className="inline-flex items-center justify-center mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-primary mr-3"></span>
             <span className="text-xs md:text-sm font-bold tracking-wider text-primary uppercase px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
               Industry Leadership
             </span>
             <span className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-primary ml-3"></span>
                </motion.div>
                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-primary to-red-500 mx-auto rounded-full"></div>
              </div>

              {/* Features Grid - Enhanced for Mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-10 md:mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/50 group-hover:shadow-2xl group-hover:bg-white/90 transition-all duration-500">
                      
                      {/* Card Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                           <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <div className={`h-1 w-12 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                        </div>
                      </div>

                      {/* Highlights - Mobile Optimized */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {feature.highlights.map((highlight, idx) => (
                          <motion.span
                            key={idx}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {highlight}
                          </motion.span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Conclusion Section - Enhanced for Mobile */}
              <motion.div
                className="border-t border-gray-200 pt-8 md:pt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  
                  <div className="text-center mb-8 md:mb-10">
                    <p className="hidden md:block text-gray-700 text-base md:text-lg leading-relaxed font-light mb-6 md:mb-8 px-2">
                      Safety Expertise stands as your trusted partner in creating safer, more compliant, 
                      and more efficient industrial environments. Our comprehensive approach combines 
                      technical excellence with practical understanding.
                    </p>

                    <div className="mb-6 md:mb-8">
                      <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">
                        We are proud to be the Official Distributor of:
                      </h4>
                    </div>

                    {/* Enhanced Logo Showcase - Mobile First */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-6 md:mb-8">
                      {distributors.map((distributor, index) => (
                        <motion.div
                          key={index}
                          className="group w-full sm:w-auto"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: distributor.delay }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8, scale: 1.02 }}
                        >
                          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${distributor.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            
                            <div className="relative z-10">
                              {/* Official Distributor Badge */}
                              <div className="text-center mb-4">
                                <span className={`inline-block text-${distributor.color} font-bold text-xs md:text-sm tracking-wide mb-2 px-3 py-1 bg-${distributor.color}/10 rounded-full`}>
                                  OFFICIAL DISTRIBUTOR
                                </span>
                                <div className={`h-0.5 w-8 bg-${distributor.color} mx-auto mb-4 rounded-full`}></div>
                              </div>
                              
                              {/* Logo Container */}
                              <div className="relative overflow-hidden rounded-xl mb-4">
                                <div className="bg-gray-50 p-4 rounded-xl">
                                  <img
                                    src={distributor.logo}
                                    alt={`${distributor.name} Logo`}
                                    className="w-32 h-20 md:w-40 md:h-24 object-contain mx-auto transform group-hover:scale-110 transition-transform duration-500"
                                  />
                                </div>
                              </div>
                              
                              {/* Info */}
                              <div className="text-center">
                                <p className="text-gray-800 text-sm md:text-base font-semibold mb-1">
                                  {distributor.title}
                                </p>
                                <p className="text-gray-500 text-xs md:text-sm">
                                  {distributor.subtitle}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light px-2">
                      in Mauritania, bringing you world-class fire suppression technologies 
                      and heavy-duty equipment solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
             className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-2xl text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-sm md:text-base transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Your Safety Assessment</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 md:h-5 md:w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              whileHover={{ x: 5 }}
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;