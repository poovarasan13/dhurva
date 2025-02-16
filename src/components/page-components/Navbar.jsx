import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/dhurva-logo.png";
import "../../assets/fonts/opensans.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md font-sans">
      <div className="container mx-auto flex items-center justify-between p-3">
        <a href="#" className="text-xl font-bold ">
          <img src={logo} alt="dhurvaLogo" height="80" width="80" />
        </a>

        <ul className="hidden md:flex flex-grow justify-center space-x-8">
          {[
            "Home",
            "Cultural Fest",
            "Live-in Concert",
            "Technical Fest",
            "Pass",
            "Registration",
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-white border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </Button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10">
          {[
            "Home",
            "Cultural Fest",
            "Live-in Concert",
            "Technical Fest",
            "Pass",
            "Registration",
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-white text-lg hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
