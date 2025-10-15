import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    "Hero",
    "Team",
    "Services",
    "Portfolio",
    "Contact",
  ];

  return (
    <header className="text-white flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[white] via-[#203a43] to-[#2c5364]">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo-guru.png" alt="logo" className="h-20 w-40" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:bg-purple-600 hover:underline px-3 py-1 rounded transition-all"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

