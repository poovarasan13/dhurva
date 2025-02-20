import EventCard from "./EventCard";
import EventsDisplay from "./EventsDisplay";

const ExploreEvents = (props) => {
  const EventData = props.EventData;

  const scrollToEvent = (index) => {
    const eventCard = document.getElementById(`event-card-${index}`);
    if (eventCard) {
      const offsetTop = eventCard.offsetTop;
      window.scrollTo({
        top: offsetTop + 480, // Adjust this value based on your header height or any top spacing
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8 sticky">
      <div className="max-w-7xl mx-auto mb-6">
        <h1
          className="text-white text-4xl font-bold mb-8 dm-sans"
          data-aos="fade-down"
        >
          Explore All Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EventData.map((event, index) => (
            <div
              key={event.id}
              data-aos="fade-up"
              className="h-full cursor-pointer" // Added cursor-pointer for better UX
              onClick={() => scrollToEvent(index)} // Add click handler
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
      <EventsDisplay scrollToEvent={scrollToEvent} />
    </div>
  );
};

export default ExploreEvents;
