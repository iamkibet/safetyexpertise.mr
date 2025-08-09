import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import {
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaMedal,
  FaClipboardCheck,
  FaQuoteRight,
  FaPhone,
  FaInfo,
  FaCheckCircle,
  FaAward,
  FaCertificate,
  FaStar,
  FaArrowRight,
  FaIndustry,
  FaTools,
  FaFireExtinguisher,
  FaHardHat,
  FaCog,
  FaRocket,
  FaEye,
  FaHeart,
  FaPlay,
  FaDownload,
  FaSync,
  FaRibbon,
} from "react-icons/fa";
import CTA from "../components/CTA";

const Home = () => {
  const whyUsFeatures = [
    {
      icon: FaShieldAlt,
      title: "Fire Protection Specialists",
      description:
        "Certified fire protection experts with NFPA and OSHA certifications, specializing in industrial fire safety systems.",
    },
    {
      icon: FaUsers,
      title: "AFEX - ICAT Specialists",
      description:
        "Specialized expertise in AFEX - ICAT mobile mining equipment maintenance and repair services.",
    },
    {
      icon: FaGlobe,
      title: "24/7 Emergency Support",
      description:
        "Round-the-clock emergency maintenance and fire protection support for critical operations.",
    },
    {
      icon: FaChartLine,
      title: "Proven Track Record",
      description:
        "Over 100 successful projects with 97% client satisfaction rate in fire protection and mobile equipment maintenance.",
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
        <Hero />

        {/* Services Overview */}
        {/* Services Section - Modern Corporate Design */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Main Heading */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-flex items-center justify-center mb-5">
                    <motion.span 
                      className="h-0.5 w-12 bg-primary mr-3"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    ></motion.span>
                    <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                      Our Expertise
                    </span>
                    <motion.span 
                      className="h-0.5 w-12 bg-primary ml-3"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    ></motion.span>
                  </div>

                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Advanced <span className="text-primary">Fire Protection</span> Solutions
                  </motion.h2>

                  <motion.p 
                    className="text-lg text-gray-600 max-w-3xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Comprehensive fire safety solutions for industrial and commercial facilities. 
                    From detection systems to suppression equipment, we protect what matters most 
                    with precision installation and maintenance protocols.
                  </motion.p>
                </motion.div>

                {/* Key Benefits */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {[
                    { text: "Save time – we focus on the details with precision installation.", color: "primary" },
                    { text: "Save money – we ensure you get quality with proven track record.", color: "accent" },
                    { text: "Stay safe – we deliver outstanding standards to keep you protected.", color: "primary" }
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className={`w-2 h-2 bg-${benefit.color} rounded-full mt-3 flex-shrink-0`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      ></motion.div>
                      <p className="text-gray-700">
                        <strong>{benefit.text.split('–')[0]}</strong> – {benefit.text.split('–')[1]}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                  className="bg-gray-50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Our Success Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "500+", label: "Projects Completed" },
                      { value: "97%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-primary"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Image with Stacked Feature Cards */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Background Image */}
                <motion.div 
                  className="relative rounded-xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src="/images/about.jpg"
                    alt="Professional fire safety team"
                    className="w-full h-[600px] object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />

                  {/* Stacked Overlay Cards */}
                  <div className="absolute top-6 left-6 flex flex-col gap-4 max-w-xs">
                    {[
                      {
                        title: "Expert Team",
                        description: "Our methodology depends on an expert team.",
                        icon: FaUsers,
                        bgColor: "bg-red-600",
                        textColor: "text-white",
                        iconBg: "bg-white/20",
                        delay: 0.2
                      },
                      {
                        title: "Experience",
                        description: "Over 97 years in maintenance and supply of firefighting equipment.",
                        icon: FaStar,
                        bgColor: "bg-white/95",
                        textColor: "text-gray-900",
                        iconBg: "bg-gradient-to-r from-red-500 to-red-700",
                        delay: 0.4
                      },
                      {
                        title: "Certification",
                        description: "Operating under European & international fire safety standards.",
                        icon: FaCertificate,
                        bgColor: "bg-white/95",
                        textColor: "text-gray-900",
                        iconBg: "bg-gradient-to-r from-red-500 to-red-700",
                        delay: 0.6
                      }
                    ].map((card, index) => (
                      <motion.div
                        key={index}
                        className={`${card.bgColor} ${card.textColor} p-4 rounded-lg shadow-lg backdrop-blur-sm`}
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: card.delay,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          x: 10,
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <motion.div 
                            className={`w-10 h-10 ${card.iconBg} rounded-lg flex items-center justify-center`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <card.icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <div>
                            <h4 className="font-bold text-sm">
                              {card.title === "Experience" || card.title === "Certification" 
                                ? <span className="text-red-600">{card.title}</span> 
                                : card.title
                              }
                            </h4>
                            <p className="text-xs opacity-90">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
<section className="relative py-24 bg-gradient-to-b from-[#f8f8f8] via-white to-white overflow-hidden">
  {/* Decorative background shape */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-20 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 -left-32 w-[300px] h-[300px] bg-[#ff3131]/5 rounded-full blur-2xl"></div>
  </div>

  <div className="container relative z-10 mx-auto px-4 max-w-7xl">
    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="block h-0.5 w-12 bg-primary"></span>
        <span className="text-sm font-semibold tracking-wider text-primary uppercase">
          Our Competitive Edge
        </span>
        <span className="block h-0.5 w-12 bg-primary"></span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Why <span className="text-primary">SafetyExpertise</span> Excels
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Industry-leading expertise combined with innovative technology for uncompromised safety, efficiency, and long-term asset protection.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {whyUsFeatures.map((feature, index) => (
        <div
          key={index}
          className="relative group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          {/* Gradient top border on hover */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#18558c] opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {/* Icon container */}
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <feature.icon className="w-7 h-7 text-primary" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-5">{feature.description}</p>

          <button className="inline-flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
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
      <a
        href="/contact"
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
      </a>
    </div>
  </div>
</section>


        {/* Values Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, ${"#18558c"}20, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, ${"#ff3131"}20, transparent 50%)`,
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
                  Our Philosophy
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
                Built on <span className="text-primary">Integrity</span>, Driven by Safety
              </motion.h2>

              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our core values define every solution we deliver and every relationship we build in protecting what matters most.
              </motion.p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    {/* Background Accent */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${
                      index % 4 === 0 ? 'bg-primary' :
                      index % 4 === 1 ? 'bg-accent' :
                      index % 4 === 2 ? 'bg-primary' :
                      'bg-accent'
                    }`}></div>

                    {/* Icon Container */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                        index % 4 === 0 ? 'bg-primary/10' :
                        index % 4 === 1 ? 'bg-accent/10' :
                        index % 4 === 2 ? 'bg-primary/10' :
                        'bg-accent/10'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`text-3xl ${
                        index % 4 === 0 ? 'text-primary' :
                        index % 4 === 1 ? 'text-accent' :
                        index % 4 === 2 ? 'text-primary' :
                        'text-accent'
                      }`}>
                        {index === 0 && <FaHandshake />}
                        {index === 1 && <FaMedal />}
                        {index === 2 && <FaLightbulb />}
                        {index === 3 && <FaClipboardCheck />}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {value.title}
                      </motion.h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {value.description}
                      </p>

                      {/* Learn More Link */}
                      <motion.div 
                        className={`inline-flex items-center text-sm font-medium ${
                          index % 4 === 0 ? 'text-primary' :
                          index % 4 === 1 ? 'text-accent' :
                          index % 4 === 2 ? 'text-primary' :
                          'text-accent'
                        } group-hover:translate-x-2 transition-transform duration-300`}
                      >
                        <span>Learn more</span>
                        <FaArrowRight className="ml-2 w-3 h-3" />
                      </motion.div>
                    </div>

                    {/* Floating Number */}
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
                      index % 4 === 0 ? 'bg-primary' :
                      index % 4 === 1 ? 'bg-accent' :
                      index % 4 === 2 ? 'bg-primary' :
                      'bg-accent'
                    } opacity-20`}>
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
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
                  <div className="font-bold text-gray-900">Industry Certified Team</div>
                  <div className="text-sm text-gray-600">NFPA & ISO compliant professionals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

     
        <section className="py-24 relative overflow-hidden">
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
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
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
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-[#134271] transition-colors shadow-md hover:shadow-lg"
              >
                Explore All Projects
                <FaArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
        {/* CTA Section */}
        <CTA 
          title="Ready to Enhance Your Safety?"
          subtitle="Contact us today for a comprehensive safety assessment of your facility."
          primaryButton={{ text: "Request a Quote", href: "/contact" }}
          secondaryButton={{ text: "Contact Us", href: "/contact" }}
        /> 
      </main>
    </>
  );
};

export default Home;

