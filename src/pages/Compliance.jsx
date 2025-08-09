import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { compliance } from "../data";
import { 
  FaShieldAlt, 
  FaChevronDown, 
  FaChevronUp, 
  FaCertificate, 
  FaCheckCircle,
  FaAward,
  FaMedal,
  FaStar,
  FaUsers,
  FaClock,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaFire,
  FaTools,
  FaCog,
  FaHardHat,
  FaPlay,
  FaQuoteLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaIndustry,
  FaBuilding,
} from "react-icons/fa";

const Compliance = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("international");

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const complianceStats = [
    { value: "100%", label: "Compliance Rate", icon: FaCheckCircle },
    { value: "7+", label: "Active Certifications", icon: FaCertificate },
    { value: "24/7", label: "Audit Ready", icon: FaClock },
    { value: "15+", label: "Years Certified", icon: FaAward },
  ];

  const internationalCertifications = [
    {
      name: "NFPA Certification",
      description: "National Fire Protection Association Standards - Comprehensive fire safety and protection standards",
      image: "/images/compliance/nfpa.png",
      status: "Active",
      category: "Fire Safety",
      validUntil: "2025",
      features: ["Fire Detection Systems", "Suppression Equipment", "Safety Training"]
    },
    {
      name: "OSHA Compliance",
      description: "Occupational Safety and Health Administration - Workplace safety and health standards",
      image: "/images/compliance/osha.webp",
      status: "Certified",
      category: "Workplace Safety",
      validUntil: "2025",
      features: ["Safety Protocols", "Training Programs", "Equipment Standards"]
    },
    {
      name: "ISO 45001",
      description: "Occupational Health and Safety Management - International safety management system",
      image: "/images/compliance/iso.png",
      status: "Certified",
      category: "Quality Management",
      validUntil: "2025",
      features: ["Risk Management", "Continuous Improvement", "Compliance Monitoring"]
    },
    {
      name: "FM Global",
      description: "Factory Mutual Global - Industrial and commercial property insurance standards",
      image: "/images/compliance/fm.png",
      status: "Approved",
      category: "Insurance Standards",
      validUntil: "2025",
      features: ["Property Protection", "Risk Assessment", "Loss Prevention"]
    }
  ];

  const localCertifications = [
    {
      name: "FPAA Australia",
      description: "Fire Protection Association Australia - Fire safety and protection standards",
      image: "/images/compliance/fpaaustralia.png",
      status: "Compliant",
      category: "Fire Safety",
      validUntil: "2025",
      features: ["Fire Safety Standards", "Training Programs", "Equipment Certification"]
    },
    {
      name: "ActivFire Certification",
      description: "Australian Fire Protection Industry Certification - Professional fire safety standards",
      image: "/images/compliance/activfire.png",
      status: "Certified",
      category: "Professional Standards",
      validUntil: "2025",
      features: ["Professional Standards", "Quality Assurance", "Industry Compliance"]
    },
    {
      name: "Certified Excellence",
      description: "General certification for quality and safety excellence in operations",
      image: "/images/compliance/certified.webp",
      status: "Certified",
      category: "Quality Management",
      validUntil: "2025",
      features: ["Quality Management", "Safety Standards", "Operational Excellence"]
    }
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of safety requirements and existing compliance status",
      icon: FaEye
    },
    {
      step: "02",
      title: "Implementation",
      description: "Professional installation and setup of safety systems according to compliance standards",
      icon: FaTools
    },
    {
      step: "03",
      title: "Ongoing Monitoring",
      description: "Regular inspections and maintenance to ensure continued compliance and safety",
      icon: FaCog
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance & Certifications - Safety Expertise</title>
        <meta
          name="description"
          content="Safety Expertise maintains full compliance with international safety standards including OSHA, ISO 45001, NFPA, and local Mauritanian regulations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <PageHero
          title="Compliance & Certifications"
          subtitle="We maintain the highest standards of safety compliance and hold all necessary certifications to serve our clients effectively."
          badge="CERTIFIED EXCELLENCE"
          features={["100% Compliance Rate", "7+ Active Certifications", "24/7 Audit Ready"]}
          backgroundImage="/images/background2.jpg"
        />

        {/* Mission Statement Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="h-0.5 w-12 bg-primary mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Our Commitment
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Delivering <span className="text-primary">Compliance</span> Excellence
              </h2>

              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                At Safety Expertise, we understand that compliance is not just about meeting regulatory requirements—it's about ensuring the 
                safety and well-being of everyone involved in our projects. We maintain rigorous standards that exceed both international 
                and local requirements.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {complianceStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meeting the Highest <span className="text-primary">Safety Standards</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive certifications and compliance with international standards ensure your operations meet the highest safety requirements.
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => setActiveTab("international")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "international"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-primary/30"
                }`}
              >
                <FaGlobe className="w-5 h-5" />
                <span>International Standards</span>
              </button>

              <button
                onClick={() => setActiveTab("local")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "local"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-primary/30"
                }`}
              >
                <FaBuilding className="w-5 h-5" />
                <span>Local & Regional</span>
              </button>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeTab === "international" ? internationalCertifications : localCertifications).map((cert, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Certification Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <motion.img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-contain p-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cert.status === "Active" || cert.status === "Certified" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <FaCertificate className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {cert.name}
                        </h4>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {cert.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <FaCheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                          {cert.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          Valid until: {cert.validUntil}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Compliance Standards</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We adhere to international safety standards while ensuring full compliance with local Mauritanian regulations.
              </p>
            </motion.div>

            <div className="space-y-6">
              {compliance.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <FaShieldAlt className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <motion.div 
                      className="ml-4"
                      animate={{ rotate: openAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openAccordion === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-200 pt-4">
                            <div className="bg-primary/5 rounded-xl p-6">
                              <h4 className="font-semibold text-gray-900 mb-3">
                                Certification Details
                              </h4>
                              <p className="text-gray-600 text-sm mb-4">
                                This certification ensures that our safety practices meet or exceed the established standards for
                                workplace safety and health management.
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-gray-600">
                                    Valid until: 2025
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-gray-600">
                                    Annual renewal
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-gray-600">
                                    Regular audits
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-gray-600">
                                    Continuous monitoring
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance Process */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quality <span className="text-primary">Assurance Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive quality assurance process ensures that every project meets the highest standards of safety and compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {qualityProcess.map((process, index) => (
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
                    <process.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  
                  <div className="text-2xl font-bold text-primary mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaQuoteLeft className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
              
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-relaxed">
                "We maintain rigorous standards that exceed both international and local requirements, 
                ensuring that our clients receive the highest quality safety solutions."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaCertificate className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">Safety Expertise Team</div>
                  <div className="text-sm text-gray-600">Certified Compliance Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Ensure Compliance?"
          subtitle="Let's discuss how our certified expertise can help your organization meet and exceed safety compliance requirements."
          primaryButton={{ text: "Contact Our Team", href: "/contact" }}
          secondaryButton={{ text: "Explore Services", href: "/services" }}
        />
      </main>
    </>
  );
};

export default Compliance;
