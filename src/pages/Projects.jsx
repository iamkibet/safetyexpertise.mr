import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { projects } from "../data";
import { FaTimes, FaFilter } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "industrial", name: "Industrial" },
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
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover our portfolio of successful safety implementations across
              various industries and sectors.
            </p>
          </div>
        </section>

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
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <p className="text-sm">Project Image</p>
                      <p className="text-xs mt-1">{project.title}</p>
                    </div>
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No projects found for the selected category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help implement safety solutions for your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get a Quote
              </a>
              <a href="/services" className="btn-primary text-lg px-8 py-4">
                Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
                >
                  <FaTimes />
                </button>

                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs mt-1">{selectedProject.title}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedProject.title}
                    </h2>
                    <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full capitalize">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Project Details
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Safety system installation</li>
                        <li>• Equipment calibration</li>
                        <li>• Staff training provided</li>
                        <li>• Ongoing maintenance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Results
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Enhanced safety compliance</li>
                        <li>• Reduced risk factors</li>
                        <li>• Improved operational efficiency</li>
                        <li>• Peace of mind for management</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" className="btn-primary text-center">
                      Get Similar Project Quote
                    </a>
                    <button
                      onClick={closeModal}
                      className="btn-secondary text-center"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Projects;
