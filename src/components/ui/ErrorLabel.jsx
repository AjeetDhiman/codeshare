import React from "react";
import clsx from "clsx";
export const ErrorLabel = ({ className, children, ...props }) => {
  const mergedClasses = clsx("block text-red-700 mb-2", className);
  return (
    <div className={mergedClasses} {...props}>
      {children}
    </div>
  );
};
