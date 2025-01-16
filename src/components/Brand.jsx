import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";

export const Brand = () => {
  return (
    <a className="flex items-center gap-3" aria-label="Logo">
      <IoCodeSlashSharp className="text-6xl font-bold text-blue-600" />
      <span className="text-2xl">CodeShare</span>
    </a>
  );
};
