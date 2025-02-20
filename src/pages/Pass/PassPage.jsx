import { motion } from "framer-motion";
import ElitePassList from "@/components/page-components/ElitePassList";
import Navbar from "@/components/page-components/Navbar";
import PassCard from "@/components/page-components/PassCard";
import FooterSection from "@/components/sections/footer/FooterSection";
import React, { useEffect } from "react";
import ProPassList from "../home/section/ProPassList";
import AnimatedCard from "@/components/page-components/AnimatedCard";
import RegistrationPage from "../Registration/RegistrationPage";

const PassPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" ">
      {/* <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center sm:mt-24  mt-20"
      >
        <h1 className="text-5xl font-semibold tracking-wide">
          Exclusive Passes
        </h1>
        <p className="text-gray-400 text-lg mt-2">
          Unlock premium content with our exclusive memberships
        </p>
      </motion.div>

      <div className="flex flex-col items-center  mt-2  px-6  mb-6">
        <div className="flex flex-wrap justify-center gap-12 mt-20 px-6 relative z-10">
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
        </div>
      </div> */}
      <RegistrationPage />

      {/* Footer */}
    </div>
  );
};

export default PassPage;
