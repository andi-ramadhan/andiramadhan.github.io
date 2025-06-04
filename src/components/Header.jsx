import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Header = ({ activeSection, onSectionChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const navLinks = [
    { key: "home", to:'/', label: "Home" },
    { key: "about", to:'/about', label: "About" },
    { key: "project", to:'/project', label: "Project" },
    { key: "contact", to:'/contact', label: "Contact" },
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
        <div className="relative flex items-center justify-center origin-center pt-10">
          <div className="relative size-10 border rounded-md border-black/20">
            <div
              className={`
                absolute left-1/6 top-1/2 w-7 h-0.5 rounded bg-black/60 transition-all duration-300
                ${menuOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-1" }
              `}
            />
            <div
              className={`
                absolute left-1/6 top-1/2 w-7 h-0.5 bg-black/60 rounded transition-all duration-300
                ${menuOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-1" }
              `}
            />
          </div>  
        </div>
      </button>
      {showNav && (
        <nav
          className={`
            absolute top-22 right-5 w-30 flex flex-col gap-2 justify-center items-center z-[10000] overflow-hidden text-center
            transition-all duration-500
            ${menuOpen ? "max-w-96 opacity-100" : "max-w-0 opacity-0 py-0 pointer-events-none"}
          `}
          style={{ transitionProperty: "max-width, opacity, padding" }}
        >
          {navLinks.map((item, idx) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                `mobile-nav-link w-full border-black/20 bg-my-cyan/5 backdrop-blur-sm rounded-md border p-2 
                transition-all duration-500
                ${isActive ? "font-semibold" : ""}
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              `}
              style={{
                transitionDelay: menuOpen
                  ? `${idx * 100}ms` : `100ms`
              }}
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