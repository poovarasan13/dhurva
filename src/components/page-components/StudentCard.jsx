import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import "../../assets/style/TestCard.css";
import "../../assets/fonts/dmsans.css";
import "../../assets/fonts/dmserif.css";
import { Button } from "../ui/button";

function StudentCard({ name }) {
  // Determine background color based on the first letter of the name
  const getBackgroundColor = (letter) => {
    if (letter === "T") return "-green-500"; // Green for "T"
    if (letter === "B") return "-blue-400"; // Blue for "B"
    if (letter === "G") return "-pink-400"; // Pink for "G"
    return "bg-gray-200"; // Default fallback color
  };

  const bgColor = getBackgroundColor(name.charAt(0).toUpperCase());

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        className={`max-w-sm rounded-lg overflow-hidden shadow-lg hover:bg${bgColor}  `}
      >
        <div className="px-6 py-4 hover:bg${bgColor}">
          <p className="text-gray-700 text-center text-lg">{name}</p>
          <div className="flex mx-auto justify-center mt-6">
            <Button className="dm-sans rounded-full px-6 bg-sky-400 hover:bg-white hover:outline-sky-400 hover:outline-2 hover:border-2 hover:border-sky-400 hover:text-sky-400">
              <a href="#" className="flex gap-3 items-center">
                <Phone /> Call
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StudentCard;
