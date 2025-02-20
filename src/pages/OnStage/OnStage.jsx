import React from "react";
import EventsDisplay from "./EventsDisplay";
import ExploreEvents from "./ExploreEvents";
import HeroPage from "./HeroPage";
import onstage from "@/assets/images/OnStage/onstage";
const OnStage = () => {
  const document = {
    OnStage: true,
    title: "On-Stage Events",
    tagline: "To Bring Out the Beast in You",
  };

  const EventData = [
    { id: 1, title: "Solo Singing", image: onstage.SoloSinging },
    { id: 2, title: "Solo Dancing", image: onstage.SoloDancing },
    { id: 3, title: "Group Dance", image: onstage.GroupDance },
    { id: 4, title: "Instrumentals", image: onstage.Instrumentals },
    { id: 5, title: "Adapt Tune", image: onstage.AdaptTune },
    { id: 6, title: "Skit Mime", image: onstage.mime },
    { id: 7, title: "Vj/Rj  Hunt", image: onstage.rj },
    { id: 8, title: "Variety Event", image: onstage.Variety },
    { id: 9, title: "Solo Dancing", image: "" },
  ];

  return (
    <div>
      <HeroPage {...document} />
      <ExploreEvents EventData={EventData} />
      <EventsDisplay />
    </div>
  );
};

// export default StageEvents;
export default OnStage;
