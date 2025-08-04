import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import { services } from "../data";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Safety Expertise</title>
        <meta name="description" content={service.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat section-padding"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 85, 140, 0.8), rgba(24, 85, 140, 0.8)), url(${service.imageUrl})`,
          }}
        >
          <div className="container-custom">
            <Link
              to="/services"
              className="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors duration-200"
            >
              <FaArrowLeft className="mr-2" />
              Back to Services
            </Link>

            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Service Overview
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What We Provide
                  </h3>
                  <ul className="space-y-3">
                    {service.descriptionPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Started Today
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to enhance your safety standards? Contact our experts to
                  discuss your specific requirements and get a customized quote.
                </p>

                <div className="space-y-4">
                  <Link to="/contact">
                    <Button variant="primary" className="w-full">
                      Book This Service
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button variant="secondary" className="w-full">
                      Request a Quote
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Why Choose This Service?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Professional installation and setup</li>
                    <li>• Ongoing maintenance and support</li>
                    <li>• Compliance with safety standards</li>
                    <li>• Local expertise and knowledge</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Other Services
              </h2>
              <p className="text-xl text-gray-600">
                Explore our complete range of safety solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((s) => s.slug !== slug)
                .map((relatedService) => (
                  <div
                    key={relatedService.slug}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <p className="text-sm">Service Image</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {relatedService.description}
                      </p>
                      <Link
                        to={`/services/${relatedService.slug}`}
                        className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your safety requirements and get
              a customized quote for {service.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" className="text-lg px-8 py-4">
                  Contact Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary" className="text-lg px-8 py-4">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceDetail;
