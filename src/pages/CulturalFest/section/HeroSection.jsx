import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket } from "lucide-react";
import "../../../assets/fonts/dmserif.css";
import "../../../assets/fonts/sourcesans.css";
import Button from "@/components/page-components/Button";
import "../../../assets/fonts/allfonts.css";
import "../../../assets/fonts/powergrotesk.css";

function HeroSection() {
  const navigate = useNavigate();
  const handleOnStage = () => {
    navigate("/onstage");
  };
  const handleOffStage = () => {
    navigate("/offstage");
  };

  const onStageImage =
    "https://res.cloudinary.com/dzpkbej9y/image/upload/v1739939555/drumbs_fg2qjg.avif";
  const offStageImage =
    "https://res.cloudinary.com/dl2wibcfp/image/upload/v1740029680/Meganthi_jgxvik.avif";

  return (
    <div>
      {/* Heading Section */}
      <motion.div
        className="mt-20 md:mt-28 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl powergrok md:text-5xl lg:text-6xl  tracking-tight  text-black">
          Cultural Fest
        </h1>
        <p className="mt-4 dm-sans text-center text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
          Get ready for an electrifying Cultural Fest! Experience the vibrant
          blend of music, dance, theatre, and art through
          <span className="font-bold text-black hover:text-red-600 ms-2 me-2">
            10 dynamic on-stage events and 10 engaging off-stage activities.
          </span>
          Celebrate creativity, tradition, and artistic excellence as you
          participate, perform, and immerse yourself in the rich cultural
          heritage!
        </p>
      </motion.div>

      {/* OnStage Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-12">
          <motion.div
            className="w-full md:w-1/2 lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={onStageImage}
              alt="OnStage"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-3/5 space-y-4 sm:space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl dm-serif font-bold text-gray-900">
              OnStage Events
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed work-sans">
              Step into the spotlight with breathtaking performances that bring
              stories to life. From mesmerizing dance and music to theatrical
              masterpieces, OnStage is where the magic happens.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button link="onstage" text="Explore" />
            </div>
          </motion.div>
        </div>

        {/* OffStage Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          <motion.div
            className="w-full md:w-1/2 lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={offStageImage}
              alt="OffStage"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-3/5 space-y-4 sm:space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dm-serif">
              OffStage Events
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed dm-sans">
              Beyond the limelight, OffStage offers engaging workshops,
              interactive sessions, and behind-the-scenes glimpses into the
              creative world. Connect, learn, and be inspired.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button link="offstage" text="Explore" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
