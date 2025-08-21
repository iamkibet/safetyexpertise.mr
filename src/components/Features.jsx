import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaTools, FaUsers, FaTruck, FaCog, FaFire, FaIndustry, FaWrench, FaCertificate, FaMedal } from "react-icons/fa";

const Features = () => {
  const serviceGroups = [
    {
      title: "Fire Protection Solutions",
      icon: FaFire,
      services: [
        "Fire detection & alarm systems",
        "Automatic fire suppression systems",
        "Fire extinguisher supply & maintenance",
        "Emergency lighting & exit signs",
        "Fire safety training",
        "Inspection & compliance testing"
      ]
    },
    {
      title: "Industrial Maintenance & Engineering",
      icon: FaIndustry,
      services: [
        "Mobile equipment maintenance & repair (AFEX & ICAT certified)",
        "Preventive & corrective maintenance programs",
        "Engineering optimization for heavy-duty machinery"
      ]
    },
    {
      title: "Manpower & Support Services",
      icon: FaUsers,
      services: [
        "Certified fire safety technicians",
        "Mobile equipment specialists",
        "Safety compliance experts"
      ]
    },
    {
      title: "Procurement & Transport Solutions",
      icon: FaTruck,
      services: [
        "Industrial fire safety equipment & PPE",
        "Spare parts for mobile equipment",
        "Heavy equipment transport & relocation"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #18558c20, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #ff313120, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
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
            <span className="text-sm font-semibold tracking-wider text-primary uppercase">
              Our Services
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
            Grouped & <span className="text-primary">Streamlined</span> Solutions
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive services organized for maximum efficiency and clarity, ensuring you get exactly what you need for your safety and maintenance requirements.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceGroups.map((group, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Background Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 ${
                  isEven ? 'bg-primary' : 'bg-accent'
                }`}></div>

                {/* Icon Container */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    isEven ? 'bg-primary/10' : 'bg-accent/10'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <group.icon className={`w-8 h-8 ${
                    isEven ? 'text-primary' : 'text-accent'
                  }`} />
                </motion.div>

                {/* Content */}
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {group.title}
                  </motion.h3>

                  {/* Service Points */}
                  <div className="space-y-3 mb-6">
                    {group.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          isEven ? 'bg-primary' : 'bg-accent'
                        }`}></div>
                        <span className="text-sm text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div 
                    className={`inline-flex items-center text-sm font-medium ${
                      isEven ? 'text-primary' : 'text-accent'
                    } group-hover:translate-x-2 transition-transform duration-300`}
                  >
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>

                {/* Floating Number */}
                <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
                  isEven ? 'bg-primary' : 'bg-accent'
                } opacity-20`}>
                  {index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center bg-gray-50 rounded-2xl p-6">
            <div className="flex -space-x-3 mr-6">
              <div className="w-12 h-12 rounded-full bg-primary border-4 border-white shadow-lg"></div>
              <div className="w-12 h-12 rounded-full bg-accent border-4 border-white shadow-lg"></div>
              <div className="w-12 h-12 rounded-full bg-primary border-4 border-white shadow-lg"></div>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">Professional Service Team</div>
              <div className="text-sm text-gray-600">AFEX certified experts at your service</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
