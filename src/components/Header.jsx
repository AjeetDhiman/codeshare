import { IoMenu } from "react-icons/io5";
import { Brand } from "./Brand";
import { NavItem } from "./NavItem";
const navItems = [
  { url: "/first", title: "First" },
  {
    title: "Second",
    hasDropdown: true,
    dropDownItems: [
      { url: "/submenu1", submenu: "Sub Menu 1" },
      { url: "/submenu2", submenu: "Sub Menu 2" },
    ],
  },
  { url: "/third", title: "Third" },
  {
    title: "Fourth",
    hasDropdown: true,
    dropDownItems: [
      { url: "/submenu3", submenu: "Sub Menu 3" },
      { url: "/submenu4", submenu: "Sub Menu 4" },
    ],
  },
];

const limitedNavItems = navItems.slice(0, 5);
export const Header = () => {
  return (
    <header className="z-[1000] bg-white">
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-3 xl:px-0"
        aria-label="Main navigation"
      >
        <div className="flex h-full items-center gap-10">
          <Brand />
          <div className="flex h-full">
            <ul className="flex h-full items-center gap-5">
              {limitedNavItems.map((item, index) => (
                <NavItem
                  key={index}
                  url={item.url}
                  title={item.title}
                  hasDropdown={item.hasDropdown}
                  dropDownItems={item.dropDownItems}
                />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>Profile</div>
        </div>
        <button
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="toggle__button"
        >
          <IoMenu />
        </button>
      </nav>
    </header>
  );
};
