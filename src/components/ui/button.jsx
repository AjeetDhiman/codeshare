import React from "react";
import PropTypes from "prop-types";

export const Button = ({
  children,
  type = "button",
  ariaLabel = "button",
  ariaExpanded = undefined,
  className = "",
  action,
}) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      className={className}
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
