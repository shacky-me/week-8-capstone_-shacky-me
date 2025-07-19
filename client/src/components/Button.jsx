// src/components/Button.jsx
import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  type = "button", // Default type is 'button'
  variant = "primary", // Default variant
  size = "medium", // Default size
  className, // For custom additional classes
  disabled = false, // Standard HTML button attribute
  ...props // Capture any other standard button props (e.g., id, data-*)
}) => {
  // Base styles for all buttons
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant-specific styles
  const variantStyles = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-md",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-md",
  };

  // Size-specific styles
  const sizeStyles = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Disabled styles
  const disabledStyles = "opacity-50 cursor-not-allowed";

  // Combine all class names using clsx
  const combinedClasses = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && disabledStyles, // Apply disabled styles if disabled prop is true
    className // Add any custom classes passed in
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      {...props} // Spread any additional props
    >
      {children}
    </button>
  );
};

export default Button;
