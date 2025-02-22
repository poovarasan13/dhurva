import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {
  Calendar,
  Laptop,
  LaptopMinimal,
  Rocket,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useNavigate } from "react-router-dom";
import "../../assets/fonts/powergrotesk.css";

function DepartmentCard({ events }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/departmentInfo`, {
      state: { events },
    });
  };

  // Utility function to render event counts
  const renderEventCount = (count, label, icon, bgColor, textColor) => {
    if (count > 0) {
      return (
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className={`p-2 rounded-full group-hover:bg-white transition-all duration-300 ${bgColor}`}
          >
            {React.cloneElement(icon, {
              className: `w-4 h-4 sm:w-5 sm:h-5 ${textColor} transition-all duration-300 group-hover:rotate-12`,
            })}
          </div>
          <p className="text-gray-700 hover:font-extrabold dark:text-gray-300 group-hover:text-black transition-all duration-300">
            {count} {label}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative group hover:scale-105 transition-transform duration-300 w-full max-w-sm sm:max-w-md mx-auto">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute w-40 h-40 -top-20 -left-20 bg-sky-400 rounded-full opacity-30 blur-3xl animate-[spin_3s_linear_infinite]" />
        <div className="absolute w-40 h-40 -bottom-20 -right-20 bg-sky-400 rounded-full opacity-30 blur-3xl animate-[spin_8s_linear_infinite]" />
      </div>

      {/* Card */}
      <Card className="relative z-10 w-full h-full dark:bg-gray-800/80 border-2 border-gray-100/85 dark:border-gray-700 shadow-md hover:shadow-lg rounded-lg transition-all duration-500 group-hover:bg-sky-400 overflow-hidden">
        {/* Floating Icon Animation */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-sky-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-md sm:text-xl powergrok text-black dark:text-white transition-all duration-300">
              {events.cardName}
            </h2>
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-white transition-all duration-300">
              <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300 transition-all duration-300 group-hover:rotate-180" />
            </div>
          </div>
        </CardHeader>

        <Separator className="bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-600 transition-all duration-300" />

        <CardContent className="p-4 sm:p-6 dm-sans text-sm sm:text-lg">
          <div className="space-y-3 sm:space-y-4">
            {renderEventCount(
              events.workshop,
              events.workshop === 1 ? "Workshop" : "Workshops",
              <Settings />,
              "bg-blue-100 dark:bg-blue-900",
              "text-blue-600 dark:text-blue-300"
            )}
            {renderEventCount(
              events.technicalEventCount,
              events.technicalEventCount === 1
                ? "Technical Event"
                : "Technical Events",
              <LaptopMinimal />,
              "bg-purple-100 dark:bg-purple-900",
              "text-purple-600 dark:text-purple-300"
            )}
            {renderEventCount(
              events.nonTechnicalEventCount,
              events.nonTechnicalEventCount === 1
                ? "Non-Technical Event"
                : "Non-Technical Events",
              <Calendar />,
              "bg-orange-100 dark:bg-orange-900",
              "text-orange-600 dark:text-orange-300"
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-center mt-auto p-4 sm:p-6">
          <Button
            className="bg-sky-400 w-40 dm-sans text-white text-lg rounded-full transition-all duration-500 shadow-md hover:shadow-xl group-hover:bg-white group-hover:text-black hover:scale-105"
            onClick={handleNavigation}
            aria-label="Explore department"
          >
            Explore{" "}
            <Rocket className="group-hover:rotate-45 transition-transform duration-300" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DepartmentCard;
