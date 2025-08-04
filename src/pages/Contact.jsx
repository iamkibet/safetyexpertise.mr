import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { contactInfo } from "../data";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Safety Expertise</title>
        <meta
          name="description"
          content="Get in touch with Safety Expertise for all your safety equipment and compliance needs. Located in Nouakchott, Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <PageHero
          title="Contact Us"
          subtitle={contactInfo.tagline}
          badge="GET IN TOUCH"
          features={["24/7 Support", "Expert Consultation", "Quick Response"]}
        />

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We're here to help you with all your safety equipment and
                    compliance needs. Contact us today to discuss your
                    requirements and get a customized quote.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Our Location
                      </h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Phone
                      </h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Company Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>RC:</strong> {contactInfo.rc}
                    </p>
                    <p>
                      <strong>NIF:</strong> {contactInfo.nif}
                    </p>
                    <p>
                      <strong>Established:</strong> 2010
                    </p>
                    <p>
                      <strong>Service Area:</strong> Mauritania
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-xl text-gray-600">
                Visit our office in Nouakchott for a face-to-face consultation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FaGlobe className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Nouakchott, Mauritania</p>
                  <p className="text-xs mt-2">
                    Map integration would be added here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our services and processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How quickly can you respond to emergency requests?
                </h3>
                <p className="text-gray-600">
                  We provide 24/7 emergency response services for critical
                  safety issues. Our team can typically respond within 2-4 hours
                  for urgent situations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you provide maintenance contracts?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive maintenance contracts that include
                  regular inspections, testing, and preventive maintenance for
                  all safety equipment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What areas do you serve?
                </h3>
                <p className="text-gray-600">
                  We primarily serve Nouakchott and surrounding areas in
                  Mauritania. For larger projects, we can extend our services to
                  other regions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How do you ensure compliance with local regulations?
                </h3>
                <p className="text-gray-600">
                  Our team stays updated with all local and international safety
                  regulations. We ensure all installations and maintenance meet
                  current compliance standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Get Started?"
          subtitle="Don't wait to enhance your safety standards. Contact us today for a consultation and customized quote for your safety needs."
          primaryButton={{ text: "Call Now", href: "tel:+222-3694-9611" }}
          secondaryButton={{
            text: "Send Email",
            href: "mailto:operations@safetyexpertise.mr",
          }}
        />
      </main>
    </>
  );
};

export default Contact;
