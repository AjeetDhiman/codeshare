import React from "react";
import { NavLink } from "react-router-dom";
import { ListWrapper } from "./ui/ListWrapper";
import { List } from "./ui/List";

export const DropdownMenu = ({ listItems, isExpanded }) => {
  return (
    <ListWrapper
      className={`dropdown__menu left-0 right-0 top-full z-0 w-full min-w-64 transform bg-white transition-all ease-in-out lg:absolute lg:shadow-md ${isExpanded ? "pointer-events-auto z-[1000] h-fit translate-y-0 opacity-100 duration-300" : "pointer-events-none h-0 translate-y-4 opacity-0 duration-150"}`}
    >
      {listItems.map((item, key) => {
        return (
          <List key={key}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `block h-full w-full px-4 py-2 transition-colors duration-200 ease-in-out hover:text-blue-600 lg:px-3 lg:hover:bg-blue-600 lg:hover:text-white ${isActive ? "text-blue-600 lg:bg-blue-600 lg:text-white" : ""}`
              }
            >
              {item.submenu}
            </NavLink>
          </List>
        );
      })}
    </ListWrapper>
  );
};
