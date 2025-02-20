import React from "react";
import "../../assets/style/AnimatedCard.css";
import "../../assets/fonts/opensans.css";
import "../../assets/fonts/dmsans.css";
import { Check, RocketIcon } from "lucide-react";
import { Button } from "../ui/button";

const AnimatedCard = () => {
  return (
    <div className="relative  flex justify-center  ">
      <div className="card  relative z-10">
        <div className="bg p-6 rounded-lg hover:bg-orange-200 hover:text-black  shadow-lg">
          <h3 className="text-center text-3xl    font-semibold dm-sans text-black">
            Pro Pass
          </h3>
          <p className="text-2xl text-center font-medium ">Rs 200</p>

          <ul className="mt-4 space-y-3 text-md text-black ">
            <li className="flex items-center gap-2 ">
              <Check className="text-orange-500" />
              All Benefits of Pro Pass
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-orange-500" />
              Personalized Event Kit
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-orange-500" />
              Exclusive VIP Lounge Access
            </li>
          </ul>
          <div className="flex justify-center  mt-4">
            <Button className="bg-orange-500 text-white hover:text-black px-6 py-2 font-medium rounded-full hover:bg-orange-600 hover:scale-105 transition-all flex items-center gap-2">
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
