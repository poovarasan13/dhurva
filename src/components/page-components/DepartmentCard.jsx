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
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/dmsans.css";
import "../../assets/fonts/arapey.css";
import { useNavigate } from "react-router-dom";

function DepartmentCard({ events }) {
  const navigate = useNavigate();

  const handeNavigation = () => {
    navigate(`/departmentInfo`, {
      state: { events },
    });
  };

  return (
    <div className="group hover:scale-105 transition-transform duration-300 w-full sm:w-[380px] md:w-[400px]">
      <Card
        className={`w-full md:h-96 bg-white dark:from-gray-700 dark:to-gray-800 hover:bg-sky-300 border-2 hover:border-black shadow-md hover:shadow-lg rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300`}
      >
        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-md sm:text-lg font-bold text-gray-800 dark:text-black group-hover:text-black dm-serif transition-all duration-300">
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
            <div className="flex items-center gap-3 sm:gap-4">
              {events.workshop != 0 ? (
                <>
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full group-hover:bg-white transition-all duration-300">
                    <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-300 transition-all duration-300" />
                  </div>
                  <p className="text-gray-700 hover:font-extrabold dark:text-gray-300 group-hover:text-black transition-all duration-300">
                    {events.workshop} Workshops
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {events.technicalEventCount != 0 ? (
                <>
                  {" "}
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full group-hover:bg-white transition-all duration-300">
                    <LaptopMinimal className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-300 transition-all duration-300" />
                  </div>
                  <p className="text-gray-700 hover:font-extrabold dark:text-gray-300 group-hover:text-black transition-all duration-300">
                    {events.technicalEventCount} Technical Events
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {events.nonTechnicalEventCount != 0 ? (
                <>
                  {" "}
                  <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full group-hover:bg-white transition-all duration-300">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 dark:text-orange-300 transition-all duration-300" />
                  </div>
                  <p className="text-gray-700 hover:font-extrabold dark:text-gray-300 group-hover:text-black transition-all duration-300">
                    {events.nonTechnicalEventCount} Non-Technical Events
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center mt-auto sm:p-6">
          <Button
            className="bg-sky-400 w-40 dm-sans text-white text-lg rounded-full transition-all duration-300 shadow-sm hover:shadow-md group-hover:bg-white group-hover:text-black"
            onClick={handeNavigation}
          >
            Explore <Rocket />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DepartmentCard;
