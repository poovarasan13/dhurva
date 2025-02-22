import React from "react";
import EventCards from "@/components/page-components/EventCards.jsx";
import "../../assets/fonts/opensans.css";

function EventShowOff({ events }) {
  const workshops = events.filter((event) => event.eventSubType === "WorkShop");
  const technical = events.filter(
    (event) => event.eventSubType === "Technical"
  );
  const nonTechnical = events.filter(
    (event) => event.eventSubType === "NonTechnical"
  );

  return (
    <>
   
      <>
        {workshops.length > 0 ? (
          <>
            <h3 className="text-2xl sm:text-3xl font-sans text-center text-black dark:text-white mb-4">
              Workshop Events
            </h3>
            <div className="flex flex-wrap justify-center gap-4 p-4 sm:gap-6 sm:p-6">
              {workshops.map((event, index) => (
                <EventCards key={index} events={event} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {technical.length > 0 ? (
          <>
            <h3 className="text-2xl sm:text-3xl font-sans text-center text-black dark:text-white mb-4">
              Technical Events
            </h3>
            <div className="flex flex-wrap justify-center gap-4 p-4 sm:gap-6 sm:p-6">
              {technical.map((event, index) => (
                <EventCards key={index} events={event} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {nonTechnical.length > 0 ? (
          <>
            <h3 className="text-2xl sm:text-3xl font-sans text-center text-black dark:text-white mb-4">
              Non Technical Events
            </h3>
            <div className="flex flex-wrap justify-center gap-4 p-4 sm:gap-6 sm:p-6">
              {nonTechnical.map((event, index) => (
                <EventCards key={index} events={event} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    </>
  );
}

export default EventShowOff;
