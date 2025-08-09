import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import CTA from "../components/CTA";
import { services } from "../data";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaShieldAlt,
  FaIndustry,
  FaFire,
  FaTools,
  FaCog,
  FaHardHat,
  FaClock,
  FaUsers,
  FaStar,
  FaAward,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaPlay,
  FaQuoteLeft,
  FaDownload,
  FaEye,
  FaBuilding,
  FaWrench,
  FaExclamationTriangle,
  FaBolt,
  FaMedal,
} from "react-icons/fa";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [activeTab, setActiveTab] = useState("overview");

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaExclamationTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-[#134271] transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Services
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  // Service-specific data
  const serviceData = {
    "fire-protection": {
      heroImage: "/images/safety1.png",
      features: [
        {
          icon: FaFire,
          title: "Fire Detection Systems",
          description: "Professional detection and alarm systems for early warning"
        },
        {
          icon: FaShieldAlt,
          title: "Suppression Equipment",
          description: "Automatic fire suppression and extinguishing systems"
        },
        {
          icon: FaBolt,
          title: "Emergency Systems",
          description: "Emergency lighting and exit signage installation"
        },
        {
          icon: FaHardHat,
          title: "Safety Training",
          description: "Comprehensive fire safety training programs"
        }
      ],
      process: [
        {
          step: "01",
          title: "Assessment",
          description: "Comprehensive evaluation of safety requirements"
        },
        {
          step: "02",
          title: "Design",
          description: "Custom system design and planning"
        },
        {
          step: "03",
          title: "Installation",
          description: "Professional installation and system integration"
        },
        {
          step: "04",
          title: "Maintenance",
          description: "Ongoing maintenance and compliance monitoring"
        }
      ],
      stats: [
        { value: "100+", label: "Projects Completed" },
        { value: "97%", label: "Client Satisfaction" },
        { value: "24/7", label: "Emergency Support" },
        { value: "15+", label: "Years Experience" }
      ]
    },
    "industrial-maintenance": {
      heroImage: "/images/afex/1.png",
      features: [
        {
          icon: FaIndustry,
          title: "Mobile Equipment",
          description: "Specialized maintenance for mobile mining equipment"
        },
        {
          icon: FaTools,
          title: "Preventive Maintenance",
          description: "Scheduled maintenance to prevent breakdowns"
        },
        {
          icon: FaWrench,
          title: "Emergency Repairs",
          description: "24/7 emergency repair and maintenance services"
        },
        {
          icon: FaCog,
          title: "Equipment Optimization",
          description: "Performance enhancement and efficiency improvement"
        }
      ],
      process: [
        {
          step: "01",
          title: "Inspection",
          description: "Thorough equipment inspection and assessment"
        },
        {
          step: "02",
          title: "Planning",
          description: "Maintenance planning and scheduling"
        },
        {
          step: "03",
          title: "Execution",
          description: "Professional maintenance and repair execution"
        },
        {
          step: "04",
          title: "Verification",
          description: "Quality verification and performance testing"
        }
      ],
      stats: [
        { value: "100+", label: "Projects Completed" },
        { value: "97%", label: "Client Satisfaction" },
        { value: "24/7", label: "Emergency Support" },
        { value: "15+", label: "Years Experience" }
      ]
    }
  };

  const currentServiceData = serviceData[slug] || serviceData["fire-protection"];

  return (
    <>
      <Helmet>
        <title>{service.title} - Safety Expertise</title>
        <meta name="description" content={service.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${currentServiceData.heroImage})`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Services
                </Link>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
                {service.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12 font-semibold drop-shadow-lg">
                {service.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {currentServiceData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-3xl md:text-4xl font-black text-red-500 mb-2 drop-shadow-lg">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white font-semibold drop-shadow-md">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Features */}
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
                  Our Expertise
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We <span className="text-primary">Provide</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions tailored to your specific needs with professional expertise and proven results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentServiceData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group text-center"
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

        {/* Service Process */}
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
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A systematic approach to delivering excellence in every project we undertake.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentServiceData.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Connection Line */}
                  {index < currentServiceData.process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary/20 z-0"></div>
                  )}

                  <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Tabs */}
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
                Service <span className="text-primary">Details</span>
              </h2>
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
                onClick={() => setActiveTab("overview")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "overview"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaEye className="w-5 h-5" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setActiveTab("features")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "features"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaCheckCircle className="w-5 h-5" />
                <span>Features</span>
              </button>

              <button
                onClick={() => setActiveTab("benefits")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === "benefits"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaStar className="w-5 h-5" />
                <span>Benefits</span>
              </button>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Service Overview
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      {service.descriptionPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        Why Choose This Service?
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-3">
                          <FaMedal className="w-5 h-5 text-primary" />
                          <span className="text-gray-700">Professional installation and setup</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaClock className="w-5 h-5 text-primary" />
                          <span className="text-gray-700">Ongoing maintenance and support</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaShieldAlt className="w-5 h-5 text-primary" />
                          <span className="text-gray-700">Compliance with safety standards</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <FaUsers className="w-5 h-5 text-primary" />
                          <span className="text-gray-700">Local expertise and knowledge</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === "features" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentServiceData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-8"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "benefits" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Key Benefits
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: FaShieldAlt,
                          title: "Enhanced Safety",
                          description: "Comprehensive safety solutions that protect your people and assets"
                        },
                        {
                          icon: FaRocket,
                          title: "Improved Efficiency",
                          description: "Optimized systems and processes for better performance"
                        },
                        {
                          icon: FaAward,
                          title: "Compliance Guaranteed",
                          description: "Full compliance with safety standards"
                        },
                        {
                          icon: FaHandshake,
                          title: "Expert Support",
                          description: "Professional support and maintenance services"
                        }
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">
                        Get Started Today
                      </h4>
                      <p className="text-gray-600 mb-8">
                        Ready to enhance your safety standards? Contact our experts to discuss your specific requirements and get a customized quote.
                      </p>
                      <div className="space-y-4">
                        <Link 
                          to="/contact"
                          className="block w-full bg-primary text-white text-center py-4 rounded-xl hover:bg-[#134271] transition-colors font-semibold"
                        >
                          Book This Service
                        </Link>
                        <Link 
                          to="/contact"
                          className="block w-full bg-white text-primary text-center py-4 rounded-xl border border-primary hover:bg-primary hover:text-white transition-colors font-semibold"
                        >
                          Request a Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Related Services */}
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
                Other <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our complete range of safety solutions to find the perfect fit for your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services
                .filter((s) => s.slug !== slug)
                .map((relatedService, index) => (
                  <motion.div
                    key={relatedService.slug}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={relatedService.imageUrl}
                        alt={relatedService.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {relatedService.description}
                      </p>
                      <Link
                        to={`/services/${relatedService.slug}`}
                        className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300"
                      >
                        Learn More
                        <FaArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Get Started?"
          subtitle={`Contact our team today to discuss your safety requirements and get a customized quote for ${service.title}.`}
          primaryButton={{ text: "Contact Us", href: "/contact" }}
          secondaryButton={{ text: "Request Quote", href: "/contact" }}
        />
      </main>
    </>
  );
};

export default ServiceDetail;
