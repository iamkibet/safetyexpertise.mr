import React from "react";
import { Helmet } from "react-helmet";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { companyHistory, values } from "../data";
import {
  FaShieldAlt,
  FaEye,
  FaAward,
  FaLightbulb,
  FaCheckCircle,
  FaUsers,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

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
        <PageHero
          title="About Safety Expertise"
          subtitle="Your trusted partner in industrial safety solutions, committed to protecting people and assets across Mauritania."
          badge="ESTABLISHED 2010"
          features={[
            "15+ Years Experience",
            "500+ Projects Completed",
            "24/7 Support",
          ]}
        />

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
              {/* Timeline line with red accent */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary h-full"></div>

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
                      <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent hover:border-l-8 transition-all duration-300">
                        <div className="text-primary font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot with red accent */}
                    <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned Values Section with Default Colors */}
        <section className="section-padding bg-gradient-to-br from-primary  to-gray-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("/images/16.png")`,
              }}
            />
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The principles that guide our work and define our relationships
                with clients and partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = valueIcons[value.icon] || FaShieldAlt;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    {/* Floating Icon with red accent */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="text-center pt-6">
                      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                      <p className="text-blue-100 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>

                    {/* Decorative Elements with red accent */}
                    <div className="absolute top-2 right-2 opacity-20">
                      <FaCheckCircle className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Value Cards with red accents */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-accent/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Team Excellence</h3>
                <p className="text-blue-100 text-sm">
                  Our dedicated team of certified professionals ensures every
                  project meets the highest standards.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-accent/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Trusted Partnership</h3>
                <p className="text-blue-100 text-sm">
                  Building long-term relationships based on reliability,
                  transparency, and mutual success.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-accent/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Innovation</h3>
                <p className="text-blue-100 text-sm">
                  Embracing new technologies and methods to deliver cutting-edge
                  safety solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Work with Us?"
          subtitle="Let's discuss how our expertise can help enhance your safety standards and protect your organization."
          primaryButton={{ text: "Contact Our Team", href: "/contact" }}
          secondaryButton={{ text: "Explore Services", href: "/services" }}
        />
      </main>
    </>
  );
};

export default About;
