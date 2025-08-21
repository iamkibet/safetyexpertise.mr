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

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

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
                backgroundImage: `radial-gradient(circle at 10% 20%, #18558c20 0%, transparent 25%), 
                         radial-gradient(circle at 90% 80%, #4f46e520 0%, transparent 25%)`,
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
                  className="h-0.5 w-8 lg:w-12 bg-primary mr-2 lg:mr-3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                ></motion.span>
                <span className="text-xs lg:text-sm font-semibold tracking-wider text-primary uppercase">
                  Our Philosophy
                </span>
                <motion.span
                  className="h-0.5 w-8 lg:w-12 bg-primary ml-2 lg:ml-3"
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
                    <div className={`absolute top-0 left-0 w-full h-1 bg-primary`}></div>

                    {/* Icon Container */}
                    <motion.div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 bg-primary/10`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`text-xl sm:text-2xl text-primary`}>
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
                      className={`inline-flex items-center text-xs sm:text-sm font-medium mt-auto text-primary group-hover:translate-x-1 transition-transform duration-300`}
                    >
                      <span>Learn more</span>
                      <FaArrowRight className="ml-1 sm:ml-2 w-2 h-2 sm:w-3 sm:h-3" />
                    </motion.div>

                    {/* Floating Number */}
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-xl font-bold text-white bg-primary opacity-10`}>
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
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary border-2 sm:border-4 border-white shadow-md"></div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-indigo-600 border-2 sm:border-4 border-white shadow-md"></div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary border-2 sm:border-4 border-white shadow-md"></div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">Industry Certified Team</div>
                  <div className="text-xs sm:text-sm text-gray-600">NFPA & ISO compliant professionals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
          {/* Enhanced Parallax Background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
              style={{
                backgroundImage: `url('/images/background2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/80"></div>

            {/* Animated grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Animated floating elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
              <motion.div
                className="flex items-center justify-center mb-5"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="h-0.5 w-8 lg:w-12 bg-red-600 mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-red-600 uppercase">
                  Our Portfolio
                </span>
                <span className="h-0.5 w-8 lg:w-12 bg-red-600 ml-3"></span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Successful <span className="text-primary">Safety Implementations</span>
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover our portfolio of successful safety implementations across various industries and sectors.
              </motion.p>
            </motion.div>

            {/* Case Study Cards Grid - Modern Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  image: "/images/safety1.png",
                  category: "Fire Protection",
                  title: "AFEX Mobile Mining Equipment Maintenance",
                  accent: false
                },
                {
                  image: "/images/14.png",
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
                  className="group relative overflow-hidden rounded-xl lg:rounded-2xl cursor-pointer bg-white shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Card Image */}
                  <div className="relative h-72 lg:h-80 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${project.accent ? 'bg-red-600 text-white' : 'bg-white text-gray-900'}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Effect Indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {project.title}
                    </h3>

                    {/* View Project Button */}
                    <div className="flex items-center mt-4">
                      <span className={`text-sm font-medium ${project.accent ? 'text-red-600' : 'text-blue-600'}`}>
                        View project
                      </span>
                      <svg
                        className={`w-4 h-4 ml-2 ${project.accent ? 'text-red-600' : 'text-blue-600'} group-hover:translate-x-1 transition-transform duration-300`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Left Panel - Dark Background with Title */}
              <div className="lg:w-1/3 relative overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/background2.jpg')`
                  }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-800/85 to-black/90"></div>
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)] bg-[size:100px_100px]"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-12 lg:p-16 flex flex-col justify-center h-full">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-6 block">
                      Our Services
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
                      Grouped & Streamlined Solutions
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-xs">
                      Comprehensive safety and maintenance services tailored to your industrial needs
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Right Panel - White Background with Services */}
              <div className="lg:w-2/3 bg-white ">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  



                  

                  {/* Services Slider */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {services.map((service, index) => (
                        <div
                          key={service.slug}
                          className="w-full flex-shrink-0 px-4"
                          style={{ width: '100%' }}
                        >
                          <div className="bg-gradient-to-br from-white via-gray-50 to-white  border-b border-gray-100 p-10 max-w-3xl mx-auto relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full blur-xl"></div>
                            
                            {/* Service Number Badge */}
                            <div className="absolute top-6 right-6">
                              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">{index + 1}</span>
                              </div>
                            </div>

                            {/* Service Content */}
                            <div className="text-center relative z-10">
                              {/* Animated Underline */}
                              <div className="flex justify-center mb-6">
                                <motion.div
                                  className="h-1 bg-gradient-to-r from-primary via-red-500 to-primary rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "100px" }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, delay: 0.2 }}
                                />
                              </div>

                              <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                {service.title}
                              </h3>
                              
                              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                                {service.description}
                              </p>

                              {/* Enhanced Features List */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                {service.descriptionPoints.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                  >
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                      <FaCheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-base text-gray-700 font-medium">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>

                              {/* Service Category Badge */}
                              <div className="mt-8">
                                <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary font-semibold rounded-full border border-primary/20">
                                  {(() => {
                                    switch (service.slug) {
                                      case "mobile-equipment-maintenance":
                                        return "Mobile Equipment";
                                      case "maintenance-engineering":
                                        return "Engineering";
                                      case "manpower-expertise":
                                        return "Expertise";
                                      case "industrial-procurement":
                                        return "Procurement";
                                      case "transport-mobility":
                                        return "Transport";
                                      default:
                                        return "Service";
                                    }
                                  })()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  {/* Navigation Arrows */}
                  <div className="flex justify-end my-8 space-x-3">
                    <button
                      onClick={() => handlePrevSlide()}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleNextSlide()}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>


                </motion.div>
              </div>
            </div>
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
          </div>
        </section>

        {/* Quality Assurance Process */}
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
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
              {/* Decorative Elements */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="mx-6">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary">Assurance</span> Process
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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

              {/* Bottom CTA */}
              <div className="text-center mt-20">
                <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Quality Guaranteed</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
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

