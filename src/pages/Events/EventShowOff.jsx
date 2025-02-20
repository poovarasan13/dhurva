import React from "react";
import events from "../../data/Events.js";
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
      <h3 className="text-3xl font-sans text-center text-black">Workshops</h3>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {workshops.length > 0 ? (
          workshops.map((event, index) => (
            <EventCards key={index} events={event} />
          ))
        ) : (
          <p className="text-gray-500">No workshops available</p>
        )}
      </div>

      <h3 className="text-3xl font-sans text-center text-black">
        Technical Events
      </h3>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {technical.length > 0 ? (
          technical.map((event, index) => (
            <EventCards key={index} events={event} />
          ))
        ) : (
          <p className="text-gray-500">No Technical Events available</p>
        )}
      </div>

      <h3 className="text-3xl font-sans text-center text-black">
        Non-Technical Events
      </h3>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {nonTechnical.length > 0 ? (
          nonTechnical.map((event, index) => (
            <EventCards key={index} events={event} />
          ))
        ) : (
          <p className="text-gray-500">No non-technical events available</p>
        )}
      </div>
    </>
  );
}

export default EventShowOff;
