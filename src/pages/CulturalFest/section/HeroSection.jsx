import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket } from "lucide-react";
import "../../../assets/fonts/dmserif.css";
import "../../../assets/fonts/sourcesans.css";

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
      <motion.div
        className="mt-20 md:mt-28 container mx-auto px-6 sm:px-12 text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight dm-serif text-black">
          Cultural Fest
        </h1>
        <p className="mt-4 dm-sans text-center text-sm md:text-lg text-gray-800 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
          Get ready for an electrifying Cultural Fest! Experience the vibrant
          blend of music, dance, theatre, and art through
          <span className="font-bold text-black hover:text-red-600 ms-2 me-2">
            9 dynamic on-stage events and 10 engaging off-stage activities.
          </span>
          Celebrate creativity, tradition, and artistic excellence as you
          participate, perform, and immerse yourself in the rich cultural
          heritage!
        </p>
      </motion.div>

      <div className="container  px-6 py-10 space-y-10">
        {/* OnStage Section */}
        <div className="flex md:ms-16 flex-col md:flex-row-reverse items-center gap-8  md:gap-8">
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={onStageImage}
              alt="OnStage"
              className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-3/5 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl dm-serif font-bold text-gray-900 mobile-heading-spacing">
              OnStage Events
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed dm-sans md:ps-2">
              Step into the spotlight with breathtaking performances that bring
              stories to life. From mesmerizing dance and music to theatrical
              masterpieces, OnStage is where the magic happens.
            </p>
            <div className="pb-3 flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.button
                  className="text-white josefin px-5  text-md py-2 md:px-4 md:py-2 md:text-[15px] bg-sky-400 hover:bg-sky-400 shadow-lg flex gap-2 items-center rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOnStage}
                >
                  <span className="flex items-center gap-2">
                    Explore
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
          </motion.div>
        </div>

        {/* OffStage Section */}
        <div className="flex flex-col md:flex-row  gap- md:gap-12">
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={offStageImage}
              alt="OffStage"
              className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-3/5 space-y-6 text-center md:text-left md:ms-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dm-serif my-7 md:my-3 mobile-heading-spacing">
              OffStage Events
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed dm-sans md:me-16 md:ps-2">
              Beyond the limelight, OffStage offers engaging workshops,
              interactive sessions, and behind-the-scenes glimpses into the
              creative world. Connect, learn, and be inspired.
            </p>
            <div className="pb-3 flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.button
                  className="text-white josefin px-5  text-md py-2 md:px-4 md:py-2 md:text-[15px] bg-sky-400 hover:bg-sky-400 shadow-lg flex gap-2 items-center rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOffStage}
                >
                  <span className="flex items-center gap-2">
                    Explore
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
