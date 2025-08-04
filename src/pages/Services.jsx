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
} from "react-icons/fa";

const Services = () => {
  const serviceIcons = [FaShieldAlt, FaTools, FaCog];

  return (
    <>
      <Helmet>
        <title>Our Services - Safety Expertise</title>
        <meta
          name="description"
          content="Comprehensive safety solutions including installation, maintenance, and compliance services. Professional safety equipment and system solutions across Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <PageHero
          title="Our Services"
          subtitle="Comprehensive safety solutions designed to protect your people, assets, and operations."
          badge="PROFESSIONAL SAFETY SOLUTIONS"
          features={["Installation", "Maintenance", "Compliance"]}
        />

        {/* Services Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Safety Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From installation to maintenance, we provide end-to-end safety
                services tailored to your specific industry and requirements.
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

        {/* Service Features */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with local knowledge to deliver
                exceptional safety solutions.
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
                  From initial assessment to ongoing maintenance, we provide
                  complete safety solutions that cover all aspects of your
                  needs.
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
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional safety solutions
                tailored to your needs.
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
          subtitle="Contact our team today to discuss your safety requirements and get a customized quote for your project."
          primaryButton={{ text: "Contact Our Team", href: "/contact" }}
          secondaryButton={{ text: "View Our Projects", href: "/projects" }}
        />
      </main>
    </>
  );
};

export default Services;
