import React from "react";
import rules from "../../../data/CulturalFestRules.js";
import { Check } from "lucide-react";
import "../../../assets/fonts/dmserif.css";
import "../../../assets/fonts/sourcesans.css";

function RulesAndRegulation() {
  return (
    <div className="py-3   bg-gray-200  px-5 md:px-10">
      <div className="sm:my-4">
        <h3 className="lg:text-5xl text-3xl font-semibold  text-center  tracking-wide mb-6 dm-serif">
          Rules & Regulations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Check className="text-green-500 mt-1" />
              <span className="text-black text-lg font-medium source-sans font-bold hover:text-green-700 ">
                {rule}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RulesAndRegulation;
