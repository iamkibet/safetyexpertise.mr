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
} from "react-icons/fa";

const Services = () => {
  const serviceIcons = [FaShieldAlt, FaTools, FaCog];

  const buildingMaintenanceServices = [
    {
      icon: FaThermometerHalf,
      title: "Air Conditioning Systems",
      description:
        "Regular servicing, filter replacements, coil cleaning, and efficiency optimization for reliable performance.",
      image: "/images/13.png",
    },
    {
      icon: FaWater,
      title: "Solar Water Heaters & Plumbing",
      description:
        "Full maintenance of solar panels, hot water tanks, valves, pressure systems, and pipe servicing.",
      image: "/images/15.png",
    },
    {
      icon: FaWater,
      title: "Water Systems & Reservoirs",
      description:
        "Comprehensive maintenance of water supply, drainage systems, tank cleaning, and structural inspections.",
      image: "/images/16.png",
    },
    {
      icon: FaBolt,
      title: "Electrical Systems",
      description:
        "System inspections, safety checks, performance testing, lighting upkeep, and emergency system maintenance.",
      image: "/images/17.png",
    },
    {
      icon: FaGenerator,
      title: "Generator Services",
      description:
        "Routine engine checks, fuel monitoring, filter changes, battery testing, and load testing.",
      image: "/images/18.png",
    },
    {
      icon: FaWrench,
      title: "Sewage & Odor Management",
      description:
        "Sewage network cleaning, ventilation checks, deodorization, and bio-treatment services.",
      image: "/images/12.png",
    },
    {
      icon: FaHammer,
      title: "Carpentry & Aluminum Works",
      description:
        "Repair and installation of doors, cabinets, furniture, aluminum structures, and office partitions.",
      image: "/images/14.png",
    },
    {
      icon: FaBug,
      title: "Pest Control & Garbage Disposal",
      description:
        "Routine inspection, targeted treatment plans, eco-friendly solutions, and waste management.",
      image: "/images/13.png",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Safety Expertise</title>
        <meta
          name="description"
          content="Comprehensive safety solutions including fire protection, building maintenance, electrical systems, HVAC, plumbing, and compliance services across Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <PageHero
          title="Our Services"
          subtitle="Comprehensive safety and building maintenance solutions designed to protect your people, assets, and operations."
          badge="PROFESSIONAL SAFETY SOLUTIONS"
          features={["Fire Protection", "Building Maintenance", "Compliance"]}
        />

        {/* Fire Protection Services */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                FIRE PROTECTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Fire Protection Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive fire protection for high-risk
                industries, ensuring reliable safety for equipment, facilities,
                and personnel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = serviceIcons[index] || FaShieldAlt;
                return (
                  <div key={service.slug} className="group">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      imageUrl={service.imageUrl}
                      slug={service.slug}
                      className="group-hover:transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Building Maintenance Services */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
                BUILDING MAINTENANCE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Building Maintenance Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional maintenance services for commercial, residential,
                and industrial facilities across Mauritania.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {buildingMaintenanceServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
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

        {/* Service Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with local knowledge to deliver
                exceptional safety and maintenance solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShieldAlt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Certified Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team holds industry certifications and follows
                  international safety standards to ensure the highest quality
                  service delivery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaTools className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Comprehensive Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From fire protection to building maintenance, we provide
                  complete solutions that cover all aspects of your needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Local Knowledge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep understanding of Mauritanian regulations and local
                  business requirements ensures compliance and effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional safety and
                maintenance solutions tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Assessment
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive evaluation of your safety requirements and
                  existing systems.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Planning
                </h3>
                <p className="text-gray-600 text-sm">
                  Detailed planning and design of safety solutions tailored to
                  your specific needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Implementation
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional installation and setup of all safety equipment
                  and systems.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Maintenance
                </h3>
                <p className="text-gray-600 text-sm">
                  Ongoing maintenance and support to ensure continued safety
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Get Started?"
          subtitle="Contact our team today to discuss your safety and maintenance requirements and get a customized quote for your project."
          primaryButton={{ text: "Contact Our Team", href: "/contact" }}
          secondaryButton={{ text: "View Our Projects", href: "/projects" }}
        />
      </main>
    </>
  );
};

export default Services;
