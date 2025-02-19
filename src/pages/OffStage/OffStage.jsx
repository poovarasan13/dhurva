import React from "react";
import EventsDisplay from "./EventsDisplay";
import ExploreEvents from "./ExploreEvents";
import HeroPage from "./HeroPage";

const OffStage = ()=>{

  const document = {OffStage: true,title:"Off-Stage Events",tagline:"To Bring Out the Beast in You"};

  const EventData = [
    { id: 1, title: "Face Painting", image: "" },
    { id: 2, title: "Face Painting", image: "" },
    { id: 3, title: "Face Painting", image: "" },
    { id: 4, title: "Face Painting", image: "" },
    { id: 5, title: "Face Painting", image: "" },
    { id: 6, title: "Face Painting", image: "" },
    { id: 7, title: "Face Painting", image: "" },
    { id: 8, title: "Face Painting", image: "" },
    { id: 9, title: "Face Painting", image: "" },
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
export default OffStage;