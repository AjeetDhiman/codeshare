import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { DropdownMenu } from "./DropdownMenu";
import { IoChevronDownOutline } from "react-icons/io5";

export const NavItem = ({
  url,
  title,
  hasDropdown = false,
  dropDownItems = [],
}) => {
  const [isExpanded, setIsExpended] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 1023);
  const [rotateIcon, setRotateIcon] = useState(false);
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
      setRotateIcon(true);
    }
  };

  const onMouseLeave = () => {
    if (!isDesktop) {
      setIsExpended(false);
      setRotateIcon(false);
    }
  };

  const onClicked = () => {
    setIsExpended((prevClickedState) => !prevClickedState);
    setRotateIcon((prevIconState) => !prevIconState);
  };

  return (
    <li
      className={`relative block h-auto items-center lg:flex lg:h-full ${hasDropdown ? "group" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hasDropdown ? (
        <>
          <a
            className="flex h-full items-center gap-2 p-2 lg:p-0"
            role="button"
            aria-expanded={isExpanded}
            onClick={onClicked}
          >
            {title}
            <span>
              <IoChevronDownOutline
                className={`transform duration-200 ease-in-out ${rotateIcon ? "rotate-180" : "rotate-0"}`}
              />
            </span>
          </a>
          <DropdownMenu listItems={dropDownItems} isExpanded={isExpanded} />
        </>
      ) : (
        <NavLink
          to={url}
          className={({ isActive }) =>
            `nav__link nav__link--single block h-full items-center p-2 transition-colors duration-150 hover:text-blue-600 lg:flex lg:p-0 lg:text-black lg:hover:text-black ${isActive ? "active text-blue-600" : ""}`
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
