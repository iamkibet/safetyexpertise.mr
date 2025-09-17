import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaGlobe, FaTools, FaPlay, FaStar, FaAward, FaUsers } from "react-icons/fa";

const AboutSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt className="w-6 h-6" />,
      number: "01",
      title: "TRUST",
      description: "A proven partner in fire safety and industrial maintenance",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <FaGlobe className="w-6 h-6" />,
      number: "02", 
      title: "CERTIFIED",
      description: "Official AFEX representative in Mauritania",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      icon: <FaTools className="w-6 h-6" />,
      number: "03",
      title: "EXPERTISE", 
      description: "Experienced expat and local teams with global standards knowledge",
      color: "from-purple-500 to-purple-600"
    }
  ];

 

  return (
    <section className="relative pt-6 md:py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-6 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtitle with animated underline */}
          <div className="inline-flex items-center justify-center mb-6">
            <motion.div
              className="h-px w-16 bg-gradient-to-r from-transparent to-red-500 mr-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            <span className="text-sm md:text-base font-semibold tracking-widest text-red-600 uppercase relative">
              About Us
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-px bg-red-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>
            </span>
            <motion.div
              className="h-px w-16 bg-gradient-to-l from-transparent to-red-500 ml-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
          </div>

          {/* Main Heading - Consistent Style */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Who are <span className="text-primary">We</span>?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Your trusted partner for industrial engineering and maintenance solutions
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          
          {/* Content Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              
              {/* Description Text */}
              <div className="space-y-6 mb-10">
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Delivering robust and reliable support for mining and heavy industry across Mauritania. 
                  Our commitment to excellence drives everything we do.
                </motion.p>
                
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  We provide end-to-end services including installation, commissioning, preventive and 
                  corrective maintenance, inspections, and emergency support with rapid response capabilities.
                </motion.p>
              </div>

              {/* Enhanced Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    {/* Gradient Icon */}
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-white border-2 border-gray-200 rounded-lg flex items-center justify-center shadow-md group-hover:border-red-300 transition-colors duration-300">
                        <span className="text-xs font-bold text-gray-700">{feature.number}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image Container */}
            <div className="relative group">
              {/* Floating background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/40">
                {/* Image Container */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                  <img
                    src="/images/afex/3.jpg"
                    alt="Industrial Safety Excellence"
                    className="w-full h-full object-cover transition-transform duration-700 group-"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20 mix-blend-overlay"></div>
                  
                  
                  
                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-6 left-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">ISO Certified</div>
                          <div className="text-white/80 text-xs">Safety Standards</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Enhanced Bottom Content */}
                <div className="p-6 md:p-8 bg-gradient-to-br from-white via-white to-gray-50">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Trusted Safety Partner
                      </span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Delivering world-class industrial safety solutions with unmatched expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;