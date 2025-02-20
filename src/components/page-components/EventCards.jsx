import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Binoculars, Clock, Rocket } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function EventCards({ events }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/eventInfo", {
      state: {
        events,
      },
    });
  };
  return (
    <div className="flex hover:scale-105 duration-300 rounded-xl justify-center dm-sans   overflow-hidden ">
      <Card className=" w-[450px] bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
        <CardContent className="">
          <img
            src={events.eventThumbnail}
            alt="Event Poster"
            className="w-full h-40 object-cover rounded-lg shadow-sm"
          />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {events.eventName}
            </h3>
            <p className="text-sm text-gray-600 font-semibold dark:text-gray-300 mt-1">
              {events.eventType}
            </p>
            <p className="text-sm flex justify-center gap-2 font-medium text-gray-700 dark:text-gray-400 mt-1 font-semibold">
              <Clock className="text-xs" /> Time:
              <span className=" text-gray-800"> {events.eventTime}</span>
            </p>
          </div>
        </CardContent>

        <CardFooter className="">
          <Button
            onClick={handleNavigate}
            className=" mx-auto hover:drop-shadow-none hover:bg-white  drop-shadow-lg  w-64 rounded-full bg-sky-400 hover:text-black hover:border-spacing-4 hover:border-2 hover:outline-2 hover:outline-black text-white font-semibold py-2  flex items-center justify-center gap-2 transition-all duration-300"
          >
            Visit <Rocket />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default EventCards;
