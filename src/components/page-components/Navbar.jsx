import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/dhurva-logo.png";
import "../../assets/fonts/opensans.css";
import { NavLink } from "react-router-dom";
import navData from "../../data/NavData";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };
  return (
    <nav className="bg-black shadow-md font-sans fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-xl font-bold">
          <img src={logo} alt="Dhurva Logo" className="w-20 md:w-[120px] " />
        </a>

        <ul className="hidden md:flex flex-grow justify-center space-x-8">
          {navData.map((item, index) => (
            <li key={index}>
              <NavLink
                // href={item.route}
                to={item.route}
                className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            <Menu className="w-7 h-7 text-white" />
          </Button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-xl font-semibold">Menu</h2>
          <Button variant="ghost" onClick={toggleMenu}>
            <X className="w-7 h-7 text-white" />
          </Button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10">
          {navData.map((item, index) => (
            <li key={index}>
              <a
                href={item.route}
                className="text-white text-lg hover:text-gray-400 transition-all duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
