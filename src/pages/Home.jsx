import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
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
} from "react-icons/fa";

const Home = () => {
  const whyUsFeatures = [
    {
      icon: FaShieldAlt,
      title: "Certified Expertise",
      description:
        "Our team holds NFPA and OSHA certifications with over 15 years of field experience.",
    },
    {
      icon: FaUsers,
      title: "Client-Centric Approach",
      description:
        "We tailor solutions to your specific needs with dedicated account managers.",
    },
    {
      icon: FaGlobe,
      title: "Local & Global Standards",
      description:
        "Combining Mauritanian regulations with international best practices.",
    },
    {
      icon: FaChartLine,
      title: "Proven Results",
      description:
        "97% client satisfaction rate and 45% reduction in safety incidents for our clients.",
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

  const complianceCertifications = [
    {
      name: "NFPA Certification",
      description: "National Fire Protection Association Standards",
      image: "/images/compliance/nfpa.png",
      icon: FaShieldAlt,
      status: "Active",
    },
    {
      name: "OSHA Compliance",
      description: "Occupational Safety and Health Administration",
      image: "/images/compliance/osha.webp",
      icon: FaCertificate,
      status: "Certified",
    },
    {
      name: "ISO 45001",
      description: "Occupational Health and Safety Management",
      image: "/images/compliance/iso.png",
      icon: FaAward,
      status: "Certified",
    },
    {
      name: "Local Regulations",
      description: "Mauritanian Safety Standards Compliance",
      image: "/images/compliance/fpaaustralia.png",
      icon: FaCheckCircle,
      status: "Compliant",
    },
    {
      name: "Quality Management",
      description: "ISO 9001 Quality Management System",
      image: "/images/compliance/certified.webp",
      icon: FaMedal,
      status: "Certified",
    },
    {
      name: "Environmental Standards",
      description: "ISO 14001 Environmental Management",
      image: "/images/compliance/certified.webp",
      icon: FaClipboardCheck,
      status: "Certified",
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
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR SERVICES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive{" "}
                <span className="text-primary">Safety Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From fire protection to building maintenance, we deliver
                complete safety solutions tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <div key={service.slug} className="group">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                    slug={service.slug}
                    className="group-hover:transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR ADVANTAGE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why <span className="text-primary">Safety Expertise</span>{" "}
                Stands Out
              </h2>
              <p className="text-xl text-gray-600">
                We combine local expertise with international standards to
                deliver exceptional safety solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>

            {/* Stats section */}
            <div className="mt-16 bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "500+", label: "Projects Completed" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
          {/* Background Pattern with Red Accents */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("/images/14.png")`,
              }}
            />
          </div>

          {/* Floating Red Accent Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/15 rounded-full blur-lg"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-accent to-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR FOUNDATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Core Values That Guide Us
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The principles that shape our work and client relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-red-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      {index === 0 && (
                        <FaHandshake className="w-6 h-6 text-white" />
                      )}
                      {index === 1 && (
                        <FaMedal className="w-6 h-6 text-white" />
                      )}
                      {index === 2 && (
                        <FaLightbulb className="w-6 h-6 text-white" />
                      )}
                      {index === 3 && (
                        <FaClipboardCheck className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Red Accent Line */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial with Red Accents */}
            <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              {/* Red Accent Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/15 rounded-full blur-xl"></div>

              <div className="flex items-start relative z-10">
                <div className="relative">
                  <FaQuoteRight className="text-accent text-4xl mr-4 mt-1 flex-shrink-0" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-60"></div>
                </div>
                <div>
                  <p className="text-xl italic mb-4">
                    "Safety Expertise transformed our facility's safety
                    protocols with their comprehensive approach. Their team's
                    professionalism and attention to detail exceeded our
                    expectations."
                  </p>
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src="/images/14.png"
                        alt="Client"
                        className="w-12 h-12 rounded-xl object-cover border-2 border-accent/30"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-4">
                      <div className="font-bold">Mohamed El Bechir Meske</div>
                      <div className="text-blue-200">
                        Managing Director, Safety Expertise.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Certifications */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                CERTIFICATIONS & COMPLIANCE
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Our Commitment to Excellence
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                We maintain the highest standards of safety and quality through
                comprehensive certifications and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cert.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : cert.status === "Certified"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <cert.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {cert.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Verified & Current</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Stats */}
            <div className="mt-16 bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">6+</div>
                  <div className="text-blue-100">Active Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Audit Ready</div>
                </div>
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
