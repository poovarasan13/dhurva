import React from "react";
import { motion } from "framer-motion";
import "../../assets/fonts/dmsans.css";
import "../../assets/fonts/dmserif.css";
import { Rocket } from "lucide-react";

function EventBanner({
  venue,
  date,
  title,
  subtitle,
  description,
  buttonText,
  bgColor,
  textColor,
  highlightColor,
}) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      className="relative z-30 py-12  text-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto px-6 relative z-10">
      
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="uppercase text-xl font-semibold text-sky-400 tracking-wider mb-2"
     
        >
          {subtitle}
        </motion.h2>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl dm-serif font-bold mb-4"
          style={{ color: textColor }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg mb-8"
          style={{ color: textColor }}
        >
          {description}
        </motion.p>

        {/* Button */}
        <motion.button
        
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-extrabold hover:scale-105 py-3 px-12 hover:text-white bg-sky-400 dm-sans  rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-105 transition-transform"
          style={{}}
        >
          <div className="flex">
            {buttonText}{" "}
            <span>
              {" "}
              <Rocket />
            </span>
          </div>
        </motion.button>

        {/* Venue and Date */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8"
        >
          <div className="flex items-center" style={{ color: textColor }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg">Venue: {venue}</span>
          </div>

          <div className="flex items-center" style={{ color: textColor }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg">Date: {date}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default EventBanner;
