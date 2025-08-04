import React from "react";

const CTA = ({
  title,
  subtitle,
  primaryButton = { text: "Contact Our Team", href: "/contact" },
  secondaryButton = { text: "Explore Services", href: "/services" },
  variant = "accent", // accent, primary, or custom
  className = "",
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white";
      case "custom":
        return "bg-gradient-to-r from-gray-900 to-gray-800 text-white";
      default:
        return "bg-accent text-white";
    }
  };

  const getButtonStyles = (isPrimary = true) => {
    const baseStyles =
      "text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";

    if (isPrimary) {
      return `${baseStyles} bg-white text-accent hover:bg-gray-100 shadow-lg hover:shadow-xl`;
    } else {
      return `${baseStyles} bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent`;
    }
  };

  return (
    <section className={`section-padding ${getVariantStyles()} ${className}`}>
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={primaryButton.href} className={getButtonStyles(true)}>
              {primaryButton.text}
            </a>
            <a href={secondaryButton.href} className={getButtonStyles(false)}>
              {secondaryButton.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
