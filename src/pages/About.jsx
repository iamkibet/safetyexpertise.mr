import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import {
  FaShieldAlt,
  FaEye,
  FaAward,
  FaLightbulb,
  FaCheckCircle,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaCog,
  FaTools,
  FaBuilding,
  FaClock,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaQuoteLeft,
  FaGlobe,
  FaIndustry,
  FaFireExtinguisher,
  FaHardHat,
} from "react-icons/fa";

const About = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "97%", label: "Client Satisfaction" },
    { value: "24/7", label: "Emergency Support" },
  ];

  const teamMembers = [
    {
      name: "Safety Experts",
      role: "Fire Protection Specialists",
      image: "/images/afex/1.png",
      description: "Certified professionals with NFPA and OSHA certifications"
    },
    {
      name: "Maintenance Team",
      role: "Building Maintenance Division",
      image: "/images/afex/2.png",
      description: "Skilled technicians delivering tailored services"
    },
    {
      name: "AFEX Specialists",
      role: "ICAT Mobile Equipment",
      image: "/images/afex/3.png",
      description: "Specialized expertise in mining equipment maintenance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Safety Expertise</title>
        <meta
          name="description"
          content="Learn about Safety Expertise's mission, vision, and building maintenance division. We are committed to providing reliable, preventive, and professional safety solutions across Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section with Parallax */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('/images/bg3.jpg')`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-white/30 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/50 shadow-lg">
                <span className="text-white text-base font-bold tracking-wider">
                  ESTABLISHED 2010
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight drop-shadow-2xl text-white">
                About <span className="text-red-500 drop-shadow-lg">Safety Expertise</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12 font-semibold drop-shadow-lg">
                Your trusted partner in fire protection and industrial maintenance, 
                specializing in AFEX - ICAT mobile mining equipment across Mauritania.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-3xl md:text-4xl font-black text-red-500 mb-2 drop-shadow-lg">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white font-semibold drop-shadow-md">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center mb-6">
                    <span className="h-0.5 w-12 bg-primary mr-3"></span>
                    <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                      Our Mission
                    </span>
                    <span className="h-0.5 w-12 bg-primary ml-3"></span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Delivering <span className="text-primary">Efficient</span> and Safe Solutions
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Delivering efficient and safe maintenance solutions tailored to every client's infrastructure.
                  </p>

                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border-l-4 border-primary">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaShieldAlt className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
                        <p className="text-gray-600">
                          Every solution we deliver prioritizes the safety and well-being of your team and assets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <motion.img
                    src="/images/about.jpg"
                    alt="Safety Expertise Team"
                    className="rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating Stats Card */}
                  <motion.div
                    className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <FaStar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-sm text-gray-600">Years of Excellence</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Are Section with Parallax */}
        <section className="py-24 relative overflow-hidden">
          {/* Parallax Background */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('/images/background1.png')`,
            }}
          >
            <div className="absolute inset-0 bg-primary/90"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="h-0.5 w-12 bg-white mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-white uppercase">
                  Who We Are
                </span>
                <span className="h-0.5 w-12 bg-white ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                A Trusted Leader in <span className="text-accent">Professional Solutions</span>
              </h2>

              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                A trusted leader in professional maintenance solutions in Mauritania, 
                delivering excellence across commercial, residential, and industrial facilities.
              </p>
            </motion.div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {index === 0 && <FaFireExtinguisher className="w-10 h-10 text-white" />}
                      {index === 1 && <FaBuilding className="w-10 h-10 text-white" />}
                      {index === 2 && <FaIndustry className="w-10 h-10 text-white" />}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-accent font-semibold mb-4">{member.role}</p>
                    <p className="text-blue-100 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Building Maintenance Division */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center mb-6">
                    <span className="h-0.5 w-12 bg-primary mr-3"></span>
                    <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                      Building Maintenance Division
                    </span>
                    <span className="h-0.5 w-12 bg-primary ml-3"></span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Dedicated Team for <span className="text-primary">Tailored Services</span>
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Dedicated team delivering tailored services across commercial, residential, and industrial buildings.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Preventive and corrective strategies to optimize building performance",
                      "Reduce disruptions and resolve issues early",
                      "Ensure safe, efficient facility operation",
                      "24/7 service with skilled technicians",
                      "Tailored plans for reliable, cost-effective solutions"
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Link
                      to="/services"
                      className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-[#134271] transition-colors shadow-lg hover:shadow-xl"
                    >
                      Explore Our Services
                      <FaArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Image Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.img
                    src="/images/afex/7.jpg"
                    alt="Commercial Building Maintenance"
                    className="rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src="/images/afex/6.jpg"
                    alt="Industrial Maintenance"
                    className="rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <motion.div
                  className="space-y-4 pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.img
                    src="/images/afex/3.jpg"
                    alt="Residential Maintenance"
                    className="rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src="/images/afex/2.jpg"
                    alt="Safety Systems"
                    className="rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaQuoteLeft className="w-16 h-16 text-primary mx-auto mb-8 opacity-20" />
              
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-relaxed">
                "At Safety Expertise, we use preventive and corrective strategies to optimize building performance, 
                reduce disruptions, and resolve issues early to ensure safe, efficient facility operation."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaHardHat className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">Safety Expertise Team</div>
                  <div className="text-sm text-gray-600">Professional Maintenance Solutions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Enhance Your Safety Standards?"
          subtitle="Contact us today for a comprehensive safety assessment of your facility."
          primaryButton={{ text: "Request a Quote", href: "/contact" }}
          secondaryButton={{ text: "Contact Us", href: "/contact" }}
        />
      </main>
    </>
  );
};

export default About;
