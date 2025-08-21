import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import { compliance } from "../data";
import {
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaMedal,
  FaClipboardCheck,
  FaPhone,
  FaCheckCircle,
  FaAward,
  FaCertificate,
  FaStar,
  FaArrowRight,
  FaIndustry,
  FaTools,
  FaFire,
  FaWrench,
  FaBolt,
  FaExclamationTriangle,
  FaCogs,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaHardHat,
  FaEye,
  FaCog,
} from "react-icons/fa";
import CTA from "../components/CTA";
import TrustBanner from "../components/TrustBanner";

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("fire-protection");

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const whyUsFeatures = [
    {
      icon: FaShieldAlt,
      title: "Fire Protection Specialists",
      description: "NFPA & OSHA certified experts",
    },
    {
      icon: FaUsers,
      title: "AFEX – ICAT Specialists",
      description: "Deep knowledge in mining equipment systems",
    },
    {
      icon: FaGlobe,
      title: "24/7 Emergency Support",
      description: "Always ready to respond",
    },
    {
      icon: FaChartLine,
      title: "Proven Track Record",
      description: "100+ projects, 97% client satisfaction",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our operations and relationships.",
    },
    {
      title: "Excellence",
      description:
        "Committed to quality in every service we provide and every solution we deliver.",
    },
    {
      title: "Innovation",
      description:
        "Continuously improving our methods with the latest safety technologies.",
    },
    {
      title: "Accountability",
      description:
        "Taking responsibility for our actions and delivering on our promises.",
    },
  ];

  const certificates = [
    {
      name: "NFPA",
      image: "/images/compliance/nfpa.png"
    },
    {
      name: "ISO",
      image: "/images/compliance/iso.png"
    },
    {
      name: "OSHA",
      image: "/images/compliance/osha.webp"
    },
    {
      name: "FM",
      image: "/images/compliance/fm.png"
    },
    {
      name: "FPAA",
      image: "/images/compliance/fpaaustralia.png"
    },
    {
      name: "Certified",
      image: "/images/compliance/certified.webp"
    }
  ];

  const fireProtectionServices = [
    {
      icon: FaFire,
      title: "Fire Detection & Alarm Systems",
      description: "Professional installation and maintenance of advanced fire detection and alarm systems for industrial facilities.",
      image: "/images/afex/1.png",
      features: ["Advanced Detection Technology", "24/7 Monitoring", "Compliance Certified"]
    },
    {
      icon: FaExclamationTriangle,
      title: "Automatic Fire Suppression Systems",
      description: "State-of-the-art automatic fire suppression systems including sprinklers, foam systems, and gas suppression.",
      image: "/images/afex/2.jpg",
      features: ["Multiple Suppression Methods", "Automatic Activation", "Rapid Response"]
    },
    {
      icon: FaShieldAlt,
      title: "Fire Extinguisher Supply & Maintenance",
      description: "Supply, installation, and regular maintenance of fire extinguishers and emergency response equipment.",
      image: "/images/13.png",
      features: ["Regular Inspections", "Proper Placement", "Training Included"]
    },
    {
      icon: FaBolt,
      title: "Emergency Lighting & Exit Signs",
      description: "Installation and maintenance of emergency lighting systems and exit signage for safety compliance.",
      image: "/images/12.png",
      features: ["Battery Backup", "Clear Visibility", "Code Compliant"]
    },
    {
      icon: FaHardHat,
      title: "Fire Safety Training",
      description: "Comprehensive fire safety training and certification programs for industrial personnel.",
      image: "/images/afex/7.jpg",
      features: ["Certified Instructors", "Hands-on Training", "Regular Updates"]
    },
    {
      icon: FaCheckCircle,
      title: "Inspection & Compliance Testing",
      description: "Regular inspection, testing, and compliance verification for all fire protection systems.",
      image: "/images/afex/6.jpg",
      features: ["Comprehensive Testing", "Documentation", "Regulatory Compliance"]
    }
  ];

  const industrialMaintenanceServices = [
    {
      icon: FaIndustry,
      title: "Mobile Equipment Maintenance & Repair",
      description: "AFEX & ICAT certified maintenance and repair services for mobile mining equipment, ensuring optimal performance and safety.",
      image: "/images/afex/1.png",
      features: ["AFEX & ICAT Certified", "Preventive Maintenance", "Emergency Repairs"]
    },
    {
      icon: FaCogs,
      title: "Preventive & Corrective Maintenance Programs",
      description: "Scheduled preventive maintenance and rapid response corrective repairs for industrial machinery and mobile equipment.",
      image: "/images/14.png",
      features: ["Scheduled Maintenance", "Predictive Analytics", "Cost Reduction"]
    },
    {
      icon: FaTools,
      title: "Engineering Optimization for Heavy-Duty Machinery",
      description: "Performance enhancement and optimization services for industrial equipment and mobile mining machinery.",
      image: "/images/17.png",
      features: ["Performance Enhancement", "Efficiency Improvement", "ROI Optimization"]
    }
  ];

  const complianceStats = [
    { value: "100%", label: "Compliance Rate", icon: FaCheckCircle },
    { value: "7+", label: "Active Certifications", icon: FaCertificate },
    { value: "24/7", label: "Audit Ready", icon: FaClock },
    { value: "15+", label: "Years Certified", icon: FaAward },
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
        <title>
          Safety Expertise - Professional Safety Solutions in Mauritania
        </title>
        <meta
          name="description"
          content="Safety Expertise provides comprehensive safety solutions including fire protection, building maintenance, and compliance services across Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Trust Banner Section */}
        <section id="trust-banner">
          <TrustBanner />
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="relative py-24 bg-gradient-to-b from-[#f8f8f8] via-white to-white overflow-hidden">
  {/* Decorative background shape */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-20 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 -left-32 w-[300px] h-[300px] bg-[#ff3131]/5 rounded-full blur-2xl"></div>
  </div>

  <div className="container relative z-10 mx-auto px-4 max-w-7xl">
    {/* Competitive Edge Section */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden flex justify-center">
  {/* Background Elements */}
  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16 lg:mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="flex items-center justify-center gap-4 mb-6"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="block h-0.5 w-12 lg:w-20 bg-red-600"></span>
        <span className="text-sm font-semibold tracking-wider text-red-600 uppercase px-2">
          Our Competitive Edge
        </span>
        <span className="block h-0.5 w-12 lg:w-20 bg-red-600"></span>
      </motion.div>

      <motion.h2 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Why <span className="text-primary">SafetyExpertise</span> Excels
      </motion.h2>

      <motion.p 
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Industry-leading expertise combined with innovative technology for uncompromised safety, efficiency, and long-term asset protection.
      </motion.p>
    </motion.div>

    {/* Feature Timeline */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden sm:block absolute top-8 left-8 right-8 h-0.5 bg-gray-300"></div>
        
        <ol className="items-center sm:flex relative z-10">
          {whyUsFeatures.map((feature, index) => (
            <motion.li 
              key={index}
              className="relative mb-6 sm:mb-0 flex-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icon Circle */}
              <div className="z-20 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full ring-4 ring-white shadow-lg mx-auto group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-gray-700" />
              </div>
              
              {/* Content */}
              <div className="mt-6 sm:pe-8 text-center sm:text-left">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 leading-tight mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 max-w-sm mx-auto sm:mx-0">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <motion.button 
                  className="inline-flex items-center text-primary font-medium text-sm lg:text-base group-hover:text-primary/80 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>

    {/* Enhanced Description */}
    <motion.div 
      className="mt-20 lg:mt-24 text-center max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">
          Comprehensive Safety Solutions for Modern Industry
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left">
          <div>
            <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
              Industry Expertise
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              With over 15 years of experience in industrial safety, we've developed deep expertise across multiple sectors including mining, manufacturing, and energy. Our team of certified professionals brings international standards to every project, ensuring compliance with NFPA, OSHA, and ISO requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand the unique challenges of industrial environments and provide tailored solutions that not only meet regulatory requirements but also enhance operational efficiency and protect your most valuable assets.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
              Innovation & Technology
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our commitment to innovation drives us to continuously integrate cutting-edge safety technologies and methodologies. From advanced fire detection systems to predictive maintenance solutions, we leverage the latest developments to provide superior protection.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We invest in ongoing research and development, ensuring our clients benefit from the most effective and efficient safety solutions available in the market today.
            </p>
          </div>
        </div>
        
        <div className="mt-8 lg:mt-12 pt-8 lg:pt-12 border-t border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>Safety Expertise</strong> stands as your trusted partner in creating safer, more compliant, and more efficient industrial environments. Our comprehensive approach combines technical excellence with practical understanding, delivering solutions that work seamlessly within your operations while providing the highest level of protection for your people, assets, and reputation.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

    {/* Certificates Section */}
    <motion.div
      className="mt-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Certifications & Compliance</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Internationally recognized standards and certifications ensuring top-tier safety and operational excellence.
        </p>
      </div>

      {/* Auto-scrolling certificates */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.div
          className="flex space-x-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {certificates.concat(certificates).map((cert, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 w-48 h-32 flex items-center justify-center transition-all duration-300">
                <img
                  src={cert.image}
                  alt={`${cert.name} Certification`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="text-center mt-6 text-sm text-gray-500">Hover over a logo to pause scrolling</p>
    </motion.div>

    {/* CTA */}
    <div className="mt-20 text-center">
      <button
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="inline-flex items-center px-8 py-4 rounded-lg text-white bg-primary hover:bg-[#134271] transition-colors shadow-lg hover:shadow-xl font-medium"
      >
        Get Your Safety Assessment
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</section>


   {/* Values Section */}
<section className="py-16 lg:py-24 bg-white relative overflow-hidden">
  {/* Enhanced Background Pattern */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `radial-gradient(circle at 10% 20%, #18558c30 0%, transparent 25%), 
                         radial-gradient(circle at 90% 80%, #ff313130 0%, transparent 25%)`,
        backgroundSize: '50% 50%, 50% 50%',
        backgroundPosition: 'top left, bottom right',
        backgroundRepeat: 'no-repeat'
      }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <motion.div 
      className="text-center mb-16 lg:mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex items-center justify-center mb-4 lg:mb-5">
        <motion.span 
          className="h-0.5 w-8 lg:w-12 bg-red-600 mr-2 lg:mr-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.span>
        <span className="text-xs lg:text-sm font-semibold tracking-wider text-red-600 uppercase">
          Our Philosophy
        </span>
        <motion.span 
          className="h-0.5 w-8 lg:w-12 bg-red-600 ml-2 lg:ml-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.span>
      </div>

      <motion.h2 
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Built on <span className="text-red-600">Integrity</span>,<br className="sm:hidden" /> Driven by Safety
      </motion.h2>

      <motion.p 
        className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Our core values define every solution we deliver and every relationship we build in protecting what matters most.
      </motion.p>
    </motion.div>

    {/* Values Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
      {values.map((value, index) => (
        <motion.div
          key={index}
          className="group relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
        >
          {/* Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
            {/* Background Accent */}
            <div className={`absolute top-0 left-0 w-full h-1 ${
              index % 4 === 0 ? 'bg-red-600' :
              index % 4 === 1 ? 'bg-blue-600' :
              index % 4 === 2 ? 'bg-red-600' :
              'bg-blue-600'
            }`}></div>

            {/* Icon Container */}
            <motion.div 
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
                index % 4 === 0 ? 'bg-red-50' :
                index % 4 === 1 ? 'bg-blue-50' :
                index % 4 === 2 ? 'bg-red-50' :
                'bg-blue-50'
              }`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`text-xl sm:text-2xl ${
                index % 4 === 0 ? 'text-red-600' :
                index % 4 === 1 ? 'text-blue-600' :
                index % 4 === 2 ? 'text-red-600' :
                'text-blue-600'
              }`}>
                {index === 0 && <FaHandshake />}
                {index === 1 && <FaMedal />}
                {index === 2 && <FaLightbulb />}
                {index === 3 && <FaClipboardCheck />}
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                {value.title}
              </motion.h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {value.description}
              </p>
            </div>

            {/* Learn More Link */}
            <motion.div 
              className={`inline-flex items-center text-xs sm:text-sm font-medium mt-auto ${
                index % 4 === 0 ? 'text-red-600' :
                index % 4 === 1 ? 'text-blue-600' :
                index % 4 === 2 ? 'text-red-600' :
                'text-blue-600'
              } group-hover:translate-x-1 transition-transform duration-300`}
            >
              <span>Learn more</span>
              <FaArrowRight className="ml-1 sm:ml-2 w-2 h-2 sm:w-3 sm:h-3" />
            </motion.div>

            {/* Floating Number */}
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-xl font-bold text-white ${
              index % 4 === 0 ? 'bg-red-600' :
              index % 4 === 1 ? 'bg-blue-600' :
              index % 4 === 2 ? 'bg-red-600' :
              'bg-blue-600'
            } opacity-10`}>
              {index + 1}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA */}
    <motion.div 
      className="text-center mt-12 sm:mt-16 px-4 sm:px-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="inline-flex flex-col sm:flex-row items-center bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-md sm:max-w-xl">
        <div className="flex -space-x-3 mb-4 sm:mb-0 sm:mr-6">
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-red-600 border-2 sm:border-4 border-white shadow-md"></div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-600 border-2 sm:border-4 border-white shadow-md"></div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-red-600 border-2 sm:border-4 border-white shadow-md"></div>
        </div>
        <div className="text-center sm:text-left">
          <div className="font-bold text-gray-900 text-sm sm:text-base">Industry Certified Team</div>
          <div className="text-xs sm:text-sm text-gray-600">NFPA & ISO compliant professionals</div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

     
        <section id="projects" className="py-24 relative overflow-hidden">
          {/* Parallax Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            style={{
              backgroundImage: `url('/images/background2.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-black/80"></div>
            {/* Subtle architectural pattern overlay */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
                backgroundSize: '100px 100px'
              }}
            ></div>
          </motion.div>

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
                <span className="text-sm font-semibold tracking-wider text-red-600 uppercase">
                  Our Portfolio
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
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Successful <span className="text-primary">Safety Implementations</span>
              </motion.h2>

              <motion.p 
                className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover our portfolio of successful safety implementations across various industries and sectors.
              </motion.p>
            </motion.div>

            {/* Case Study Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  image: "/images/safety1.png",
                  category: "Fire Protection",
                  title: "AFEX Mobile Mining Equipment Maintenance",
                  accent: false
                },
                {
                  image: "/images/16.png",
                  category: "Safety Systems",
                  title: "ICAT Mining Equipment Safety Systems",
                  accent: false
                },
                {
                  image: "/images/17.png",
                  category: "Industrial Safety",
                  title: "Industrial Plant Fire Protection",
                  accent: true
                },
                {
                  image: "/images/18.png",
                  category: "Preventive Maintenance",
                  title: "Mining Equipment Preventive Maintenance",
                  accent: false
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.03 }}
                >
                  {/* Card Image - Larger and more prominent */}
                  <div className="relative h-96 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.8 }}
                    />
                    {/* Image Overlay */}
                    <div className={`absolute inset-0 ${
                      project.accent 
                        ? 'bg-gradient-to-t from-accent/70 via-accent/30 to-transparent' 
                        : 'bg-gradient-to-t from-black/50 to-transparent'
                    }`}></div>
                  </div>

                  {/* Text Content Overlay - Compact */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${
                        project.accent ? 'text-accent' : 'text-primary'
                      }`}>
                        {project.category}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                      
                      {/* Plus Icon */}
                      <motion.div 
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          project.accent ? 'bg-accent' : 'bg-primary'
                        } ml-auto`}
                        whileHover={{ rotate: 90, scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      >
                        <svg 
                          className="w-4 h-4 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-[#134271] transition-colors shadow-md hover:shadow-lg"
              >
                Explore All Projects
                <FaArrowRight className="ml-3 w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
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
                <span className="text-sm font-semibold tracking-wider text-red-600 uppercase">
                  Our Services
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grouped & <span className="text-primary">Streamlined</span> Solutions
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive services organized for maximum efficiency and clarity, ensuring you get exactly what you need for your safety and maintenance requirements.
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
                onClick={() => setActiveTab("fire-protection")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "fire-protection"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-primary/30"
                }`}
              >
                <FaFire className="w-5 h-5" />
                <span>Fire Protection Solutions</span>
              </button>

              <button
                onClick={() => setActiveTab("industrial-maintenance")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "industrial-maintenance"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-primary/30"
                }`}
              >
                <FaIndustry className="w-5 h-5" />
                <span>Industrial Maintenance & Engineering</span>
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
                {(activeTab === "fire-protection" ? fireProtectionServices : industrialMaintenanceServices).map((service, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {service.title}
                        </h4>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
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
            </motion.div>
          </div>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="py-24 bg-white relative overflow-hidden">
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
                <span className="text-sm font-semibold tracking-wider text-red-600 uppercase">
                  Compliance & Certifications
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meeting the Highest <span className="text-primary">Safety Standards</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive certifications and compliance with international standards ensure your operations meet the highest safety requirements.
              </p>
            </motion.div>

            {/* Compliance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
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

            {/* Compliance Standards */}
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

        {/* CTA Section */}
        <section id="contact">
          <CTA 
            title="Ready to Enhance Your Safety?"
            subtitle="Contact us today for a comprehensive safety assessment of your facility."
            primaryButton={{ text: "Request a Quote", href: "/contact" }}
            secondaryButton={{ text: "Contact Us", href: "/contact" }}
          />
        </section> 
      </main>
    </>
  );
};

export default Home;

