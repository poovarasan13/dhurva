import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../assets/fonts/dmsans.css";
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
      className={`fixed top-0 left-0 w-full z-50 border-b ${"bg-black"} border-white/20 shadow-md transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between md:p-3 lg:">
        <NavLink to="/" className="text-xl font-bold">
          <img
            src="https://res.cloudinary.com/dzpkbej9y/image/upload/v1739981304/Dhruva_iulxia.png"
            alt="Dhurva Logo"
            className="w-20 md:w-[100px]"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8">
          {navData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.route}
                className="dm-sans hover:scale-105 text-xl border-b-2 border-transparent transition-all duration-300
             hover:border-orange-400 text-white"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="lg:visible invisible h-10 w-30">
          <NavLink to="/" className="text-xl font-bold  ">
            <img
              src="https://res.cloudinary.com/dzpkbej9y/image/upload/v1740027396/web_25_harqjz.png"
              alt="Dhurva Logo"
              className="w-20 md:w-[30px]"
            />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            <Menu className="w-12 h-12 text-white" />
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
