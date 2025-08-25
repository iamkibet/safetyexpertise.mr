import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import { compliance, services } from "../data";
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
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaTruck,
  FaRoute,
} from "react-icons/fa";
import CTA from "../components/CTA";
import TrustBanner from "../components/TrustBanner";

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };



  const testimonials = [
    {
      name: "KIM MICHELLE",
      text: "Personable, Knowledgeable, Professional and up to the minute response. Nothing bad to say about the service and tech support of Safety Expertise."
    },
    {
      name: "ARTHUR BOUVIER",
      text: "I had a service company out to service our equipment, and there were issues. The other service company wouldn't own or even discuss the problem. I called Safety Expertise, who talked me through diagnosis and correction of the issue. Professional and reliable service."
    },
    {
      name: "MOHAMED ALI",
      text: "Safety Expertise has been our trusted partner for fire safety and maintenance services. Their team is highly professional, responsive, and always delivers quality work. Highly recommended for any industrial safety needs."
    },
    {
      name: "FATIMA HASSAN",
      text: "Outstanding service and support from Safety Expertise. Their maintenance team is skilled, punctual, and always ensures our equipment meets safety standards. They've become an essential part of our operations."
    }
  ];



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
      icon: FaClipboardCheck
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
      icon: FaClock
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
        <section id="why-us" className="relative py-16 bg-gradient-to-b from-[#f8f8f8] via-white to-white overflow-hidden">
          {/* Decorative background shape */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -left-32 w-[300px] h-[300px] bg-[#ff3131]/5 rounded-full blur-2xl"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 max-w-7xl">
            {/* Competitive Edge Section */}
            <section className="py-5 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden flex justify-center">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Section Header */}
                <motion.div
                  className="text-center "
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

                {/* Enhanced Description */}
                <motion.div
                  className="mt-10 lg:mt-16 text-center max-w-5xl mx-auto"
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

                    <div className="mt-6 lg:mt-8 pt-8 lg:pt-12 border-t border-gray-200">

                      <motion.div
                        className=" p-6 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >

                        <p className="text-gray-700 text-lg leading-relaxed font-light text-center mb-6">
                          Safety Expertise stands as your trusted partner in creating safer, more compliant, and more efficient industrial environments. Our comprehensive approach combines technical excellence with practical understanding, delivering solutions that work seamlessly within your operations while providing the highest level of protection for your people, assets, and reputation. We are proud to be the{" "}
                          <span className="inline-flex items-center bg-red-50 border border-red-200 rounded-full px-3 py-1 mx-1">
                            <span className="text-red-600 font-semibold text-sm">Official Distributor of</span>
                            <span className="text-red-500 font-bold text-base ml-1">AFEX</span>
                          </span>
                          {" "}and{" "}
                          <span className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-3 py-1 mx-1">
                            <span className="text-green-600 font-semibold text-sm">Official Distributor of</span>
                            <span className="text-green-500 font-bold text-base ml-1">ICAT</span>
                          </span>
                          {" "}in Mauritania, bringing you world-class fire suppression technologies and heavy-duty equipment solutions.
                        </p>

                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>



            {/* CTA */}
            <div className="mt-5 text-center">
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






        {/* Services Section */}
        <section id="services" className="py- sm:py-10 lg:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden min-h-screen">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-500/5 to-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-primary/3 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-4 lg:mb-20"
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

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Comprehensive <span className="text-primary">Safety Solutions</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Professional fire safety, maintenance engineering, and industrial expertise delivered with precision and reliability
              </p>
            </motion.div>

            {/* Services Showcase */}
            <div className="relative">
              {/* Mobile Services Layout */}
              <div className="block md:hidden">
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.slug}
                      className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Service Header with Background */}
                      <div 
                        className="relative h-[230px] bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${(() => {
                            switch (service.slug) {
                              case "mobile-equipment-maintenance":
                                return "/images/services/1.jpg";
                              case "maintenance-engineering":
                                return "/images/services/2.png";
                              case "manpower-expertise":
                                return "/images/services/3.png";
                              case "industrial-procurement":
                                return "/images/services/4.png";
                              case "transport-mobility":
                                return "/images/services/5.png";
                              default:
                                return "/images/background2.jpg";
                            }
                          })()}')`
                        }}
                      >
                                                {/* Gradient Overlay */}
                        <div className={`absolute inset-0 ${service.slug === "mobile-equipment-maintenance" ? "bg-gradient-to-r from-red-600/50 to-red-500/30" :
                          service.slug === "maintenance-engineering" ? "bg-gradient-to-r from-blue-600/50 to-blue-500/30" :
                            service.slug === "manpower-expertise" ? "bg-gradient-to-r from-green-600/50 to-green-500/30" :
                              service.slug === "industrial-procurement" ? "bg-gradient-to-r from-purple-600/50 to-purple-500/30" :
                                "bg-gradient-to-r from-gray-600/50 to-gray-500/30"
                          }`}></div>
                        
                        {/* Service Number Badge */}
                        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-primary font-bold text-lg">{index + 1}</span>
                        </div>

                        {/* Service Icon */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-2xl">
                            {(() => {
                              switch (service.slug) {
                                case "mobile-equipment-maintenance":
                                  return "🔥";
                                case "maintenance-engineering":
                                  return "⚙️";
                                case "manpower-expertise":
                                  return "👨‍🔧";
                                case "industrial-procurement":
                                  return "📦";
                                case "transport-mobility":
                                  return "🚛";
                                default:
                                  return "🔧";
                              }
                            })()}
                          </span>
                        </div>

                        {/* Service Title */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-6">
                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Key Features - Horizontal Scroll on Mobile */}
                        <div className="flex space-x-3 overflow-x-auto pb-2 -mx-6 px-6">
                          {(() => {
                            const keyFeatures = (() => {
                              switch (service.slug) {
                                case "mobile-equipment-maintenance":
                                  return [
                                    { icon: "🔥", title: "AFEX Systems", desc: "Official representative" },
                                    { icon: "⚡", title: "24/7 Support", desc: "Emergency response" },
                                    { icon: "🛡️", title: "Safety Compliance", desc: "Full certification" }
                                  ];
                                case "maintenance-engineering":
                                  return [
                                    { icon: "⚙️", title: "Performance", desc: "Equipment optimization" },
                                    { icon: "📋", title: "Planning", desc: "Maintenance scheduling" },
                                    { icon: "🔧", title: "Expert Repairs", desc: "Preventive maintenance" }
                                  ];
                                case "manpower-expertise":
                                  return [
                                    { icon: "👨‍🔧", title: "Certified Teams", desc: "Technical specialists" },
                                    { icon: "🎓", title: "Training", desc: "Certification programs" },
                                    { icon: "🚨", title: "Emergency Response", desc: "24/7 support" }
                                  ];
                                case "industrial-procurement":
                                  return [
                                    { icon: "📦", title: "Global Supply", desc: "Worldwide network" },
                                    { icon: "✅", title: "Quality Assured", desc: "Testing & verification" },
                                    { icon: "📊", title: "Inventory Management", desc: "Supply chain solutions" }
                                  ];
                                case "transport-mobility":
                                  return [
                                    { icon: "🚛", title: "Heavy Transport", desc: "Safe transportation" },
                                    { icon: "🗺️", title: "Route Planning", desc: "Logistics optimization" },
                                    { icon: "⏰", title: "24/7 Availability", desc: "Round-the-clock service" }
                                  ];
                                default:
                                  return [
                                    { icon: "🔧", title: "Professional", desc: "Expert delivery" },
                                    { icon: "⚡", title: "Efficient", desc: "Fast solutions" },
                                    { icon: "🛡️", title: "Safe", desc: "Safety-focused" }
                                  ];
                              }
                            })();

                            return keyFeatures.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex-shrink-0 w-32 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 text-center"
                              >
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-sm">{feature.icon}</span>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-1 text-xs">{feature.title}</h4>
                                <p className="text-xs text-gray-600 leading-tight">{feature.desc}</p>
                              </div>
                            ));
                          })()}
                        </div>


                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop Services Slider - Hidden on Mobile */}
              <div className="hidden md:block relative">
                {/* Services Slider */}
                <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <motion.div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div
                        key={service.slug}
                        className="w-full flex-shrink-0"
                        style={{ width: '100%' }}
                      >
                        <div className="grid lg:grid-cols-2 gap-0 min-h-[500px] sm:min-h-[600px]">
                          {/* Left Side - Service Image & Visual */}
                          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                            {/* Service-specific Background Image */}
                            <div
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                              style={{
                                backgroundImage: `url('${(() => {
                                  switch (service.slug) {
                                    case "mobile-equipment-maintenance":
                                      return "/images/services/1.jpg";
                                    case "maintenance-engineering":
                                      return "/images/services/2.png";
                                    case "manpower-expertise":
                                      return "/images/services/3.png";
                                    case "industrial-procurement":
                                      return "/images/services/4.png";
                                    case "transport-mobility":
                                      return "/images/services/5.png";
                                    default:
                                      return "/images/background2.jpg";
                                  }
                                })()}')`
                              }}
                            >
                              {/* Dynamic Overlay based on service - Reduced opacity for better image visibility */}
                              <div className={`absolute inset-0 transition-all duration-500 ${service.slug === "mobile-equipment-maintenance" ? "bg-gradient-to-br from-red-600/40 via-red-500/30 to-orange-500/20" :
                                service.slug === "maintenance-engineering" ? "bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-indigo-500/20" :
                                  service.slug === "manpower-expertise" ? "bg-gradient-to-br from-green-600/40 via-green-500/30 to-teal-500/20" :
                                    service.slug === "industrial-procurement" ? "bg-gradient-to-br from-purple-600/40 via-purple-500/30 to-pink-500/20" :
                                      "bg-gradient-to-br from-gray-600/40 via-gray-500/30 to-slate-500/20"
                                  }`}></div>

                              {/* Floating Elements */}
                              <div className="absolute top-8 left-8">
                                <motion.div
                                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center"
                                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                                </motion.div>
                              </div>

                              {/* Service Icon */}
                              <div className="absolute bottom-8 right-8">
                                <motion.div
                                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center"
                                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                  {(() => {
                                    switch (service.slug) {
                                      case "mobile-equipment-maintenance":
                                        return "🔥";
                                      case "maintenance-engineering":
                                        return "⚙️";
                                      case "manpower-expertise":
                                        return "👨‍🔧";
                                      case "industrial-procurement":
                                        return "📦";
                                      case "transport-mobility":
                                        return "🚛";
                                      default:
                                        return "🔧";
                                    }
                                  })()}
                                </motion.div>
                              </div>
                            </div>

                            {/* Service Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                              <motion.h3
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                              >
                                {service.title}
                              </motion.h3>
                            </div>
                          </div>

                          {/* Right Side - Service Details */}
                          <div className="p-8 sm:p-10 lg:p-12 bg-white relative">
                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl"></div>

                            {/* Service Description */}
                            <motion.div
                              className="mb-8"
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                            >
                              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                {service.description}
                              </p>
                            </motion.div>

                            {/* Service Description Paragraph */}
                            <motion.div
                              className="mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                            >
                              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {(() => {
                                  switch (service.slug) {
                                    case "mobile-equipment-maintenance":
                                      return "Our comprehensive mobile equipment maintenance includes AFEX fire suppression system installation, preventive maintenance programs, emergency response services, and 24/7 support. We ensure safety compliance and rapid repair services for all your heavy-duty mobile machinery needs.";
                                    case "maintenance-engineering":
                                      return "Professional engineering services cover equipment performance optimization, preventive and corrective maintenance, reliability analysis, and technical documentation. Our expert team provides maintenance planning, scheduling, and engineering solutions for industrial equipment.";
                                    case "manpower-expertise":
                                      return "Experienced expat and local teams deliver specialized technical expertise in fire safety and mobile equipment maintenance. We provide certified technicians, safety compliance experts, training programs, and emergency response teams.";
                                    case "industrial-procurement":
                                      return "Complete procurement solutions for fire suppression components, mobile equipment parts, safety equipment, and PPE. Our services include quality assurance, testing, inventory management, and access to a global supplier network.";
                                    case "transport-mobility":
                                      return "Comprehensive transport and mobility solutions for heavy-duty equipment with safety-compliant transport, emergency services, route planning, and 24/7 availability. We ensure safe and efficient movement of machinery.";
                                    default:
                                      return "Professional services delivered with precision and reliability.";
                                  }
                                })()}
                              </p>
                            </motion.div>

                            {/* Key Features - 3 Well-Designed Points */}
                            <motion.div
                              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                            >
                              {(() => {
                                const keyFeatures = (() => {
                                  switch (service.slug) {
                                    case "mobile-equipment-maintenance":
                                      return [
                                        { icon: "🔥", title: "AFEX Systems", desc: "Official representative for fire suppression installation" },
                                        { icon: "⚡", title: "24/7 Support", desc: "Emergency response and rapid repair services" },
                                        { icon: "🛡️", title: "Safety Compliance", desc: "Full certification and compliance services" }
                                      ];
                                    case "maintenance-engineering":
                                      return [
                                        { icon: "⚙️", title: "Performance", desc: "Equipment optimization and reliability analysis" },
                                        { icon: "📋", title: "Planning", desc: "Maintenance scheduling and documentation" },
                                        { icon: "🔧", title: "Expert Repairs", desc: "Preventive and corrective maintenance" }
                                      ];
                                    case "manpower-expertise":
                                      return [
                                        { icon: "👨‍🔧", title: "Certified Teams", desc: "Expat and local technical specialists" },
                                        { icon: "🎓", title: "Training", desc: "Certification and training programs" },
                                        { icon: "🚨", title: "Emergency Response", desc: "24/7 emergency response teams" }
                                      ];
                                    case "industrial-procurement":
                                      return [
                                        { icon: "📦", title: "Global Supply", desc: "Worldwide supplier network access" },
                                        { icon: "✅", title: "Quality Assured", desc: "Testing and quality verification" },
                                        { icon: "📊", title: "Inventory Management", desc: "Efficient supply chain solutions" }
                                      ];
                                    case "transport-mobility":
                                      return [
                                        { icon: "🚛", title: "Heavy Transport", desc: "Safe heavy equipment transportation" },
                                        { icon: "🗺️", title: "Route Planning", desc: "Efficient logistics and route optimization" },
                                        { icon: "⏰", title: "24/7 Availability", desc: "Round-the-clock transport services" }
                                      ];
                                    default:
                                      return [
                                        { icon: "🔧", title: "Professional", desc: "Expert service delivery" },
                                        { icon: "⚡", title: "Efficient", desc: "Fast and reliable solutions" },
                                        { icon: "🛡️", title: "Safe", desc: "Safety-focused approach" }
                                      ];
                                  }
                                })();

                                return keyFeatures.map((feature, index) => (
                                  <div
                                    key={index}
                                    className="group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                                  >
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                      <span className="text-xl">{feature.icon}</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">{feature.title}</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                                  </div>
                                ));
                              })()}
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Enhanced Navigation */}
                <div className="flex items-center justify-between mt-8 sm:mt-12">
                  {/* Slide Indicators */}
                  <div className="flex space-x-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                          ? 'bg-primary w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handlePrevSlide()}
                      className="w-12 h-12 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleNextSlide()}
                      className="w-12 h-12 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Services Extension - Compact Innovation Showcase */}
        <section className="py-12 bg-gray-900 relative overflow-hidden">
          {/* Background Pattern - Same as TrustBanner */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff20_1px,transparent_0)] bg-[size:40px_40px]"></div>
          </div>

          {/* Background Image with Gradient Overlay - Same as TrustBanner */}
          <div className="absolute inset-0">
            <img
              src="/images/12.png"
              alt="Safety innovation background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-red-900/70"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
            {/* Compact Header */}
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center text-red-400 text-xs font-semibold uppercase tracking-widest mb-3 py-1.5 px-3 bg-red-900/30 rounded-full border border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                INNOVATION & EXCELLENCE
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">BEYOND SERVICE DELIVERY</span>
              </motion.h2>
            </motion.div>

            {/* Creative Innovation Cards - Compact 3x1 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Innovation Hub */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>

                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🚀</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">Innovation Hub</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    AI-powered monitoring, smart sensors, and predictive analytics for next-generation safety
                  </p>
                </div>
              </motion.div>

              {/* Excellence Center */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl"></div>

                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">⭐</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">Excellence Center</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Quality management, process optimization, and industry-leading safety standards
                  </p>
                </div>
              </motion.div>

              {/* Partnership Network */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-xl"></div>

                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🤝</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">Partnership Network</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Global alliances, technology partners, and industry collaboration networks
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Compact Metrics Bar */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { number: "99.9%", label: "Safety" },
                { number: "24/7", label: "Support" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {metric.number}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="py-16 bg-white relative overflow-hidden">
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

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 ">
                Meeting the Highest <span className="text-primary">Safety Standards</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive certifications and compliance with international standards ensure your operations meet the highest safety requirements.
              </p>
            </motion.div>



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
                            <div className="bg-gradient-to-br from-primary/5 via-blue-50/30 to-primary/5 rounded-xl p-6">
                              {(() => {
                                switch (item.title) {
                                  case "Global Fire Safety Standards":
                                    return (
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaShieldAlt className="w-5 h-5 text-primary mr-2" />
                                            Fire Protection Benefits
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                NFPA & OSHA certified fire suppression systems
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Industrial-grade fire detection and alarm systems
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                24/7 emergency response capabilities
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaCheckCircle className="w-5 h-5 text-primary mr-2" />
                                            Compliance Features
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                International safety standard adherence
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Regular fire safety audits and inspections
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Continuous monitoring and assessment
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );

                                  case "AFEX Equipment Standards":
                                    return (
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaIndustry className="w-5 h-5 text-primary mr-2" />
                                            AFEX Equipment Benefits
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Official AFEX representative in Mauritania
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Certified mobile equipment maintenance
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Specialized fire suppression for mining equipment
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaTools className="w-5 h-5 text-primary mr-2" />
                                            Maintenance Features
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Preventive maintenance programs
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Emergency repair and response services
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Performance optimization and testing
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );

                                  case "Mobile Equipment Safety Compliance":
                                    return (
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaIndustry className="w-5 h-5 text-primary mr-2" />
                                            Equipment Safety Benefits
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Heavy-duty mobile equipment compliance
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Mining operation safety standards
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                International equipment regulations
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaCheckCircle className="w-5 h-5 text-primary mr-2" />
                                            Safety Features
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Regular safety inspections and testing
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Equipment performance monitoring
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Compliance documentation and reporting
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );

                                  case "Mauritanian Industrial Standards":
                                    return (
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaGlobe className="w-5 h-5 text-primary mr-2" />
                                            Local Compliance Benefits
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Full Mauritanian regulatory compliance
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Local industrial safety standards
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Regional fire protection requirements
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaCheckCircle className="w-5 h-5 text-primary mr-2" />
                                            Local Features
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Local authority coordination
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Regional compliance monitoring
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Local safety training programs
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );

                                  default:
                                    return (
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaShieldAlt className="w-5 h-5 text-primary mr-2" />
                                            Key Benefits
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Enhanced safety protocols and procedures
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Reduced risk of workplace incidents
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Improved operational efficiency
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <FaCheckCircle className="w-5 h-5 text-primary mr-2" />
                                            Compliance Features
                                          </h4>
                                          <div className="space-y-3">
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Regular safety audits and inspections
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Continuous monitoring and assessment
                                              </span>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                              <span className="text-sm text-gray-700">
                                                Proactive risk management
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                }
                              })()}

                              {/* Call to Action */}
                              <div className="mt-6 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-600">
                                    <span className="font-semibold text-primary">Status:</span> Active & Compliant
                                  </span>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-green-600">Certified</span>
                                  </div>
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

            {/* Certificates Section */}
            <motion.div
              className="mt-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications & Compliance</h3>
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
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
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
                          className="max-w-full max-h-full object-contain transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* Quality Assurance Process */}
        <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center mb-6">
                <span className="h-0.5 w-12 bg-primary mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-red-500 uppercase">
                  Our Quality Process
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quality <span className="text-primary">Assurance</span> Process
              </h2>

              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive quality assurance process ensures that every project meets the highest standards of safety and compliance,
                delivering exceptional results through systematic excellence.
              </p>
            </div>

            {/* Process Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 hidden lg:block"></div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                {qualityProcess.map((process, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    {/* Process Card */}
                    <div className="relative bg-white  border-t border-gray-100 p-8 lg:p-10 h-full   ">
                      {/* Floating Number Badge */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                          <span className="text-white font-bold text-lg">{process.step}</span>
                        </div>
                      </div>



                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors duration-500">
                          {process.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-lg">
                          {process.description}
                        </p>
                      </div>

                      {/* Hover Effects */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Corner Accent */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-primary to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                    </div>


                  </div>
                ))}
              </div>
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
                backgroundImage: `radial-gradient(circle at 10% 20%, #18558c20 0%, transparent 25%), 
                          radial-gradient(circle at 90% 80%, #4f46e520 0%, transparent 25%)`,
                backgroundSize: '50% 50%, 50% 50%',
                backgroundPosition: 'top left, bottom right',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              className="text-center mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="h-0.5 w-12 bg-primary mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-red-500 uppercase">
                  Our Philosophy
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Built on <span className="text-primary">Integrity</span>, Driven by <span className="text-primary">Safety</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our core values define every solution we deliver and every relationship we build in protecting what matters most.
              </motion.p>
            </motion.div>

            {/* Values Content - Replaced Cards with Well-Designed Paragraphs */}
            <div className="space-y-12">
              <motion.div
                className="value-item flex flex-col lg:flex-row items-start gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="value-icon w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10 text-primary text-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg">
                    <FaHandshake />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-primary font-bold text-lg mr-2">01</span>
                    <h3 className="text-xl font-bold text-gray-900">Commitment to Excellence</h3>
                  </div>
                  <div className="prose prose-lg text-gray-600">
                    <p>We hold ourselves to the highest standards in everything we do. Our commitment to excellence means we continuously refine our processes, invest in our team's development, and strive to exceed expectations at every opportunity. This dedication forms the foundation of our reputation and the trust our clients place in us.</p>
                    <p className="mt-4">Through meticulous attention to detail and a culture of continuous improvement, we deliver solutions that not only meet but surpass industry benchmarks, ensuring lasting value and peace of mind for those we serve.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="value-item flex flex-col lg:flex-row items-start gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex-shrink-0">
                  <div className="value-icon w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10 text-primary text-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg">
                    <FaMedal />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-primary font-bold text-lg mr-2">02</span>
                    <h3 className="text-xl font-bold text-gray-900">Uncompromising Safety</h3>
                  </div>
                  <div className="prose prose-lg text-gray-600">
                    <p>Safety isn't just a policy—it's our core value that guides every decision we make. We implement rigorous safety protocols and continuously train our team to ensure the well-being of our clients, employees, and communities. Our proactive approach identifies potential risks before they become hazards.</p>
                    <p className="mt-4">We believe that true safety excellence comes from a culture of vigilance and responsibility, where every team member is empowered to take action when it comes to protecting people and assets.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="value-item flex flex-col lg:flex-row items-start gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <div className="value-icon w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10 text-primary text-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg">
                    <FaLightbulb />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-primary font-bold text-lg mr-2">03</span>
                    <h3 className="text-xl font-bold text-gray-900">Innovative Solutions</h3>
                  </div>
                  <div className="prose prose-lg text-gray-600">
                    <p>In a rapidly evolving world, we stay ahead of the curve by embracing innovation and technology. Our team continuously researches and implements cutting-edge solutions that enhance protection while optimizing efficiency. We challenge conventional thinking to develop smarter, more effective approaches to security.</p>
                    <p className="mt-4">By fostering a culture of creativity and forward-thinking, we deliver future-ready solutions that adapt to emerging threats and changing environments, ensuring our clients are always protected by the most advanced systems available.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="value-item flex flex-col lg:flex-row items-start gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex-shrink-0">
                  <div className="value-icon w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10 text-primary text-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg">
                    <FaClipboardCheck />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-primary font-bold text-lg mr-2">04</span>
                    <h3 className="text-xl font-bold text-gray-900">Accountability & Trust</h3>
                  </div>
                  <div className="prose prose-lg text-gray-600">
                    <p>We take full responsibility for our commitments, actions, and results. Our transparent approach builds trust with clients, partners, and team members alike. We believe that accountability is the cornerstone of reliability and long-term relationships.</p>
                    <p className="mt-4">When you work with us, you can be confident that we will follow through on our promises, communicate openly about challenges, and consistently deliver on our word. This unwavering accountability has been the foundation of our reputation for over a decade.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-16 px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="inline-flex flex-col sm:flex-row items-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 w-full max-w-2xl shadow-sm border border-primary/20">
                <div className="flex -space-x-3 mb-4 sm:mb-0 sm:mr-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">NFPA</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/80 border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">ISO</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/90 border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">OSHA</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-gray-900 text-lg">Industry Certified Professionals</div>
                  <div className="text-sm text-gray-600 mt-1">Our team maintains the highest certifications including NFPA, ISO, and OSHA compliance</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact">
          <CTA
            title="Ready to Elevate Safety and Performance?"
            subtitle="Contact us today for a comprehensive safety assessment of your facility. You can also learn more about us from our Learn More About Us page."
            primaryButton={{ text: "Request a Quote", href: "/contact" }}
            secondaryButton={{ text: "Contact Us", href: "/contact" }}
          />
        </section>
      </main>
    </>
  );
};

export default Home;

