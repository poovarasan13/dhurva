import  { useEffect } from "react";
import {
  MapPin,
  Clock,

  Rocket,
  
  Check,
  MoveRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/opensans.css";
import "../../assets/fonts/sourcesans.css";
import { useLocation, useNavigate } from "react-router-dom";
// import TestCard from "@/components/page-components/TestCard";
import CoordinatorCard from "@/components/page-components/CoordinatorCard";
import backgroundGif from "../../assets/gif/card-background.webp";

function EventShowPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const events = location.state || {};
  const data = events.events || {};
  const navigate = useNavigate();
  const eventTopics=data.eventTopics||[];
  const eventRounds = data.eventRounds || [];
  const eventPrize = data.eventPrize || [];
  const eventRules = data.eventRules || [];
  const studentCoordinator = data.studentCoordinator || [];

  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="text-center text-gray-700">
        No event data found. Please go back and try again.
      </div>
    );
  }

  const handleRegister = () => {
    navigate("/registration", { state: { event: data } });
  };

  return (
    <div
      className="md:mt-20 mt-10 min-h-screen flex justify-center items-start p-6 md:p-8 w-full"
      style={{
        backgroundImage: `url(${backgroundGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-sm">
        {data.posterUrl && (
          <div className="relative w-full h-80 flex justify-center">
            <img
              src={data.posterUrl}
              alt="Event Poster"
              className="object-cover block"
            />
          </div>
        )}

        <div className="p-6 md:p-12 flex flex-col justify-start items-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl powergrok font-bold text-gray-900 leading-tight">
              {data.eventName}
            </h1>
            <h2 className="text-lg md:text-xl text-sky-500 mt-2">
              {data.eventType}
            </h2>
            {data.eventOrganizedBy && (
              <h3 className="text-xl md:text-2xl font-serif font-semibold mt-3 text-gray-800">
                {data.eventOrganizedBy}
              </h3>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2 text-base md:text-lg text-gray-700 font-medium">
            <Clock className="w-5 h-5 text-gray-500" />
            <span>{data.eventTime}</span>
          </div>

          <p className="mt-4 text-base dm-sans md:text-lg sm:text-justify text-gray-800 leading-relaxed text-center">
            {data.eventDescription}
          </p>

          <div className="space-y-3 mt-4 text-base md:text-lg text-gray-800 w-full">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>{data.eventVenue}</span>
            </div>
          </div>
        </div>

        <div className="p-4 dm-sans lg:ms-7 text-gray-800 text-lg">
          {eventRules.length !== 0 && (
            <>
              <h4 className="text-yellow-400">Event Rules</h4>
              <ul className="list-disc list-inside mt-2">
                {eventRules.map((rule, idx) => (
                  <li key={idx} className="list-none dm-sans flex">
                    <Check className="text-green-500" />
                    {rule}
                  </li>
                ))}
              </ul>
            </>
          )}
          {eventTopics.length !== 0 && (
            <>
              <h4 className="text-yellow-400">Event Topics</h4>
              <ul className="list-disc list-inside mt-2">
                {eventTopics.map((topic, idx) => (
                  <li key={idx} className="list-none dm-sans flex">
                    <Check className="text-green-500" />
                    {topic}
                  </li>
                ))}
              </ul>
            </>
          )}

          {eventPrize.length !== 0 && (
            <>
              <p className="text-xl text-yellow-500">Prizes</p>
              <ul>
                {eventPrize.map((price, index) => (
                  <div className="flex" key={index}>
                    <MoveRight className="text-green-600" />
                    <li className="ms-1" key={index}>
                      {price}
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}
          {eventRounds.length !== 0 && (
            <>
              <p className="text-xl text-yellow-500">Rounds</p>
              <ul>
                {eventRounds.map((round, index) => (
                  <div className="flex" key={index}>
                    <MoveRight className="text-green-600" />
                    <li className="ms-1" key={index}>
                      {round}
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="mt-6 flex dm-sans items-center justify-center gap-3 bg-sky-500 text-white px-6 py-3 text-lg rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300"
            onClick={handleRegister}
          >
            Register Now <Rocket className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex justify-center">
          <span>
            <CoordinatorCard
              role="Staff Coordinator"
              deptDetails={data.eventStaffCoordinator}
            />
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {studentCoordinator.map((student, index) => (
            <div key={index} className="">
              <CoordinatorCard
                role="Student Coordinator"
                deptDetails={student}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventShowPage;