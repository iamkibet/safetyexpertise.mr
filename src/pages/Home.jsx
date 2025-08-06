import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-5">
                <span className="h-0.5 w-12 bg-primary mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Our Expertise
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advanced <span className="text-primary">Fire Protection</span>{" "}
                Solutions
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive safety systems engineered for modern facilities
                with precision installation and maintenance protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-5 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center font-medium text-primary hover:text-primary-dark transition-colors group"
                      >
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
              >
                View All Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 bg-gradient-to-b from-[#f8f8f8] to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center mb-5">
                <span className="h-0.5 w-12 bg-primary mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Our Competitive Edge
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why <span className="text-primary">SafetyExpertise</span> Excels
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Industry-leading expertise combined with cutting-edge technology
                for uncompromised fire safety solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#18558c] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    {feature.description}
                  </p>

                  <div className="mt-auto">
                    <div className="inline-flex items-center text-primary font-medium text-sm">
                      <span>Learn more</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modern Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "15+", label: "Years Experience", accent: true },
                { value: "500+", label: "Projects Completed", accent: false },
                { value: "98%", label: "Client Satisfaction", accent: true },
                { value: "24/7", label: "Support Available", accent: false },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center"
                >
                  <div
                    className={`text-4xl font-bold mb-2 ${
                      stat.accent ? "text-accent" : "text-primary"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-[#134271] transition-colors shadow-md hover:shadow-lg"
              >
                Get Your Safety Assessment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
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
        <section className="py-28 bg-gray-950 text-white relative overflow-hidden">
          {/* Abstract Gradient Background */}
          <div className="absolute inset-0">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-30"
              style={{
                background: `radial-gradient(circle at 20% 30%, ${"#ff3131"}33, transparent 25%), 
                   radial-gradient(circle at 80% 70%, ${"#18558c"}33, transparent 25%)`,
              }}
            ></div>

            {/* Geometric Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                        linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
              <div className="md:w-2/5">
                <span className="inline-block bg-gradient-to-r from-accent to-[#ff6b6b] text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
                  OUR PHILOSOPHY
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Built on Integrity, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Driven by Safety
                  </span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-lg">
                  Our core values define every solution we deliver and every
                  relationship we build in protecting what matters most.
                </p>

                <div className="flex items-center">
                  <div className="flex -space-x-3 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary border-2 border-gray-900"></div>
                    <div className="w-10 h-10 rounded-full bg-accent border-2 border-gray-900"></div>
                    <div className="w-10 h-10 rounded-full bg-blue-700 border-2 border-gray-900"></div>
                  </div>
                  <div className="text-gray-300">
                    <span className="block font-semibold">
                      Industry Certified Team
                    </span>
                    <span className="text-sm">
                      NFPA & ISO compliant professionals
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 relative">
                {/* Abstract 3D Shape */}
                <div className="relative w-full aspect-square max-w-xl mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 rounded-2xl border-2 border-primary/30 rotate-45"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/5 h-3/5 rounded-2xl bg-gradient-to-br from-primary to-primary/10 rotate-12"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2/5 h-2/5 rounded-xl bg-accent/80 rotate-[-25deg]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Decorative Lines */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-20"></div>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>

              {values.map((value, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-3xl backdrop-blur-sm bg-gradient-to-br ${
                    index % 4 === 0
                      ? "from-gray-900/50 to-gray-800/50 border border-gray-800"
                      : ""
                  } ${
                    index % 4 === 1
                      ? "from-primary/10 to-primary/5 border border-primary/20"
                      : ""
                  } ${
                    index % 4 === 2
                      ? "from-accent/10 to-accent/5 border border-accent/20"
                      : ""
                  } ${
                    index % 4 === 3
                      ? "from-gray-900/50 to-gray-800/50 border border-gray-800"
                      : ""
                  } transition-all duration-500 hover:shadow-xl hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                        index % 4 === 1
                          ? "bg-primary/20"
                          : index % 4 === 2
                          ? "bg-accent/20"
                          : "bg-gray-800"
                      }`}
                    >
                      <div
                        className={`text-2xl ${
                          index % 4 === 1
                            ? "text-primary"
                            : index % 4 === 2
                            ? "text-accent"
                            : "text-white"
                        }`}
                      >
                        {index === 0 && <FaHandshake />}
                        {index === 1 && <FaMedal />}
                        {index === 2 && <FaLightbulb />}
                        {index === 3 && <FaClipboardCheck />}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold mr-3">
                          {value.title}
                        </h3>
                        <div
                          className={`w-8 h-0.5 ${
                            index % 4 === 1
                              ? "bg-primary"
                              : index % 4 === 2
                              ? "bg-accent"
                              : "bg-gray-400"
                          }`}
                        ></div>
                      </div>
                      <p className="text-gray-300">{value.description}</p>

                      {/* Value Number */}
                      <div
                        className={`text-8xl font-black opacity-5 absolute bottom-2 right-4 ${
                          index % 4 === 1
                            ? "text-primary"
                            : index % 4 === 2
                            ? "text-accent"
                            : "text-white"
                        }`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/compliance/nfpa.png"
                  alt="Safety Certifications"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Certified Safety{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    Excellence
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We maintain full compliance with international safety
                  standards including NFPA, OSHA, and ISO certifications. Our
                  certified team ensures your operations meet the highest safety
                  requirements.
                </p>

                <Link
                  to="/compliance"
                  className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View All Certifications
                  <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-red-600 z-0"></div>
            <div className="absolute inset-0 bg-[url('/images/15.png')] opacity-20 z-10"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Enhance Your Safety?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a comprehensive safety assessment of your
                facility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-accent font-bold px-8 py-4 rounded-lg text-lg transition-all hover:bg-gray-100 hover:scale-[1.03] shadow-lg hover:shadow-xl flex items-center justify-center">
                  <FaPhone className="h-5 w-5 mr-2" />
                  Request a Quote
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:bg-white/10 hover:scale-[1.03] flex items-center justify-center">
                  <FaInfo className="h-5 w-5 mr-2" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
