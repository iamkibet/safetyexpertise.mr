import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaCog,
  FaChevronDown,
  FaComment,
  FaShieldAlt,
  FaClock
} from "react-icons/fa";

const CTA = ({
  title = "Ready to Elevate Safety and Performance?",
  subtitle = "Contact us today for a comprehensive safety assessment.",
  primaryButton = { text: "Request a Quote", href: "/contact" },
  secondaryLink = { text: "Learn More About Us", href: "/about" },
  imageUrl = "/images/cta.png",
  className = "",
}) => {
  return (
    <section className={`py-24 relative overflow-hidden ${className}`}>
      {/* Background with transparent image overlay */}
      <div className="absolute inset-0 bg-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/images/background1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center mb-5">
                <motion.span
                  className="h-0.5 w-12 bg-primary mr-3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                ></motion.span>
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Get Expert Advice
                </span>
                <motion.span
                  className="h-0.5 w-12 bg-primary ml-3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                ></motion.span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {title}
            </motion.h2>

            {/* Body Text */}
            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contact us today for a comprehensive assessment of your facility. Our experts will help you strengthen protection, optimize efficiency, and ensure reliable operations. To discover more about our capabilities and track record,{' '}
              <a 
                href="#about" 
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors duration-200 font-medium"
              >
                visit our About section above
              </a>.
            </motion.p>




          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full max-w-2xl lg:max-w-3xl">
              {/* Contact Form Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full blur-xl"></div>

                {/* Form Header */}
                <div className="text-center mb-6 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <FaPhone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Get Started Today</h3>
                  <p className="text-sm text-gray-600">Request your free safety assessment</p>
                </div>

                {/* Contact Form */}
                <form className="space-y-4 relative z-10">
                  {/* First Row: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                          <FaUser className="h-4 w-4 text-gray-600" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                          <FaEnvelope className="h-4 w-4 text-gray-600" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second Row: Phone and Service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone Field */}
                    <div className="space-y-1">
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                          <FaPhone className="h-4 w-4 text-gray-600" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Service Type Field */}
                    <div className="space-y-1">
                      <label htmlFor="service" className="block text-xs font-medium text-gray-700">
                        Service Interest *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                          <FaCog className="h-4 w-4 text-gray-600" />
                        </div>
                        <select
                          id="service"
                          name="service"
                          required
                          className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none text-sm"
                        >
                          <option value="">Select a service</option>
                          <option value="mobile-equipment">Mobile Equipment Maintenance</option>
                          <option value="maintenance-engineering">Maintenance Engineering</option>
                          <option value="manpower-expertise">Manpower Expertise</option>
                          <option value="procurement-supply">Procurement & Supply</option>
                          <option value="transport-mobility">Transport & Mobility</option>
                          <option value="fire-protection">Fire Protection Systems</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <FaChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700">
                      Project Details
                    </label>
                    <div className="relative">
                      <div className="absolute top-2.5 left-3 flex items-start pointer-events-none z-10">
                        <FaComment className="h-4 w-4 text-gray-600 mt-0.5" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none text-sm"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:ring-4 focus:ring-primary/20 focus:outline-none mt-2"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Request Free Assessment</span>
                      <FaArrowRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FaShieldAlt className="w-3 h-3 text-green-500" />
                      <span>100% Secure</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock className="w-3 h-3 text-blue-500" />
                      <span>24h Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
