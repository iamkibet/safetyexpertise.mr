import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { compliance } from "../data";
import { 
  FaShieldAlt, 
  FaChevronDown, 
  FaChevronUp, 
  FaCertificate, 
  FaCheckCircle,
  FaAward,
  FaMedal
} from "react-icons/fa";

const Compliance = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const certifications = [
    {
      name: "NFPA Certification",
      description: "National Fire Protection Association Standards",
      image: "/images/compliance/nfpa.png",
      status: "Active",
      category: "Fire Safety"
    },
    {
      name: "OSHA Compliance",
      description: "Occupational Safety and Health Administration",
      image: "/images/compliance/osha.webp",
      status: "Certified",
      category: "Workplace Safety"
    },
    {
      name: "ISO 45001",
      description: "Occupational Health and Safety Management",
      image: "/images/compliance/iso.png",
      status: "Certified",
      category: "Quality Management"
    },
    {
      name: "Local Standards",
      description: "Mauritanian Industrial Safety Regulations",
      image: "/images/compliance/fpaaustralia.png",
      status: "Compliant",
      category: "Regulatory"
    },
    {
      name: "Quality Management",
      description: "ISO 9001 Quality Management System",
      image: "/images/compliance/certified.webp",
      status: "Certified",
      category: "Quality Management"
    },
    {
      name: "Environmental Standards",
      description: "ISO 14001 Environmental Management",
      image: "/images/compliance/certified.webp",
      status: "Certified",
      category: "Environmental"
    }
  ];

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
        <PageHero
          title="Compliance & Certifications"
          subtitle="We maintain the highest standards of safety compliance and hold all necessary certifications to serve our clients effectively."
          badge="CERTIFIED EXCELLENCE"
          features={["OSHA Standards", "ISO 45001", "Local Regulations"]}
        />

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

        {/* Certifications Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                CERTIFICATIONS & COMPLIANCE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meeting the Highest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Safety Standards
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our comprehensive certifications and compliance with international standards 
                ensure your operations meet the highest safety requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        {cert.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <FaCertificate className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {cert.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {cert.category}
                      </span>
                      <FaCheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Stats */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                  <div className="text-blue-100 font-medium">Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
                  <div className="text-blue-100 font-medium">Active Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100 font-medium">Audit Ready</div>
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
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Certification Details
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">
                            This certification ensures that our safety practices
                            meet or exceed the established standards for
                            workplace safety and health management.
                          </p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-600">
                                Valid until: 2025
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-600">
                                Annual renewal
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quality Assurance Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive quality assurance process ensures that every
                project meets the highest standards of safety and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Initial Assessment
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive evaluation of safety requirements and existing
                  compliance status.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Implementation
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional installation and setup of safety systems
                  according to compliance standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Ongoing Monitoring
                </h3>
                <p className="text-gray-600 text-sm">
                  Regular inspections and maintenance to ensure continued
                  compliance and safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Ensure Compliance?"
          subtitle="Let's discuss how our certified expertise can help your organization meet and exceed safety compliance requirements."
          primaryButton={{ text: "Contact Our Team", href: "/contact" }}
          secondaryButton={{ text: "Explore Services", href: "/services" }}
        />
      </main>
    </>
  );
};

export default Compliance;
