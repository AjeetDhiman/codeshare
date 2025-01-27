import React from "react";
import propTypes from "prop-types";

export const Overlay = ({
  type = "div",
  action = undefined,
  children,
  className = "",
}) => {
  if (type === "button") {
    return (
      <button
        className={`overlay_button ${className}`}
        onClick={action}
        type="button"
      >
        {children}
      </button>
    );
  }

  return <div className={`overlay_div ${className}`}>{children}</div>;
};

Overlay.propTypes = {
  type: propTypes.oneOf(["div", "button"]).isRequired,
  action: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
};
