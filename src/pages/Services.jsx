import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
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
} from "react-icons/fa";

const Services = () => {
  const serviceIcons = [FaShieldAlt, FaTools, FaCog];

  const fireProtectionServices = [
    {
      icon: FaFire,
      title: "Fire Detection & Alarm Systems",
      description:
        "Professional installation and maintenance of advanced fire detection and alarm systems for industrial facilities.",
      image: "/images/safety1.png",
    },
    {
      icon: FaExclamationTriangle,
      title: "Automatic Fire Suppression",
      description:
        "State-of-the-art automatic fire suppression systems including sprinklers, foam systems, and gas suppression.",
      image: "/images/15.png",
    },
    {
      icon: FaShieldAlt,
      title: "Fire Extinguisher Services",
      description:
        "Supply, installation, and regular maintenance of fire extinguishers and emergency response equipment.",
      image: "/images/16.png",
    },
    {
      icon: FaBolt,
      title: "Emergency Lighting & Exit Signs",
      description:
        "Installation and maintenance of emergency lighting systems and exit signage for safety compliance.",
      image: "/images/17.png",
    },
    {
      icon: FaHardHat,
      title: "Fire Safety Training",
      description:
        "Comprehensive fire safety training and certification programs for industrial personnel.",
      image: "/images/18.png",
    },
    {
      icon: FaCheckCircle,
      title: "Inspection & Compliance Testing",
      description:
        "Regular inspection, testing, and compliance verification for all fire protection systems.",
      image: "/images/12.png",
    },
  ];

  const industrialMaintenanceServices = [
    {
      icon: FaIndustry,
      title: "AFEX Mobile Mining Equipment",
      description:
        "Specialized maintenance and repair services for AFEX mobile mining equipment, ensuring optimal performance and safety.",
      image: "/images/background2.jpg",
    },
    {
      icon: FaTruck,
      title: "ICAT Mining Equipment Maintenance",
      description:
        "Comprehensive maintenance programs for ICAT mobile mining equipment fleet with 24/7 emergency support.",
      image: "/images/13.png",
    },
    {
      icon: FaCogs,
      title: "Preventive Maintenance Programs",
      description:
        "Scheduled preventive maintenance for industrial machinery and mobile equipment to prevent breakdowns.",
      image: "/images/14.png",
    },
    {
      icon: FaWrench,
      title: "Corrective Repairs & Emergency Service",
      description:
        "Rapid response corrective repairs and emergency maintenance services for critical equipment failures.",
      image: "/images/15.png",
    },
    {
      icon: FaTools,
      title: "Equipment Optimization",
      description:
        "Performance enhancement and optimization services for industrial equipment and mobile mining machinery.",
      image: "/images/16.png",
    },
    {
      icon: FaShieldAlt,
      title: "Safety Compliance",
      description:
        "Safety compliance monitoring and certification for mobile mining equipment and industrial machinery.",
      image: "/images/17.png",
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
          description="Comprehensive fire safety solutions and specialized industrial maintenance services, including AFEX - ICAT mobile mining equipment maintenance."
        />

        {/* Main Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in two main service areas: comprehensive fire
                protection solutions and professional industrial maintenance,
                with particular expertise in AFEX - ICAT mobile mining
                equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Fire Protection Services Detail */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fire Protection Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive fire safety solutions designed to protect your
                facility, equipment, and personnel with the highest standards of
                safety and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fireProtectionServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Maintenance Services Detail */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industrial Maintenance & Mobile Equipment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized maintenance services for industrial equipment and
                mobile mining machinery, with particular expertise in AFEX -
                ICAT mobile mining equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrialMaintenanceServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Safety Expertise?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine decades of experience with cutting-edge technology to
                deliver exceptional fire protection and industrial maintenance
                services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Certified Expertise
                </h3>
                <p className="text-gray-600">
                  Certified professionals with specialized training in fire
                  protection and mobile equipment maintenance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTools className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AFEX - ICAT Specialists
                </h3>
                <p className="text-gray-600">
                  Specialized expertise in AFEX - ICAT mobile mining equipment
                  maintenance and repair.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Emergency Support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock emergency maintenance and fire protection
                  support for critical operations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Compliance Guaranteed
                </h3>
                <p className="text-gray-600">
                  Full compliance with international fire protection standards
                  and mobile equipment safety regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Protect Your Operations?"
          subtitle="Get professional fire protection and industrial maintenance services"
          description="Contact us today for a comprehensive assessment of your fire protection needs and mobile equipment maintenance requirements."
          buttonText="Get Free Consultation"
          buttonLink="/contact"
        />
      </main>
    </>
  );
};

export default Services;
