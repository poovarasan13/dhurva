import React from "react";
import FooterSection from "@/components/sections/footer/FooterSection";
import Navbar from "@/components/page-components/Navbar";
import { Calendar, MapPin, Clock, User, Rocket, UserPen } from "lucide-react";
import paper from "../../assets/test/paper.jpg";
import { Button } from "@/components/ui/button";
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/opensans.css";
import "../../assets/fonts/sourcesans.css";
function EventShowPage() {
  return (
    <div className="mt-20  min-h-screen font-sans">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-20 py-12 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <img
            src={paper}
            alt="Event Poster"
            className="rounded-lg shadow-xl w-full md:w-[500px] lg:w-[600px] object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-12">
          <h1 className="text-4xl font-bold mb-4 ">Techno Quiz</h1>
          <h2 className="text-2xl text-gray-400 mb-4">Paper Presentation</h2>
          <h3 className="text-3xl font-bold mb-4 dm-serif  ">
            Department Of Information Technology
          </h3>

          <div className="space-my-4">
            <p className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-gray-400" /> 11:10 AM - 1:00 PM
            </p>
          </div>

          <p className=" mt-6 leading-relaxed text-justify source-sans font-bold text-lg">
            Artificial Intelligence (AI) is defined as ‘the theory and
            development of computer systems able to perform tasks normally
            requiring human intelligence.’ Machine learning (ML) is a sub-field
            within AI. ML can be leveraged in various domains within Cyber
            Security to enhance security processes, and make it easier for
            security analysts to quickly identify priorities, deal with and
            remediate new attacks.
          </p>

          <div className="space-y-4 mt-3">
            <p className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5 text-gray-400" /> C Block – IT Project
              Lab
            </p>
            <p className="flex items-center gap-2 text-lg">
              <UserPen className="w-5 h-5   text-gray-400" /> Dr Jothi Prakash V
              - 6385908383
            </p>
            <p className="flex items-center gap-2 text-lg">
              <User className="w-5 h-5 text-gray-400" /> Siranjeevi P -
              6385908383
            </p>
          </div>

          <Button className="mt-6  bg-white border-black border-2 border-b-2 shadow-glow-sm text-black px-6 py-3 text-lg rounded-lg shadow-md hover:bg-black hover:text-white  transition-all">
            Register Now <Rocket />
          </Button>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default EventShowPage;
