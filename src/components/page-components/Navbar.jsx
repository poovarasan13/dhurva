import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import navData from "../../data/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b ${
        isMobile ? "bg-black" : "backdrop-blur-lg bg-white/10"
      } border-white/20 shadow-md transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between md:p-3">
        <a href="#" className="text-xl font-bold">
          <img
            src="https://res.cloudinary.com/dxovoao59/image/upload/v1739893532/dhruva-logo_rxqbda.png"
            alt="Dhurva Logo"
            className="w-20 md:w-[100px]"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8">
          {navData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.route}
                className="text-black border-b-2 border-transparent hover:border-orange-400 transition-all duration-300"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            <Menu className="w-7 h-7 text-white" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 ${
          isMobile ? "bg-black" : "bg-black/95"
        } shadow-lg transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-xl font-semibold">Menu</h2>
          <Button variant="ghost" onClick={toggleMenu}>
            <X className="w-7 h-7 text-white" />
          </Button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center space-y-6 mt-10">
          {navData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.route}
                className="text-white text-lg hover:text-orange-400 transition-all duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
