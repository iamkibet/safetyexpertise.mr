import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { projects } from "../data";
import {
  FaFilter,
  FaTimes,
  FaArrowRight,
  FaShieldAlt,
  FaIndustry,
  FaBuilding,
  FaHome,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaClock,
  FaAward,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaFire,
  FaTools,
  FaCog,
  FaHardHat,
  FaPlay,
  FaQuoteLeft,
} from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: "all", name: "All Projects", icon: FaStar, count: projects.length },
    { id: "industrial", name: "Industrial", icon: FaIndustry, count: projects.filter(p => p.category === "industrial").length },
    { id: "commercial", name: "Commercial", icon: FaBuilding, count: projects.filter(p => p.category === "commercial").length },
    { id: "residential", name: "Residential", icon: FaHome, count: projects.filter(p => p.category === "residential").length },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const projectStats = [
    { value: "500+", label: "Projects Completed", icon: FaCheckCircle },
    { value: "97%", label: "Client Satisfaction", icon: FaStar },
    { value: "15+", label: "Years Experience", icon: FaAward },
    { value: "24/7", label: "Support Available", icon: FaClock },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Helmet>
        <title>Our Projects - Safety Expertise</title>
        <meta
          name="description"
          content="Explore our portfolio of successful safety implementations across commercial, residential, and industrial sectors in Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <PageHero
          title="Our Projects"
          subtitle="Discover our portfolio of successful safety implementations across various industries and sectors."
          badge="SUCCESSFUL IMPLEMENTATIONS"
          features={["500+ Projects Completed", "97% Client Satisfaction", "15+ Years Experience"]}
          backgroundImage="/images/background2.jpg"
        />

        {/* Mission Statement Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="h-0.5 w-12 bg-primary mr-3"></span>
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Our Mission in Action
                </span>
                <span className="h-0.5 w-12 bg-primary ml-3"></span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Delivering <span className="text-primary">Efficient</span> and Safe Solutions
              </h2>

              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                At Safety Expertise, we use preventive and corrective strategies to optimize building performance, 
                reduce disruptions, and resolve issues early to ensure safe, efficient facility operation across 
                commercial, residential, and industrial facilities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {projectStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
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
                Project <span className="text-primary">Gallery</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Browse our completed projects by category. Each project represents our commitment to 
                delivering efficient and safe maintenance solutions tailored to every client's infrastructure.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                    selectedCategory === category.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-primary/30"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    onClick={() => openModal(project)}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full capitalize">
                          {project.category}
                        </span>
                      </div>

                      {/* Play Button Overlay */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <FaPlay className="w-6 h-6 text-primary ml-1" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Project Features */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <FaCheckCircle className="w-4 h-4 text-primary" />
                            <span>Completed</span>
                          </div>
                        </div>
                        <motion.div
                          className="text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300"
                          whileHover={{ x: 5 }}
                        >
                          View Details
                          <FaArrowRight className="inline ml-2 w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Projects Message */}
            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaFilter className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
                <p className="text-gray-600">Try selecting a different category or check back later for new projects.</p>
              </motion.div>
            )}
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
                "We offer 24/7 service with skilled technicians and tailored plans for reliable, 
                cost-effective solutions across commercial, residential, and industrial facilities."
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

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedProject.title}
                      </h2>
                      <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full capitalize">
                        {selectedProject.category}
                      </span>
                    </div>
                    <motion.button
                      onClick={closeModal}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTimes className="w-5 h-5 text-gray-600" />
                    </motion.button>
                  </div>
                  
                  <div className="mb-8">
                    <motion.img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Project Highlights</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <FaCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">Efficient implementation</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <FaCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">Safety compliance</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <FaCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">Cost-effective solutions</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Services Provided</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <FaShieldAlt className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">Fire protection systems</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <FaTools className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">Maintenance services</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <FaCog className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">Equipment optimization</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        onClick={closeModal}
                        className="flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Close
                      </motion.button>
                      <motion.a
                        href="/contact"
                        className="flex-1 bg-primary text-white px-6 py-3 rounded-xl hover:bg-[#134271] transition-colors font-semibold text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Similar Project
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <CTA
          title="Ready to Start Your Project?"
          subtitle="Let's discuss how we can help you implement the right safety solutions for your facility."
          primaryButton={{ text: "Contact Our Team", href: "/contact" }}
          secondaryButton={{ text: "Explore Services", href: "/services" }}
        />
      </main>
    </>
  );
};

export default Projects;
