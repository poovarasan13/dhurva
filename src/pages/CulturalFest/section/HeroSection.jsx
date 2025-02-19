import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import dhurvaAbout from "../../../assets/images/about-images.jpg";
import "../../../assets/fonts/dmserif.css";
import "../../../assets/fonts/sourcesans.css";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate();
  const handleOnStage = () => {
    navigate("/onstage");
  };
  const handleOffStage = () => {
    navigate("/offstage");
  };
  return (
    <div>
      <div className="container mx-auto px-4 lg:px-16 py-12 mt-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="lg:text-5xl text-3xl font-bold text-black dm-serif ">
              Cultural Fest
            </h1>
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
              Experience the rich tapestry of culture and heritage through our
              eclectic mix of cultural events, including music concerts, dance
              performances, theatre showcases, and art exhibitions.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button
                onClick={handleOnStage}
                className="p-6 border-b-gray-200 border-b-4 border-2"
              >
                On Stage
              </Button>
              <Button
                onClick={handleOffStage}
                variant="outline"
                className="p-6 border-2  border-black "
              >
                Off Stage
              </Button>
            </div>
          </div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <motion.img
              src={dhurvaAbout}
              alt="DhurvaAbout"
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
