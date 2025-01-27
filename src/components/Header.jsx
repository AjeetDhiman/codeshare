import { useState, useEffect } from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { Brand } from "./Brand";
import { getSanityMenuData, getDropDownMenuData } from "../api";
import { NavItem } from "./NavItem";
import { ListWrapper } from "./ui/ListWrapper";
import { Button } from "./ui/Button";
import { Overlay } from "./ui/Overlay";
import { Dropdown } from "./ui/Dropdown";
import { Image } from "./ui/Image";

export const Header = () => {
  const [limitedNavItems, setLimitedNavItems] = useState([]);
  const [navToggle, setNavToggle] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [dropdownData, setDropdownData] = useState({
    action: "click",
    dropdownList: [],
  });

  useEffect(() => {
    getSanityMenuData()
      .then((data) => {
        setLimitedNavItems(data);
      })
      .catch(console.error);
  }, []);
  const NavItems = limitedNavItems.slice(0, 5);

  const navToggleButton = () => {
    setNavToggle((prevState) => {
      const isOpening = !prevState;
      document.body.style.overflow = isOpening ? "hidden" : "";
      setOverlayActive(isOpening);
      return isOpening;
    });
  };

  const overlayClick = () => {
    setNavToggle(false);
    setOverlayActive(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const fetchDropdownMenuData = async () => {
      try {
        const Data = await getDropDownMenuData("navbar");
        setDropdownData(Data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setDropdownData({ action: "click", dropdownList: [] });
      }
    };

    fetchDropdownMenuData();
  }, []);

  return (
    <header className="relative bg-white">
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-3 xl:px-0"
        aria-label="Main navigation"
      >
        <div className="flex h-full items-center gap-10">
          <Brand />
          <div
            className={`absolute left-0 top-0 z-20 h-screen w-full max-w-96 transform bg-white duration-300 ease-in-out lg:relative lg:flex lg:h-full ${navToggle ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
          >
            <Button
              className="absolute right-6 top-4 m-0 block p-0 lg:hidden"
              action={navToggleButton}
            >
              <IoCloseOutline className="h-6 w-6" />
            </Button>
            <ListWrapper className="h-full items-center gap-5 overflow-auto bg-white px-4 pt-10 lg:flex lg:overflow-visible lg:px-0 lg:pt-0">
              {NavItems.map((item, index) => (
                <NavItem
                  key={index}
                  url={item.url}
                  title={item.title}
                  hasDropdown={item.hasdropdown}
                  dropDownItems={item.dropdownItems}
                />
              ))}
            </ListWrapper>
          </div>
        </div>
        <div className="flex h-full items-center gap-2">
          
          <Dropdown
            action={dropdownData.action}
            marker={dropdownData.marker}
            dropdownList={dropdownData.dropdownList}
          >
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-300">
              <Image
                src="https://plus.unsplash.com/premium_photo-1699547216250-c1c679ade010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                className="object-cover"
              />
            </div>
          </Dropdown>
          <Button
            ariaExpanded={`${navToggle ? "true" : "false"}`}
            ariaLabel="Toggle navigation"
            className="block lg:hidden"
            action={navToggleButton}
          >
            <IoMenu className="h-6 w-6" />
          </Button>
        </div>

        <Overlay
          type="button"
          className={`overlay fixed inset-0 z-10 block origin-left cursor-default bg-black opacity-40 transition-all duration-300 ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none ${
            overlayActive ? "w-full" : "w-0"
          }`}
          action={overlayClick}
        />
      </nav>
    </header>
  );
};
