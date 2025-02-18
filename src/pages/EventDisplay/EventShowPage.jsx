import React from "react";
import { Calendar, MapPin, Clock, User, Rocket, UserPen } from "lucide-react";
import paper from "../../assets/test/guest1.png";
import { Button } from "@/components/ui/button";
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/opensans.css";
import "../../assets/fonts/sourcesans.css";

function EventShowPage() {
  const rules = [
    "Each team gets 60-90 seconds per turn. Teams take turns acting and guessing.",
    "2-4 members per team.",
    "The actor cannot speak, write, or mouth words only gestures and facial expressions are allowed.",
    "Words are assigned randomly from different categories.",
  ];

  return (
    <div className="mt-20 min-h-screen bg-gray-50 flex justify-center items-center p-8">
      <div className="container max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section: Event Poster */}
        <div className="md:w-1/2 w-full flex justify-center items-center p-6">
          <img
            src={paper}
            alt="Event Poster"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right Section: Event Details */}
        <div className="md:w-1/2 w-full p-12 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Techno Quiz
          </h1>
          <h2 className="text-xl text-gray-500 mt-2">Paper Presentation</h2>
          <h3 className="text-2xl font-serif font-semibold mt-3 text-gray-800">
            Department Of Information Technology
          </h3>

          {/* Event Timing */}
          <div className="mt-4 flex items-center gap-2 text-lg text-gray-700 font-medium">
            <Clock className="w-5 h-5 text-gray-500" /> 11:10 AM - 1:00 PM
          </div>

          {/* Event Description */}
          <p className="mt-4 text-lg text-gray-800 leading-relaxed">
            Join us for an exciting Techno Quiz that challenges your knowledge
            in Artificial Intelligence and Machine Learning. Enhance your
            understanding, compete with peers, and gain insights into the latest
            trends in technology.
          </p>

          {/* Event Details */}
          <div className="space-y-3 mt-4 text-lg text-gray-800">
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-500" /> C Block – IT Project
              Lab
            </p>
            <p className="flex items-center gap-2">
              <UserPen className="w-5 h-5 text-gray-500" /> Ms. A. Arthi, AP /
              IT & Ms. K. Ananthi, AP / IT
            </p>
            <p className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-500" /> P. Madhan, 9345453082 &
              R. Karthik Kiran, 8300181333
            </p>
          </div>

          {/* Event Rules */}
          <div className="mt-4 text-gray-800 text-lg">
            <h4 className="font-semibold">Event Rules:</h4>
            <ul className="list-disc list-inside mt-2">
              {rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
            <p className="mt-2">Round 1, Final Round</p>
            <p>All participants will receive participation certificates.</p>
          </div>

          {/* Register Button */}
          <Button className="mt-6 flex dm-sans items-center gap-3 bg-sky-400 text-white px-6 py-3 text-lg rounded-full shadow-lg hover:bg-sky-400 hover:text-black transition-all duration-300">
            Register Now <Rocket className="w-5 h-5 " />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EventShowPage;
