import React from "react";
import propTypes from "prop-types";

export const Input = ({
  type = "text",
  placeholder = "Enter",
  action = "",
  className = "",
  ...props
}) => {
  const baseStyle = `w-full p-2 rounded border border-gray-500  focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-gray-500 focus-within:outline focus-within:outline-offset-1 focus-within:outline-dashed focus-within:outline-1 focus-within:outline-gray-500`;

  const specificTpye = {
    checkbox: "h-4 w-4",
    color: "w-16 h-8",
    date: "p-2",
    "datetime-local": "p-2",
    email: "w-full",
    file: "p-2",
    hidden: "hidden",
    month: "p-2",
    number: "w-full",
    password: "w-full",
    radio: "h-4 w-4",
    range: "w-full",
    search: "w-full",
    tel: "w-full",
    text: "w-full",
    time: "p-2",
    url: "w-full",
    week: "p-2",
  };
  const finalStyle = `${baseStyle} ${className} ${specificTpye[type] || ""}`;
  return <input type={type} className={finalStyle} {...props} />;
};

Input.propTypes = {
  type: propTypes.oneOf([
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "search",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]).isRequired,
  className: propTypes.string,
  action: propTypes.func,
};
