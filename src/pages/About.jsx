import React from "react";
import { Helmet } from "react-helmet";
import { team, companyHistory, values } from "../data";
import { FaShieldAlt, FaEye, FaAward, FaLightbulb } from "react-icons/fa";

const About = () => {
  const valueIcons = {
    "shield-check": FaShieldAlt,
    eye: FaEye,
    award: FaAward,
    lightbulb: FaLightbulb,
  };

  return (
    <>
      <Helmet>
        <title>About Us - Safety Expertise</title>
        <meta
          name="description"
          content="Learn about Safety Expertise's mission, history, and team. We are committed to providing reliable, preventive, and professional safety solutions across Mauritania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Safety Expertise
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in industrial safety solutions, committed to
              protecting people and assets across Mauritania.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Safety Expertise, we are dedicated to providing
                  comprehensive safety solutions that protect people, property,
                  and the environment. Our mission is to be the leading safety
                  service provider in Mauritania, delivering reliable,
                  preventive, and professional solutions that exceed industry
                  standards.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that safety is not just a compliance requirement,
                  but a fundamental aspect of responsible business operations.
                  Through our expertise, innovation, and commitment to
                  excellence, we help organizations create safer working
                  environments and build a culture of safety awareness.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShieldAlt className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Safety First, Always
                  </h3>
                  <p className="text-gray-600">
                    Every decision we make, every service we provide, and every
                    interaction we have is guided by our unwavering commitment
                    to safety excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company History Timeline */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From our founding to becoming a trusted safety partner, here's
                our story of growth and commitment to excellence.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>

              <div className="space-y-12">
                {companyHistory.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-primary font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated professionals who make Safety Expertise the
                trusted partner for safety solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                      <p className="text-sm">Photo Placeholder</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
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
                The core principles that guide our work and define our
                relationships with clients and partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = valueIcons[value.icon] || FaShieldAlt;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-blue-100 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help enhance your safety
              standards and protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Our Team
              </a>
              <a href="/services" className="btn-primary text-lg px-8 py-4">
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
