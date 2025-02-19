import React from "react";
import EventsDisplay from "./EventsDisplay";
import ExploreEvents from "./ExploreEvents";
import HeroPage from "./HeroPage";

const OnStage = ()=>{

  const document = {OnStage: true,title:"On-Stage Events",tagline:"To Bring Out the Beast in You"};

  const EventData = [
    { id: 1, title: "Solo Dancing", image: "" },
    { id: 2, title: "Solo Dancing", image: "" },
    { id: 3, title: "Solo Dancing", image: "" },
    { id: 4, title: "Solo Dancing", image: "" },
    { id: 5, title: "Solo Dancing", image: "" },
    { id: 6, title: "Solo Dancing", image: "" },
    { id: 7, title: "Solo Dancing", image: "" },
    { id: 8, title: "Solo Dancing", image: "" },
    { id: 9, title: "Solo Dancing", image: "" },
  ];

    return(
    <div>
      <HeroPage {...document}/>
      <ExploreEvents EventData={EventData}/>
      <EventsDisplay/>
    </div>
    )
}

// export default StageEvents;
export default OnStage;