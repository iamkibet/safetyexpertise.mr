import React from "react";

const PageHero = ({ 
  title, 
  subtitle, 
  badge, 
  features = [], 
  backgroundImage = "/images/16.png",
  showBackgroundImage = true 
}) => {
  return (
    <section className="bg-gradient-to-br from-[#18558c] via-[#1a4a7a] to-[#0f2d4a] text-white section-padding relative overflow-hidden pt-32">
      {/* Background image */}
      {showBackgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
            }}
          />
        </div>
      )}

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {badge && (
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
              <span className="text-white text-sm font-bold">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>

          {features.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-blue-100">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero; 