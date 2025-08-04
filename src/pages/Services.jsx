import React from "react";
import { Helmet } from "react-helmet";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { FaCog, FaTools, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  const serviceIcons = [FaCog, FaTools, FaShieldAlt];

  return (
    <>
      <Helmet>
        <title>Our Services - Safety Expertise</title>
        <meta
          name="description"
          content="Comprehensive safety services including fixed installation, mobile equipment, industrial maintenance, and more. Expert safety solutions across Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive safety solutions designed to protect your people,
              assets, and operations.
            </p>
          </div>
        </section>

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

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional safety
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Assessment
                </h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of your current safety systems and
                  requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Planning
                </h3>
                <p className="text-gray-600">
                  Customized safety solution design tailored to your specific
                  needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Implementation
                </h3>
                <p className="text-gray-600">
                  Professional installation and setup of safety equipment and
                  systems.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Maintenance
                </h3>
                <p className="text-gray-600">
                  Ongoing support, monitoring, and maintenance to ensure
                  continued safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your safety requirements and get
              a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Request a Quote
              </a>
              <a href="/projects" className="btn-primary text-lg px-8 py-4">
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
