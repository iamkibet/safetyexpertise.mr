import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WhyUs from "../components/WhyUs";
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
        <WhyUs />






        {/* Services Section */}
        <section id="services" className=" sm:py-10 lg:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden min-h-screen">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-500/5 to-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-primary/3 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
            {/* Section Header */}
            <motion.div
              className="text-center mb-4 sm:mb-6 lg:mb-8 xl:mb-10"
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

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 pb-2 leading-tight sm:leading-tight">
                Comprehensive <span className="text-primary">Safety Solutions</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-2xl mx-auto leading-relaxed mt-2 sm:mt-3 px-2">
                Professional fire safety, maintenance engineering, and industrial expertise<br className="hidden sm:block" /> delivered with precision and reliability.
              </p>
            </motion.div>

            {/* Services Showcase */}
            <div className="relative flex-1">
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




                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop Services Slider - Hidden on Mobile */}
              <div className="hidden md:block relative h-full flex flex-col">
                {/* Services Slider */}
                <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl flex-1 ">
                  <motion.div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div
                        key={service.slug}
                        className="w-full flex-shrink-0 h-full"
                        style={{ width: '100%' }}
                      >
                        <div className="grid lg:grid-cols-2 gap-0 h-full">
                          {/* Left Side - Service Image & Visual */}
                          <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black h-[500px]">
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
                          <div className="p-4 sm:p-5 lg:p-6 xl:p-8 2xl:p-10 bg-white relative flex flex-col min-h-[500px]">
                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl"></div>

                            {/* Content Container */}
                            <div className="flex-1 flex flex-col ">
                              {/* Service Description */}
                              <motion.div
                                className="mb-4 lg:mb-6"
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
                                className="mb-4 lg:mb-6"
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
                                        return "We deliver end-to-end procurement services covering industrial equipment, machinery parts, safety systems, and PPE. From sourcing and quality assurance to testing, inventory management, and logistics, our solutions connect you to a trusted global supplier network. With a focus on reliability, performance, and cost efficiency, we ensure your operations have the right materials at the right time—supporting every aspect of your industrial procurement needs.";
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
                                className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4"
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
                                          { icon: "shield-check", title: "AFEX Systems", desc: "Official representative for fire suppression installation" },
                                          { icon: "clock", title: "24/7 Support", desc: "Emergency response and rapid repair services" },
                                          { icon: "certificate", title: "Safety Compliance", desc: "Full certification and compliance services" }
                                        ];
                                      case "maintenance-engineering":
                                        return [
                                          { icon: "cog", title: "Performance", desc: "Equipment optimization and reliability analysis" },
                                          { icon: "clipboard-list", title: "Planning", desc: "Maintenance scheduling and documentation" },
                                          { icon: "wrench", title: "Expert Repairs", desc: "Preventive and corrective maintenance" }
                                        ];
                                      case "manpower-expertise":
                                        return [
                                          { icon: "users", title: "Certified Teams", desc: "Expat and local technical specialists" },
                                          { icon: "graduation-cap", title: "Training", desc: "Certification and training programs" },
                                          { icon: "exclamation-triangle", title: "Emergency Response", desc: "24/7 emergency response teams" }
                                        ];
                                      case "industrial-procurement":
                                        return [
                                          { icon: "globe", title: "Global Supply", desc: "Worldwide supplier network access" },
                                          { icon: "check-circle", title: "Quality Assured", desc: "Testing and quality verification" },
                                          { icon: "chart-bar", title: "Inventory Management", desc: "Efficient supply chain solutions" }
                                        ];
                                      case "transport-mobility":
                                        return [
                                          { icon: "truck", title: "Heavy Transport", desc: "Safe heavy equipment transportation" },
                                          { icon: "map", title: "Route Planning", desc: "Efficient logistics and route optimization" },
                                          { icon: "clock", title: "24/7 Availability", desc: "Round-the-clock transport services" }
                                        ];
                                      default:
                                        return [
                                          { icon: "star", title: "Professional", desc: "Expert service delivery" },
                                          { icon: "bolt", title: "Efficient", desc: "Fast and reliable solutions" },
                                          { icon: "shield-alt", title: "Safe", desc: "Safety-focused approach" }
                                        ];
                                    }
                                  })();

                                  return keyFeatures.map((feature, index) => (
                                    <div
                                      key={index}
                                      className="group p-3 lg:p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                                    >
                                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {(() => {
                                          switch (feature.icon) {
                                            case "shield-check":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                              );
                                            case "clock":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                              );
                                            case "certificate":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                              );
                                            case "cog":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065c.426-1.756 2.924-1.756 3.35 0z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                              );
                                            case "clipboard-list":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                </svg>
                                              );
                                            case "wrench":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065c.426-1.756 2.924-1.756 3.35 0z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                              );
                                            case "users":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                                </svg>
                                              );
                                            case "graduation-cap":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                </svg>
                                              );
                                            case "exclamation-triangle":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                                </svg>
                                              );
                                            case "globe":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                              );
                                            case "check-circle":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                              );
                                            case "chart-bar":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                              );
                                            case "truck":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM21 13V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6m16 0v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 00-.293.707V17" />
                                                </svg>
                                              );
                                            case "map":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                                                </svg>
                                              );
                                            case "star":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                              );
                                            case "bolt":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                              );
                                            case "shield-alt":
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                              );
                                            default:
                                              return (
                                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                              );
                                          }
                                        })()}
                                      </div>
                                      <h4 className="font-semibold text-gray-800 mb-2 text-xs lg:text-sm">{feature.title}</h4>
                                      <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                  ));
                                })()}
                              </motion.div>

                              {/* Spacer to push navigation to bottom */}
                              <div className="flex-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Enhanced Navigation */}
                <div className="flex items-center justify-between mt-3 sm:mt-4 lg:mt-5 xl:mt-6">
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
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleNextSlide()}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
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

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Meeting the Highest <span className="text-primary">Safety Standards</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-3xl mx-auto leading-relaxed mt-2 sm:mt-3 px-2">
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
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

