import { NavLink } from "react-router";
import homeIcon from "./icons/homeIcon";
import aboutIcon from "./icons/aboutIcon";
import projectIcon from "./icons/projectIcon";

const Header = ({ activeSection, onSectionChange }) => {

  const navLinks = [
    { key: "home", to:'/', label: homeIcon() },
    { key: "about", to:'/about', label: aboutIcon() },
    { key: "project", to:'/project', label: projectIcon() },
  ];

  return (
    <header className="relative z-20 flex justify-center px-5 md:justify-center">
      {/* Desktop Nav */}
      <nav 
        className={`
          fixed top-5 flex justify-around items-center mx-auto w-[50%] md:w-[40%] border-my-black/20 border-2 md:top-10 py-2 
          rounded-lg shadow-lg backdrop-blur-lg 
        `}
      >
        
        {navLinks.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) => isActive ? "text-my-cyan" : " text-my-red"}
            onClick={() => onSectionChange(item.key)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

    </header>
  )
}

export default Header;