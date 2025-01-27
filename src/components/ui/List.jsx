import PropTypes from "prop-types";

export const List = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};

List.propTypes = {
  children: PropTypes.node.isRequired,
};
