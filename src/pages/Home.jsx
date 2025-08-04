import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { services, values, clientLogos, contactInfo } from "../data";
import { FaShieldAlt, FaTools, FaUsers, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const whyUsFeatures = [
    {
      icon: FaShieldAlt,
      title: "Certified Safety Experts",
      description:
        "Our team holds industry certifications and follows international safety standards.",
    },
    {
      icon: FaTools,
      title: "Comprehensive Solutions",
      description:
        "From installation to maintenance, we provide end-to-end safety services.",
    },
    {
      icon: FaUsers,
      title: "Local Expertise",
      description:
        "Deep understanding of Mauritanian regulations and local business needs.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Safety Expertise - Reliable. Preventive. Professional.</title>
        <meta
          name="description"
          content="Your trusted partner in industrial safety solutions across Mauritania. We provide comprehensive safety equipment installation, maintenance, and compliance services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Overview */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive safety solutions tailored to your specific needs
                and industry requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  slug={service.slug}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="primary" className="text-lg px-8 py-4">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Safety Expertise?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine local expertise with international standards to
                deliver exceptional safety solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyUsFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The principles that guide our work and relationships with
                clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-blue-100 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Enhance Your Safety?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {contactInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="text-lg px-8 py-4">
                Request a Quote
              </Button>
              <Button variant="primary" className="text-lg px-8 py-4">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Trusted by Leading Companies
              </h3>
              <p className="text-gray-600">
                We've helped businesses across Mauritania maintain the highest
                safety standards.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-24 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-gray-400 font-semibold text-sm">
                      Client {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
