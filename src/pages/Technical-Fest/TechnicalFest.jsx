import React, { useEffect } from "react";
import DepartmentShowOff from "./DepartmentShowOff";
import { motion } from "framer-motion";
function TechnicalFest() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <motion.div
        className="mt-20 md:mt-28 container mx-auto px-6 sm:px-12 text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight dm-serif text-black">
          Technical Fest
        </h1>
        <p className="mt-4 dm-sans text-center text-sm md:text-lg text-gray-800 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
          Gear up for an exhilarating Technical Fest! Immerse yourself in the
          world of innovation, coding, robotics, and emerging technologies.
          <span className="font-bold text-black hover:text-blue-600 ms-2 me-2">
            Experience cutting-edge competitions, hands-on workshops, and
            inspiring tech talks.
          </span>
          Explore groundbreaking ideas, collaborate with like-minded innovators,
          and witness the future of technology unfold!
        </p>
      </motion.div>
      <DepartmentShowOff />
    </div>
  );
}

export default TechnicalFest;
