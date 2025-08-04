import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { compliance } from "../data";
import {
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaShieldAlt,
} from "react-icons/fa";

const Compliance = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Compliance & Certifications - Safety Expertise</title>
        <meta
          name="description"
          content="Safety Expertise maintains full compliance with international safety standards including OSHA, ISO 45001, and local Mauritanian regulations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Compliance & Certifications
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We maintain the highest standards of safety compliance and hold
              all necessary certifications to serve our clients effectively.
            </p>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Commitment to Compliance
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Safety Expertise, we understand that compliance is not just
                  about meeting regulatory requirements—it's about ensuring the
                  safety and well-being of everyone involved in our projects.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We maintain rigorous standards that exceed both international
                  and local requirements, ensuring that our clients receive the
                  highest quality safety solutions while meeting all necessary
                  compliance standards.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShieldAlt className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Certified Excellence
                  </h3>
                  <p className="text-gray-600">
                    Our certifications demonstrate our commitment to maintaining
                    the highest standards of safety and quality in all our
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Compliance Standards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We adhere to international safety standards while ensuring full
                compliance with local Mauritanian regulations.
              </p>
            </div>

            <div className="space-y-4">
              {compliance.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="ml-4">
                      {openAccordion === index ? (
                        <FaChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <FaChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>

                  {openAccordion === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Certification Details
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                              <li>• Valid certification period</li>
                              <li>• Regular audits and assessments</li>
                              <li>• Continuous improvement processes</li>
                              <li>• Staff training and development</li>
                            </ul>
                          </div>
                          <a
                            href={item.pdfUrl}
                            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                            download
                          >
                            <FaDownload className="mr-2" />
                            Download Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Certifications */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond our core compliance standards, we maintain additional
                certifications that demonstrate our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality Management
                </h3>
                <p className="text-gray-600">
                  ISO 9001 certified quality management system ensuring
                  consistent service delivery.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Environmental Standards
                </h3>
                <p className="text-gray-600">
                  ISO 14001 environmental management system for sustainable
                  operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Training Certifications
                </h3>
                <p className="text-gray-600">
                  Certified training programs for safety equipment operation and
                  maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Compliance Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to maintaining and exceeding compliance
                standards.
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
                  Regular evaluation of compliance requirements and current
                  standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Implementation
                </h3>
                <p className="text-gray-600">
                  Systematic implementation of required safety measures and
                  procedures.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Monitoring
                </h3>
                <p className="text-gray-600">
                  Continuous monitoring and evaluation of compliance
                  effectiveness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Improvement
                </h3>
                <p className="text-gray-600">
                  Ongoing improvement and updates to exceed compliance
                  standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Compliance Support?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our certified experts help you achieve and maintain the
              highest safety compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Our Team
              </a>
              <a href="/services" className="btn-primary text-lg px-8 py-4">
                Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Compliance;
