import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function EventCards({ events }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/eventInfo");
  };
  return (
    <div className="flex justify-center dm-sans  p-4">
      <Card className="w-[320px] sm:w-[350px] bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-4">
          <img
            src={events.posterLink}
            alt="Event Poster"
            className="w-full h-40 object-cover rounded-lg shadow-sm"
          />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {events.eventName}
            </h3>
            <p className="text-sm text-gray-600 font-semibold dark:text-gray-300 mt-1">
              {events.eventSubName}
            </p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mt-1 font-semibold">
              ⏰ Time:{" "}
              <span className="font-bold text-black">{events.time}</span>
            </p>
          </div>
        </CardContent>

        <CardFooter className="p-4">
          <Button
            onClick={handleNavigate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            Visit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default EventCards;
