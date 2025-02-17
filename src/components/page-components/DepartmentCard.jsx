import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Calendar, Cpu, Laptop, LaptopMinimal, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/dmsans.css";
import "../../assets/fonts/arapey.css";
import { NavLink, useNavigate } from "react-router-dom";

function DepartmentCard({ events }) {
  const navigate = useNavigate();

  return (
    <div className="group hover:scale-105 transition-transform duration-300 w-full sm:w-[380px] md:w-[400px]">
      <Card className="w-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:bg-black">
        {/* Card Header */}
        <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-700 dark:to-gray-800 group-hover:from-black group-hover:to-black">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-white dm-serif transition-all duration-300">
              {events.departmentName}
            </h2>
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-gray-700 transition-all duration-300">
              <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-300 transition-all duration-300" />
            </div>
          </div>
        </CardHeader>

        {/* Separator */}
        <Separator className="bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-600 transition-all duration-300" />

        <CardContent className="p-4 sm:p-6 dm-sans text-sm sm:text-lg">
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                icon: Settings,
                text: `${events.workShop} Workshops`,
                bg: "bg-blue-100 dark:bg-blue-900",
                iconColor: "text-blue-600 dark:text-blue-300",
              },
              {
                icon: LaptopMinimal,
                text: `${events.hackathon} Hackathons`,
                bg: "bg-purple-100 dark:bg-purple-900",
                iconColor: "text-purple-600 dark:text-purple-300",
              },
              {
                icon: Cpu,
                text: `${events.nonTechnicalEvent} Non-Technical Events`,
                bg: "bg-green-100 dark:bg-green-900",
                iconColor: "text-green-600 dark:text-green-300",
              },
              {
                icon: Calendar,
                text: `${events.technicalEvent} Technical Events`,
                bg: "bg-orange-100 dark:bg-orange-900",
                iconColor: "text-orange-600 dark:text-orange-300",
              },
            ].map(({ icon: Icon, text, bg, iconColor }, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`${bg} p-2 rounded-full group-hover:bg-gray-700 transition-all duration-300`}
                >
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor} transition-all duration-300`}
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-all duration-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Card Footer */}
        <CardFooter className="p-4 sm:p-6">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md group-hover:bg-white group-hover:text-black"
            asChild
          >
            <NavLink to={events.href} className="arapey-visit">
              Visit
            </NavLink>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DepartmentCard;
