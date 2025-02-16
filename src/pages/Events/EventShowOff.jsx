import React from "react";
import events from "../../data/Events.js";
import EventCards from "@/components/page-components/EventCards.jsx";

function EventShowOff() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {events.map((event, index) => (
        <EventCards key={index} events={event} />
      ))}
    </div>
  );
}

export default EventShowOff;
