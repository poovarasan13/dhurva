import React from "react";
import "../../assets/style/AnimatedCard.css";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AnimatedCard = ({ passDetails }) => {
  const handleButtonClick = () => {
    Swal.fire({
      title: "Payment Link Coming Soon!",
      text: "The payment link for this pass will be available soon. Stay Tuned.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <motion.div
      className="relative flex justify-center group"
      whileHover={{
        boxShadow: "0 0 15px rgba(249, 115, 22, 0.6)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="card relative z-10 w-96 mx-auto transform transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-lg border-2 border-orange-200 hover:border-orange-300">
        <div className="bg-orange-100 rounded-t-xl py-4">
          <h3 className="text-center text-xl sm:text-2xl font-bold dm-sans text-orange-700 transition-colors">
            {passDetails?.title || "No Title"}
          </h3>
        </div>

        {/* White Body */}
        <div className="bg-white px-4 sm:px-8 py-6 sm:py-8 h-full flex flex-col transition-colors">
          <div className="mb-4 sm:mb-6 text-center transform transition-all group-hover:scale-105">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
              ${passDetails?.price || "N/A"}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">One-Time Payment</p>
          </div>

          <div className="mt-3 sm:mt-4 text-sm sm:text-md text-gray-600 flex-grow overflow-auto">
            <ul className="space-y-2 sm:space-y-3">
              {passDetails?.benefits?.length > 0 ? (
                passDetails.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 opacity-0 animate-slide-up justify-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="break-words open-sans leading-relaxed text-sm sm:text-base text-center">
                      {benefit}
                    </span>
                  </li>
                ))
              ) : (
                <li>No benefits available</li>
              )}
            </ul>
          </div>

          <div className="flex justify-center mb-6 mt-6 sm:mt-8">
            <Button
              className="bg-gradient-to-r from-orange-400 to-orange-300 open-sans p-3 text-white hover:from-orange-500 hover:to-orange-400 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold hover:shadow-lg font-sans transition-all duration-300 flex items-center gap-2 hover:gap-3 text-sm sm:text-base"
              onClick={handleButtonClick}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
