import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import homeIcon from "./icons/homeIcon";
import aboutIcon from "./icons/aboutIcon";
import projectIcon from "./icons/projectIcon";

const Header = ({ activeSection, onSectionChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const navLinks = [
    { key: "home", to:'/', label: homeIcon() },
    { key: "about", to:'/about', label: aboutIcon() },
    { key: "project", to:'/project', label: projectIcon() },
  ];

  const handleMenuToggle = () => {
    if (!menuOpen) {
      setShowNav(true);
      setTimeout(() => setMenuOpen(true), 10); // allow nav to mount before animation open
    } else {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (!menuOpen && showNav) {
      // Wait for the close animation to finish before hiding nav
      const timeout = setTimeout(() => setShowNav(false), 500 + (navLinks.length - 1) * 100);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen, showNav, navLinks.length]);

  return (
    <header className="relative z-20 flex justify-end px-5 md:justify-center">
      {/* Desktop Nav */}
      <nav className={`absolute hidden md:flex md:justify-around md:items-center md:w-[40%] md:top-10 md:bg-gray-50 md:py-2 md:rounded-lg md:shadow-lg md:text-sm lg:text-base`}>
        {navLinks.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) => isActive ? "font-semibold" : ""}
            onClick={() => onSectionChange(item.key)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Nav */}
      <button
        className="fixed md:hidden text-3xl cursor-pointer"
        onClick={handleMenuToggle}
        aria-label="Toggle navigations"
      >
        <div className="relative flex items-center justify-center origin-center top-5">
          <div className="relative size-10 border rounded-md border-my-maroon backdrop-blur-sm">
            <div
              className={`
                absolute left-1/4 top-1/2 w-5 h-0.5 rounded transition-all duration-300
                ${menuOpen ? "-translate-y-1/2 rotate-45 bg-my-cyan" : "bg-my-maroon -translate-y-1" }
              `}
            />
            <div
              className={`
                absolute left-1/4 top-1/2 w-5 h-0.5 rounded transition-all duration-300
                ${menuOpen ? "-translate-y-1/2 -rotate-45 bg-my-maroon" : "bg-my-maroon translate-y-1" }
              `}
            />
          </div>  
        </div>
      </button>
      {showNav && (
        <nav
          className={`
            fixed top-5 right-16 w-[50%] h-10 rounded-md backdrop-blur-sm border gap-5 flex flex-row-reverse justify-evenly items-center z-[10000] overflow-hidden text-center
            transition-all duration-500
            ${menuOpen ? "opacity-100" : "max-w-0 opacity-0 py-0 pointer-events-none"}
          `}
          style={{ transitionProperty: "max-width, opacity, padding" }}
        >
          {navLinks.map((item, idx) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                `mobile-nav-link text-my-cyan
                transition-all duration-500
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              `}
              
              onClick={() => {
                onSectionChange(item.key);
                handleMenuToggle();
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header;