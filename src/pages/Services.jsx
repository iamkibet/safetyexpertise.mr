import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { services } from "../data";
import {
  FaShieldAlt,
  FaTools,
  FaCog,
  FaCheckCircle,
  FaArrowRight,
  FaFire,
  FaBuilding,
  FaWrench,
  FaThermometerHalf,
  FaWater,
  FaBolt,
  FaCog as FaGenerator,
  FaBug,
  FaHammer,
  FaTrash,
  FaIndustry,
  FaTruck,
  FaExclamationTriangle,
  FaCogs,
  FaHardHat,
  FaPlay,
  FaStar,
  FaUsers,
  FaClock,
  FaAward,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

const Services = () => {
  const [activeTab, setActiveTab] = useState("fire-protection");

  const fireProtectionServices = [
    {
      icon: FaFire,
      title: "Fire Detection & Alarm Systems",
      description:
        "Professional installation and maintenance of advanced fire detection and alarm systems for industrial facilities.",
      image: "/images/afex/1.png",
      features: ["Advanced Detection Technology", "24/7 Monitoring", "Compliance Certified"]
    },
    {
      icon: FaExclamationTriangle,
      title: "Automatic Fire Suppression",
      description:
        "State-of-the-art automatic fire suppression systems including sprinklers, foam systems, and gas suppression.",
      image: "/images/afex/2.jpg",
      features: ["Multiple Suppression Methods", "Automatic Activation", "Rapid Response"]
    },
    {
      icon: FaShieldAlt,
      title: "Fire Extinguisher Services",
      description:
        "Supply, installation, and regular maintenance of fire extinguishers and emergency response equipment.",
      image: "/images/13.png",
      features: ["Regular Inspections", "Proper Placement", "Training Included"]
    },
    {
      icon: FaBolt,
      title: "Emergency Lighting & Exit Signs",
      description:
        "Installation and maintenance of emergency lighting systems and exit signage for safety compliance.",
      image: "/images/12.png",
      features: ["Battery Backup", "Clear Visibility", "Code Compliant"]
    },
    {
      icon: FaHardHat,
      title: "Fire Safety Training",
      description:
        "Comprehensive fire safety training and certification programs for industrial personnel.",
      image: "/images/afex/7.jpg",
      features: ["Certified Instructors", "Hands-on Training", "Regular Updates"]
    },
    {
      icon: FaCheckCircle,
      title: "Inspection & Compliance Testing",
      description:
        "Regular inspection, testing, and compliance verification for all fire protection systems.",
      image: "/images/afex/6.jpg",
      features: ["Comprehensive Testing", "Documentation", "Regulatory Compliance"]
    },
  ];

  const industrialMaintenanceServices = [
    {
      icon: FaIndustry,
      title: "AFEX Mobile Mining Equipment",
      description:
        "Specialized maintenance and repair services for AFEX mobile mining equipment, ensuring optimal performance and safety.",
      image: "/images/afex/1.png",
      features: ["Specialized Expertise", "Preventive Maintenance", "Emergency Repairs"]
    },
    {
      icon: FaTruck,
      title: "ICAT Mining Equipment Maintenance",
      description:
        "Comprehensive maintenance programs for ICAT mobile mining equipment fleet with 24/7 emergency support.",
      image: "/images/15.png",
      features: ["Fleet Management", "24/7 Support", "Performance Optimization"]
    },
    {
      icon: FaCogs,
      title: "Preventive Maintenance Programs",
      description:
        "Scheduled preventive maintenance for industrial machinery and mobile equipment to prevent breakdowns.",
      image: "/images/14.png",
      features: ["Scheduled Maintenance", "Predictive Analytics", "Cost Reduction"]
    },
    {
      icon: FaWrench,
      title: "Corrective Repairs & Emergency Service",
      description:
        "Rapid response corrective repairs and emergency maintenance services for critical equipment failures.",
      image: "/images/16.png",
      features: ["Rapid Response", "Emergency Service", "Minimal Downtime"]
    },
    {
      icon: FaTools,
      title: "Equipment Optimization",
      description:
        "Performance enhancement and optimization services for industrial equipment and mobile mining machinery.",
      image: "/images/17.png",
      features: ["Performance Enhancement", "Efficiency Improvement", "ROI Optimization"]
    },
    {
      icon: FaShieldAlt,
      title: "Safety Compliance",
      description:
        "Safety compliance monitoring and certification for mobile mining equipment and industrial machinery.",
      image: "/images/18.png",
      features: ["Safety Standards", "Compliance Monitoring", "Certification"]
    },
  ];



  return (
    <>
      <Helmet>
        <title>Our Services - Safety Expertise</title>
        <meta
          name="description"
          content="Professional fire protection services and industrial maintenance including AFEX - ICAT mobile mining equipment maintenance across Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <PageHero
          title="Our Services"
          subtitle="Professional Fire Protection & Industrial Maintenance Services"
          badge="PROFESSIONAL SERVICES"
          features={[
            "500+ Projects Completed",
            "97% Client Satisfaction",
            "24/7 Emergency Support",
            "15+ Years Experience"
          ]}
          backgroundImage="/images/background2.jpg"
        />

        {/* Main Services Overview */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="h-0.5 w-12 bg-primary mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Our Expertise
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="text-primary">Safety Solutions</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We specialize in two main service areas: comprehensive fire protection solutions 
                and professional industrial maintenance, with particular expertise in AFEX - ICAT mobile mining equipment.
              </p>
            </motion.div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => {
                // Define icons for each service
                const serviceIcons = {
                  "fire-protection": FaFire,
                  "industrial-maintenance": FaIndustry
                };
                const ServiceIcon = serviceIcons[service.slug] || FaShieldAlt;
                
                return (
                  <motion.div
                    key={service.slug}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <ServiceIcon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        {service.descriptionPoints?.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <FaCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300"
                      >
                        Learn More
                        <FaArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Categories Tabs */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Specialized <span className="text-primary">Service Categories</span>
              </h2>

              {/* Tab Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => setActiveTab("fire-protection")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "fire-protection"
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FaFire className="w-5 h-5" />
                    <span>Fire Protection</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab("industrial-maintenance")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "industrial-maintenance"
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FaIndustry className="w-5 h-5" />
                    <span>Industrial Maintenance</span>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "fire-protection" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {fireProtectionServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Service Image */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        
                        {/* Icon */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <FaCheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "industrial-maintenance" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {industrialMaintenanceServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Service Image */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        
                        {/* Icon */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <FaCheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="h-0.5 w-12 bg-primary mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Why Choose Us
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-primary">Safety Expertise?</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine decades of experience with cutting-edge technology to deliver exceptional 
                fire protection and industrial maintenance services.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Certified Expertise",
                  description: "Certified professionals with specialized training in fire protection and mobile equipment maintenance."
                },
                {
                  icon: FaIndustry,
                  title: "AFEX - ICAT Specialists",
                  description: "Specialized expertise in AFEX - ICAT mobile mining equipment maintenance and repair."
                },
                {
                  icon: FaClock,
                  title: "24/7 Emergency Support",
                  description: "Round-the-clock emergency maintenance and fire protection support for critical operations."
                },
                {
                  icon: FaAward,
                  title: "Compliance Guaranteed",
                  description: "Full compliance with international fire protection standards and mobile equipment safety regulations."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Protect Your Operations?"
          subtitle="Get professional fire protection and industrial maintenance services"
          primaryButton={{ text: "Get Free Consultation", href: "/contact" }}
          secondaryButton={{ text: "Contact Us", href: "/contact" }}
        />
      </main>
    </>
  );
};

export default Services;
