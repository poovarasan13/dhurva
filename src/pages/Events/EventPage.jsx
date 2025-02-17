import React from "react";
import { motion } from "framer-motion";
import "../../assets/fonts/arapey.css";
import Navbar from "@/components/page-components/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import EventShowOff from "./EventShowOff";
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/dmsans.css";

function EventPage() {
  return (
    <div className="pt-20 lg:pt-30   bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* <Navbar /> */}

      <motion.div
        className="my-10 container mx-auto px-6 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight dm-serif bg-gradient-to-r text-black  bg-clip-text">
          Computer Science And Engineering{" "}
        </h1>
        <p className="mt-4 dm-sans  text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          The Department of EC is excited to announce its upcoming lineup of
          events! Join us for{" "}
          <span className="font-bold text-black hover:text-red-600">
            9 technical events
          </span>
          and{" "}
          <span className="font-bold text-black hover:text-blue-700">
            6 workshops
          </span>{" "}
          filled with knowledge and innovation. Get ready to learn, compete, and
          grow!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <EventShowOff />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* <FooterSection /> */}
      </motion.div>
    </div>
  );
}

export default EventPage;
