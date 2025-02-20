import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../assets/fonts/arapey.css";
import EventShowOff from "./EventShowOff";
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/dmsans.css";
import CoordinatorCard from "@/components/page-components/CoordinatorCard";
import { useLocation } from "react-router-dom";
import TestCard from "@/components/page-components/TestCard";

function EventPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const departmentData = location.state.events;
  return (
    <div className="pt-20 lg:pt-30   dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <motion.div
        className="my-10 container mx-auto px-6 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight dm-serif bg-gradient-to-r text-black  bg-clip-text">
          {departmentData.departmentName}
        </h1>
        <p className="mt-4 dm-sans  text-lg text-gray-600 dark:text-gray-300 max-w-container mx-auto leading-relaxed">
          {departmentData.departmentDescription}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <EventShowOff events={departmentData.events} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <div className=" flex justify-center mb-6">
        <TestCard deptDetails={departmentData} />
      </div>
    </div>
  );
}

export default EventPage;
