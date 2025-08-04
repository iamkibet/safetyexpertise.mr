import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { projects } from "../data";
import { FaFilter, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "residential", name: "Residential" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
          content="Explore our portfolio of safety projects across commercial, residential, and industrial sectors in Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <PageHero
          title="Our Projects"
          subtitle="Discover our portfolio of successful safety implementations across various industries and sectors."
          badge="SUCCESSFUL IMPLEMENTATIONS"
          features={["Commercial", "Industrial", "Residential"]}
        />

        {/* Filter Section */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Project Gallery
              </h2>
              <p className="text-xl text-gray-600">
                Browse our completed projects by category
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <FaFilter className="inline mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openModal(project)}
                >
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full capitalize">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    <button className="mt-4 text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>
                <div className="mb-6">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full capitalize">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    Get Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

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
