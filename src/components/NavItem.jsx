import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router";
import { DropdownMenu } from "./DropdownMenu";

export const NavItem = ({ url, title, hasDropdown = false, dropDownItems }) => {
  const [isExpanded, setIsExpended] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 1023);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onMouseEnter = () => {
    if (!isDesktop) {
      setIsExpended(true);
    }
  };

  const onMouseLeave = () => {
    if (!isDesktop) {
      setIsExpended(false);
    }
  };

  const onClicked = () => {
    setIsExpended((prevState) => !prevState);
  };

  return (
    <li
      className={`relative flex h-full items-center ${hasDropdown ? "group" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hasDropdown ? (
        <>
          <a
            className="flex h-full items-center"
            role="button"
            aria-expanded={isExpanded}
            onClick={onClicked}
          >
            {title}
            <span></span>
          </a>
          <DropdownMenu listItems={dropDownItems} isExpanded={isExpanded} />
        </>
      ) : (
        <NavLink
          to={url}
          className={({ isActive }) =>
            `nav__link nav__link--single ${isActive ? "active" : ""}`
          }
        >
          {title}
        </NavLink>
      )}
    </li>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: (props, propName, componentName) => {
    if (!props.hasDropdown && !props[propName]) {
      return new Error(
        `${propName} is required in ${componentName} when hasDropdown is false.`,
      );
    }
  },
  hasDropdown: PropTypes.bool,
  dropDownItems: PropTypes.array,
};
