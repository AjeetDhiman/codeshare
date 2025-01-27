import React from "react";
import PropTypes from "prop-types";

export const ListWrapper = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>;
};

ListWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
