import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaGift, FaCog } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Passion for fire safety",
      description: "Dedicated to protecting lives and property with certified fire safety solutions.",
      color: "red",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: FaGift,
      title: "Reliable Fire Protection",
      description: "Comprehensive fire protection systems designed for maximum reliability and safety.",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: FaCog,
      title: "Engineering the quality",
      description: "Expert engineering and maintenance services for industrial equipment and systems.",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="relative bg-white/95 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
