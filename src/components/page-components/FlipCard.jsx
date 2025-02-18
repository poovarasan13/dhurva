import React from "react";
import "../../assets/style/FlipCard.css";
import { Check } from "lucide-react";

const FlipCard = () => {
  return (
    <div className="flip-card" style={{ width: "250px", height: "320px" }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">Pro Pass</p>
          <p>What's inside</p>
        </div>
        <div className="flip-card-back">
          <p className="title">Pro Pass</p>
          <p>Rs : 300</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Check className="text-green-400" />
              All Benefits of Pro Pass
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-400" />
              Personalized Event Kit
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-400" />
              Exclusive VIP Lounge Access
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
