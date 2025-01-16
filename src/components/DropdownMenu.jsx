import React from "react";
import { NavLink } from "react-router";

export const DropdownMenu = ({ listItems, isExpanded }) => {
  return (
    <ul
      className={`dropdown__menu absolute left-0 right-0 top-full z-0 w-full min-w-64 transform bg-white shadow-md transition-all duration-300 ease-in-out ${isExpanded ? "pointer-events-auto z-[1000] translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      {listItems.map((item, key) => {
        return (
          <li key={key}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `block h-full w-full px-3 py-2 transition-colors duration-200 ease-in-out hover:bg-blue-600 hover:text-white ${isActive ? "bg-blue-600 text-white" : ""}`
              }
            >
              {item.submenu}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
