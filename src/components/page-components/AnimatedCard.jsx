import React from "react";
import "../../assets/style/AnimatedCard.css";
import { Check, RocketIcon } from "lucide-react";
import { Button } from "../ui/button";
import Swal from "sweetalert2";

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
    <div className="card-container relative flex justify-center group">
      <div className="card-content bg-white rounded-xl shadow-md h-full flex flex-col border border-gray-100 hover:border-orange-100 transition-colors">
        <div className="card-header">
          <h3 className="text-center text-xl sm:text-2xl font-bold dm-sans text-gray-800 mb-3 sm:mb-4 transition-colors">
            {passDetails?.title || "No Title"}
          </h3>
        </div>

        <div className="card-price mb-4 sm:mb-6 text-center transform transition-all group-hover:scale-105">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
            Rs {passDetails?.price || "N/A"}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">per person</p>
        </div>

        <div className="card-benefits mt-3 sm:mt-4 text-sm sm:text-md text-gray-600 flex-grow overflow-auto">
          <ul className="space-y-2 sm:space-y-3">
            {passDetails?.benefits?.length > 0 ? (
              passDetails.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Check className="text-orange-500 h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0 transition-transform hover:scale-110" />
                  <span className="break-words open-sans leading-relaxed text-sm sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))
            ) : (
              <li>No benefits available</li>
            )}
          </ul>
        </div>

        <div className="card-button flex justify-center mt-6 sm:mt-8">
          <Button
            className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold hover:shadow-lg font-sans transition-all duration-300 flex items-center gap-2 hover:gap-3 text-sm sm:text-base"
            onClick={handleButtonClick}
          >
            Get Started
            <RocketIcon
              className="transition-all group-hover:translate-x-1 w-4 h-4 sm:w-5 sm:h-5"
              size={18}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
