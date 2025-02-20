import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  User,
  UserPen,
  Rocket,
  Phone,
} from "lucide-react";
import eventsData from "./OnStageDetails.js";
import { motion } from "framer-motion";

const EventsDisplay = ({ scrollToEvent }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      delay: 100,
    });
  }, []);

  // Create an array of refs
  const eventRefs = useRef([]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-hidden">
      {eventsData.map((event, index) => (
        <div
          key={index}
          id={`event-card-${index}`} // Add unique ID for scrolling
          ref={(el) => (eventRefs.current[index] = el)} // Assign ref to each card
          // style={{ scrollMarginBottom: '100px' }}
          className={`flex flex-col md:flex-row ${
            event.reverse ? "md:flex-row-reverse" : ""
          } items-start gap-2 md:gap-4 bg-gradient-to-r from-white to-gray-100 p-2 md:p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-300 w-full max-w-full`}
          data-aos="fade-up"
          // Adjust this value based on your header height
        >
          <div
            className="md:w-3/4 lg:w-[700px] object-fit md:object-none"
            data-aos="fade"
          >
            <img
              src={event.image}
              alt={event.eventName}
              className="w-full h-[200px] lg:h-[400px] rounded-xl border border-gray-300"
            />
          </div>

          <div
            className="w-full md:w-1/2 space-y-2 md:space-y-3"
            data-aos="fade-left"
          >
            <h1 className="text-sm sm:text-lg dm-serif md:text-xl font-bold flex items-center gap-1 text-gray-800">
              <Users className="text-blue-500 w-3 h-3 sm:w-4 sm:h-4" />{" "}
              {event.eventName}
            </h1>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
              <div className="flex items-center gap-1 text-gray-700 dm-sans text-xs sm:text-sm">
                <MapPin className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" />
                <h3 className="font-medium"> {event.venue}</h3>
              </div>
              <div className="flex items-center gap-1 text-gray-700 text-xs dm-sans sm:text-sm">
                <Clock className="text-green-500 w-3 h-3 sm:w-4 sm:h-4" />
                <h3 className="font-medium"> {event.time}</h3>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[12px] sm:text-[14px] md:text-[16px] dm-sans font-bold flex items-center gap-1 ">
                <Calendar className="text-purple-500 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />{" "}
                Description:
              </p>
              <ul className="list-disc dm-sans list-inside text-[10px] sm:text-[12px] text-gray-700 pl-[8px] space-y-[2px] sm:space-y-[4px]">
                {event.description.map((item, index) => (
                  <li
                    key={index}
                    className="transition-transform duration-200 hover:translate-x-[2px]"
                    data-aos="fade-right"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Faculty Coordinator */}
            <div className="space-y-[2px]">
              <p className="text-[10px] sm:text-[14px] font-semibold flex items-center gap-[2px] text-gray-700">
                <UserPen className="text-red-500 w-[24px] h-[20px]" />
                {event.facultyCoordinator}
              </p>

              <div className="flex items-center gap-[2px] text-gray-600 text-xs sm:text-sm">
                <Phone className="text-blue-500 w-[20px] h-[16px]" />
                <p>
                  <a
                    href={`tel:${event.facultyNumber}`}
                    className="text-black hover:text-blue-800 text-xs md:text-sm"
                  >
                    {event.facultyNumber}
                  </a>
                </p>
              </div>
            </div>

            {/* Student Coordinator */}
            <div className="space-y-[2px]">
              <p className="text-[10px] sm:text-[14px] font-semibold flex items-center gap-[2px] text-gray-700">
                <User className="text-green-500 w-[20px] h-[20px]" />
                {event.studentCoordinator}
              </p>

              <div className="flex items-center gap-[2px] text-gray-600 text-xs sm:text-sm">
                <Phone className="text-blue-500 w-[20px] h-[16px]" />
                <a
                  href={`tel:${event.studentNumber}`}
                  className="text-black hover:text-blue-800 text-xs md:text-sm"
                >
                  {event.studentNumber}
                </a>
              </div>
            </div>

            {/* Register Button */}
            <div className="py-5 flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.button
                  className="text-white josefin px-5 py-2 md:px-4 md:py-2 md:text-[15px] bg-blue-600 hover:bg-blue-700 shadow-lg flex gap-2 items-center rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Register
                    <motion.div
                      whileHover={{ y: -5, rotate: -15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Rocket size={18} />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsDisplay;
