import React from "react";
import propTypes from "prop-types";
export const Form = ({ actionHandler = "", children, ...props }) => {
  const action = actionHandler ? { onSubmit: actionHandler } : {};

  return (
    <form {...props} {...action}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: propTypes.node,
  actionHandler: propTypes.func,
  className: propTypes.string,
};
