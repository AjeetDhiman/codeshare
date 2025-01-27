import clsx from "clsx";
export const Label = ({ className = "", children, ...props }) => {
  const mergedClasses = clsx("mb-2 block text-gray-900", className);
  return (
    <label className={mergedClasses} {...props}>
      {children}
    </label>
  );
};
