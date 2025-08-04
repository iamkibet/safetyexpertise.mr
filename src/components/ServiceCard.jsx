import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({
  title,
  description,
  imageUrl,
  slug,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="relative h-48 bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/images/placeholder-service.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
        >
          Learn More
          <FaArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
