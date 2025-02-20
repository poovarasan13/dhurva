import EventsDisplay from "./EventsDisplay";
import ExploreEvents from "./ExploreEvents";
import HeroPage from "./HeroPage";
import OffStageDetails from "./OffStageDetails";

const OffStage = () => {
  const document = {
    OffStage: true,
    title: "Off-Stage Events",
    tagline: "To Bring Out the Beast in You",
  };

  return (
    <div>
      <HeroPage {...document} />
      <ExploreEvents EventData={OffStageDetails} />
      <EventsDisplay />
    </div>
  );
};

export default OffStage;
