import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { IoChevronDownOutline } from "react-icons/io5";
import { ListWrapper } from "./ListWrapper";
import { List } from "./List";

export const Dropdown = ({
  action = "click",
  children,
  dropdownList = [],
  className = "",
  marker = true,
}) => {
  const [actionToggle, setActionToggle] = useState(false);
  const [isExpanded, setIsExpended] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (state) => {
    setActionToggle(state);
    setIsExpended(state);
  };

  useEffect(() => {
    if (action === "click" || isMobile) {
      const handleBodyClick = () => toggleDropdown(false);
      document.body.addEventListener("click", handleBodyClick);
      return () => document.body.removeEventListener("click", handleBodyClick);
    }
  }, [action, isMobile]);

  const handleButtonClick = (e) => {
    if (action === "click" || isMobile) {
      e.stopPropagation();
      toggleDropdown(!actionToggle);
    }
  };

  const handleMouseEnter = () => {
    if (action === "hover" && !isMobile) toggleDropdown(true);
  };

  const handleMouseLeave = () => {
    if (action === "hover" && !isMobile) toggleDropdown(false);
  };

  return (
    <div
      className="relative inline-block h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        action={handleButtonClick}
        type="button"
        ariaLabel="Dropdown Button"
        ariaExpanded={isExpanded}
        className={`flex h-full items-center gap-2 ${className}`}
        aria-haspopup="true"
      >
        {children}{" "}
        <IoChevronDownOutline className={`${marker ? "block" : "hidden"}`} />
      </Button>
      {dropdownList && dropdownList.length > 0 && (
        <div className="z-10">
          <ListWrapper
            className={`absolute right-0 top-full min-w-max origin-top-right translate-y-0 transform overflow-hidden rounded-sm bg-gray-50 shadow-lg ring-1 ring-black/5 transition-all duration-300 ease-in-out ${
              actionToggle
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
            role="menu"
            aria-orientation="vertical"
            tabIndex="-1"
          >
            {dropdownList
              .sort((a, b) => a.menuOrder - b.menuOrder)
              .map((dropdownItem, index) => (
                <List key={index} role="menuitem">
                  <NavLink
                    className={({ isActive }) =>
                      `block px-4 py-2 transition-colors duration-200 ease-in-out hover:bg-blue-600 hover:text-white ${isActive ? "bg-blue-600 text-white" : ""}`
                    }
                    to={dropdownItem.url}
                  >
                    {dropdownItem.menuName}
                  </NavLink>
                </List>
              ))}
          </ListWrapper>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  action: propTypes.oneOf(["click", "hover"]),
  dropdownList: propTypes.array.isRequired,
  marker: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
};
