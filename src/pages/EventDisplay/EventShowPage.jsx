import React, { useEffect } from "react";
import { Calendar, MapPin, Clock, User, Rocket, UserPen } from "lucide-react";
import paper from "../../assets/test/guest1.png";
import { Button } from "@/components/ui/button";
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/opensans.css";
import "../../assets/fonts/sourcesans.css";

function EventShowPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "Each team gets 60-90 seconds per turn. Teams take turns acting and guessing.",
    "2-4 members per team.",
    "The actor cannot speak, write, or mouth words only gestures and facial expressions are allowed.",
    "Words are assigned randomly from different categories.",
  ];

  return (
    <div className="mt-16 min-h-screen bg-gray-50 flex justify-center items-center px-4 sm:px-6  py-12">
      <div className="container max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
     
        <div className="md:w-1/2 w-full flex justify-center items-center p-6">
          <img
            src={paper}
            alt="Event Poster"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-xl shadow-md"
          />
        </div>

    
        <div className="md:w-1/2 w-full px-6 py-8 sm:px-8 sm:py-10 flex flex-col justify-center space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight text-center md:text-left">
            Techno Quiz
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-500 text-center md:text-left">
            Paper Presentation
          </h2>
          <h3 className="text-lg sm:text-2xl font-serif font-semibold text-gray-800 text-center md:text-left">
            Department Of Information Technology
          </h3>

          {/* Event Timing */}
          <div className="flex items-center gap-2 text-sm sm:text-lg text-gray-700 font-medium justify-center md:justify-start">
            <Clock className="w-5 h-5 text-gray-500" /> 11:10 AM - 1:00 PM
          </div>

          {/* Event Description */}
          <p className="text-sm sm:text-lg text-gray-800 leading-relaxed text-center md:text-left">
            Join us for an exciting Techno Quiz that challenges your knowledge
            in Artificial Intelligence and Machine Learning. Enhance your
            understanding, compete with peers, and gain insights into the latest
            trends in technology.
          </p>

          <div className="space-y-3 text-sm sm:text-lg text-gray-800">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-gray-500" /> C Block – IT Project
              Lab
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <UserPen className="w-5 h-5 text-gray-500" /> Ms. A. Arthi, AP /
              IT & Ms. K. Ananthi, AP / IT
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <User className="w-5 h-5 text-gray-500" /> P. Madhan, 9345453082 &
              R. Karthik Kiran, 8300181333
            </p>
          </div>

          {/* Event Rules */}
          <div className="text-sm sm:text-lg text-gray-800">
            <h4 className="font-semibold text-center md:text-left">
              Event Rules:
            </h4>
            <ul className="list-disc list-inside mt-2 space-y-1 text-center md:text-left">
              {rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
            <p className="mt-2 text-center md:text-left">
              Round 1, Final Round
            </p>
            <p className="text-center md:text-left">
              All participants will receive participation certificates.
            </p>
          </div>

          {/* Register Button */}
          <div className="flex justify-center md:justify-start">
            <Button className="mt-4 flex items-center gap-3 bg-sky-400 text-white px-6 py-3 text-lg rounded-full shadow-lg hover:bg-sky-400 hover:text-black transition-all duration-300">
              Register Now <Rocket className="w-5 h-5 " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventShowPage;
