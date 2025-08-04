import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50",
    secondary:
      "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary/50",
    accent: "bg-accent text-white hover:bg-accent/90 focus:ring-accent/50",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
