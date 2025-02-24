import React from "react";
import "../../assets/style/AnimatedCard.css";
import "../../assets/fonts/opensans.css";
import "../../assets/fonts/dmsans.css";
import { Check, RocketIcon } from "lucide-react";
import { Button } from "../ui/button";
import Swal from "sweetalert2";

const AnimatedCard = ({ passDetails = {} }) => {
  const handleButtonClick = () => {
    Swal.fire({
      title: "Payment Link Coming Soon!",
      text: "The payment link for this pass will be available soon. Stay Tuned.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="relative flex justify-center">
      <div className="card relative z-10 w-full max-w-sm">
        <div className="bg p-4 rounded-lg hover:text-black shadow-lg h-full flex flex-col">
          <h3 className="text-center text-2xl font-semibold dm-sans text-black break-words">
            {passDetails?.title || "No Title"}
          </h3>
          <p className="text-xl text-center font-medium">
            Rs {passDetails?.price || "N/A"}
          </p>

          <div className="mt-4 text-md text-black flex-grow overflow-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-track-rounded-md scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="space-y-2">
              {passDetails?.benefits?.length > 0 ? (
                passDetails.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="text-orange-500 h-5 w-5 mt-1" size={18} />
                    <span className="break-words">{benefit}</span>
                  </li>
                ))
              ) : (
                <li>No benefits available</li>
              )}
            </ul>
          </div>

          <div className="flex justify-center mt-4 shrink-0">
            <Button
              className="bg-orange-500 text-white hover:text-black px-6 py-2 font-medium rounded-full hover:bg-orange-600 hover:scale-105 transition-all flex items-center gap-2"
              onClick={handleButtonClick}
            >
              Visit <RocketIcon size={18} />
            </Button>
          </div>
        </div>
        {/* Glowing Blob */}
        <div className="blob absolute -top-10 -left-10 z-0"></div>
      </div>
    </div>
  );
};

export default AnimatedCard;
