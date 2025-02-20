import React from "react";
import { motion } from "framer-motion";
import { FaRegistered } from "react-icons/fa";
import { RocketIcon } from "lucide-react";
import "../../../assets/fonts/dmsans.css";
import "../../../assets/fonts/opensans.css";
import GridImages from "@/assets/images/HomePage/GridImages";
const Gallery = () => {
  const images = Object.values(GridImages); // Extract image URLs from the Gallery object

  return (
    <div className=" mx-auto px-5 py-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="grid grid-cols-2 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {images.slice(0, 4).map(
            (
              src,
              index // Use the images array
            ) => (
              <motion.div
                key={index}
                className="w-full p-1 md:p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  alt="gallery"
                  className="block w-full h-52 md:h-72 rounded-lg object-cover"
                  src={src}
                />
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-semibold mb-6 text-gray-900 dm-sans"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unleash Your Potential at{" "}
            <span className="text-sky-400 hover:text-red-500">Dhruva</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6 font-sans"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join us for an immersive experience designed to ignite your passion,
            expand your knowledge, and connect you with industry leaders.
          </motion.p>
          <ul className="list-disc list-inside text-gray-600 mb-6 font-mono">
            {[
              "Expert Speakers - Learn from the best in the field",
              "Interactive Workshops - Hands-on sessions to sharpen skills",
              "Networking Opportunities - Connect with peers & mentors",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="flex justify-center md:justify-start">
            <motion.button
              className="bg-sky-400 hover:bg-sky-400 hover:text-black text-white  py-3 px-7 rounded-lg shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Register Now <RocketIcon />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
