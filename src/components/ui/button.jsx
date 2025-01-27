import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
export const Button = ({
  children,
  type = "button",
  ariaLabel = "button",
  ariaExpanded = undefined,
  className = "",
  action,
}) => {
  const mergedClasses = clsx(
    "py-2 px-4 bg-gray-800 text-gray-50 rounded hover:bg-gray-900 border-current transition-colors duration-150 ease-in-out",
    className,
  );
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      className={mergedClasses}
      onClick={action}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
  ariaExpanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  action: PropTypes.func.isRequired,
};
