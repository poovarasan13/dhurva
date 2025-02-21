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

function DepartmentCard({ events }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/departmentInfo`, {
      state: { events },
    });
  };

  return (
    <div className="relative group hover:scale-105 transition-transform duration-500 w-full sm:w-[380px] md:w-[400px]">
      <img
        src={events.cardGif}
        alt="Background Animation"
        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-100 transition-opacity duration-500 group-hover:opacity-20"
      />

      <Card className="relative z-10 w-full md:h-96  dark:bg-gray-800/80 border-2 border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg rounded-lg transition-all duration-500 group-hover:bg-sky-400">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-md sm:text-xl powergrok text-black hover:bg-transparent backdrop-brightness-95 bg-gray-50 bg-opacity-20 dark:text-white group-hover:text-black transition-all duration-300">
              {events.cardName}
            </h2>
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-white transition-all duration-300">
              <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300 transition-all duration-300" />
            </div>
          </div>
        </CardHeader>

        <Separator className="bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-600 transition-all duration-300" />

        <CardContent className="p-4 sm:p-6 dm-sans text-sm sm:text-lg">
          <div className="space-y-3 sm:space-y-4">
            {events.workshop > 0 && (
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full group-hover:bg-white transition-all duration-300">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-300 transition-all duration-300" />
                </div>
                <p className="text-gray-700 hover:font-extrabold dark:text-gray-300 group-hover:text-black transition-all duration-300">
                  {events.workshop} Workshops
                </p>
              </div>
            )}
            {events.technicalEventCount > 0 && (
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full group-hover:bg-white transition-all duration-300">
                  <LaptopMinimal className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-300 transition-all duration-300" />
                </div>
                <p className="text-gray-700 hover:font-extrabold dark:text-gray-300 group-hover:text-black transition-all duration-300">
                  {events.technicalEventCount} Technical Events
                </p>
              </div>
            )}
            {events.nonTechnicalEventCount > 0 && (
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full group-hover:bg-white transition-all duration-300">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 dark:text-orange-300 transition-all duration-300" />
                </div>
                <p className="text-gray-700 hover:font-extrabold dark:text-gray-300 group-hover:text-black transition-all duration-300">
                  {events.nonTechnicalEventCount} Non-Technical Events
                </p>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-center mt-auto sm:p-6">
          <Button
            className="bg-sky-400 w-40 dm-sans text-white text-lg rounded-full transition-all duration-500 shadow-md hover:shadow-xl group-hover:bg-white group-hover:text-black"
            onClick={handleNavigation}
          >
            Explore <Rocket />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DepartmentCard;
