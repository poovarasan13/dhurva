import React, { useState } from "react";
import { motion } from "framer-motion";
const ProPassCard = ({ title, price, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{ height: 180 }}
      animate={{ height: isExpanded ? 300 : 180 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl shadow-lg p-6 
        cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col overflow-hidden"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h2 className="text-xl md:text-2xl font-bold truncate">{title}</h2>
      <p className="text-lg md:text-xl font-semibold truncate">Rs : {price}</p>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`flex-grow transition-opacity duration-500 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        {isExpanded && (
          <ul className="mt-3 text-sm md:text-base space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-xl mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
};
export default ProPassCard;
