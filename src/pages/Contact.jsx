import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
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
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaCog,
  FaHardHat,
} from "react-icons/fa";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const contactStats = [
    { value: "24/7", label: "Emergency Support", icon: FaClock },
    { value: "15+", label: "Years Experience", icon: FaAward },
    { value: "97%", label: "Client Satisfaction", icon: FaStar },
    { value: "100+", label: "Projects Completed", icon: FaCheckCircle },
  ];

  const contactMethods = [
    {
      icon: FaPhone,
      title: "Call Us",
      value: contactInfo.phone,
      action: `tel:${contactInfo.phone}`,
      color: "bg-green-500",
      description: "Speak directly with our experts"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      color: "bg-blue-500",
      description: "Send us a detailed message"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: contactInfo.phone,
      action: `https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`,
      color: "bg-green-600",
      description: "Quick chat with our team"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency", hours: "24/7 Available" }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to emergency requests?",
      answer: "We provide 24/7 emergency response services for critical safety issues. Our team can typically respond within 2-4 hours for urgent situations."
    },
    {
      question: "Do you provide maintenance contracts?",
      answer: "Yes, we offer comprehensive maintenance contracts that include regular inspections, testing, and preventive maintenance for all safety equipment."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve Nouakchott and surrounding areas in Mauritania. For larger projects, we can extend our services to other regions."
    },
    {
      question: "How do you ensure compliance with local regulations?",
      answer: "Our team stays updated with all local and international safety regulations. We ensure all installations and maintenance meet current compliance standards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Safety Expertise</title>
        <meta
          name="description"
          content="Get in touch with Safety Expertise for fire protection services and mobile mining equipment maintenance. Located in Nouakchott, Mauritania."
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
          backgroundImage="/images/background2.jpg"
        />

       

        

        {/* Main Contact Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Contact Information
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We're here to help you with fire protection services and mobile mining equipment maintenance. 
                      Contact us today to discuss your requirements and get a customized quote.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Our Location
                        </h3>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaPhone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Phone
                        </h3>
                        <p className="text-gray-600">{contactInfo.phone}</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Email
                        </h3>
                        <p className="text-gray-600">{contactInfo.email}</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaClock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Business Hours
                        </h3>
                        <div className="space-y-1">
                          {businessHours.map((schedule, index) => (
                            <div key={index} className="flex justify-between">
                              <span className="text-gray-600">{schedule.day}:</span>
                              <span className="text-gray-900 font-medium">{schedule.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Company Information */}
                  <motion.div 
                    className="bg-primary/5 rounded-2xl p-6 border border-primary/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Company Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">RC:</span>
                        <p className="text-gray-600">{contactInfo.rc}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">NIF:</span>
                        <p className="text-gray-600">{contactInfo.nif}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Established:</span>
                        <p className="text-gray-600">2010</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Service Area:</span>
                        <p className="text-gray-600">Mauritania</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Contact Methods */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose your preferred method to contact us. We're here to help with all your safety and maintenance needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="text-lg font-semibold text-primary">{method.value}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find <span className="text-primary">Us</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Visit our office in Nouakchott for a face-to-face consultation and professional service.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-96 bg-gray-200 relative">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.789012345678!2d-15.9497!3d18.0799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA0JzQ3LjYiTiAxNcKwNTYnNTguOSJX!5e0!3m2!1sen!2smr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Safety Expertise Location"
                ></iframe>
                
                {/* Map Overlay with Address */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Safety Expertise</h3>
                      <p className="text-sm text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Common questions about our services and processes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Get Started?"
          subtitle="Don't wait to enhance your safety standards. Contact us today for a consultation and customized quote for your safety needs."
          primaryButton={{ text: "Call Now", href: `tel:${contactInfo.phone}` }}
          secondaryButton={{
            text: "Send Email",
            href: `mailto:${contactInfo.email}`,
          }}
        />
      </main>
    </>
  );
};

export default Contact;
