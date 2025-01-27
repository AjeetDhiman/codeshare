import React from "react";
import propTypes from "prop-types";
import clsx from "clsx";
export const Input = ({ type = "text", className = "", ...props }) => {
  const baseStyle = `p-2 rounded border border-gray-400  focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-gray-500 focus-within:outline focus-within:outline-offset-1 focus-within:outline-dashed focus-within:outline-1 focus-within:outline-gray-500 mb-3`;

  const specificTpye = {
    checkbox: "h-4 w-4 mb-0 ",
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
  const autocompleteAttributes = {
    email: "email",
    password: "current-password",
    text: "on",
    search: "search",
    tel: "tel",
    url: "url",
    number: "off",
    date: "bday",
    "datetime-local": "bday",
    month: "bday",
    time: "off",
    week: "off",
    color: "off",
    hidden: "off",
    checkbox: "off",
    radio: "off",
    file: "off",
    range: "off",
  };
  const mergedClasses = clsx(baseStyle, specificTpye[type], className);
  return (
    <input
      type={type}
      autoComplete={autocompleteAttributes[type] || "off"}
      className={mergedClasses}
      {...props}
    />
  );
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
};
