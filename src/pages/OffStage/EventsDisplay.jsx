import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Calendar, MapPin, Clock, Users, Star, Rocket, Phone } from "lucide-react"; // Import Phone icon
import eventsData from "./OffStageDetails.js";

const EventsDisplay = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            delay: 100,
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 space-y-6 sm:space-y-8 overflow-hidden">
            {eventsData.map((event, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${event.reverse ? "md:flex-row-reverse" : ""} items-center gap-4 md:gap-8 bg-gradient-to-r from-white to-gray-100 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-300 w-full max-w-full`}
                    data-aos="fade-up"
                >
                    {/* Image Section */}
                    <div className="w-full md:w-1/2" data-aos="zoom-in">
                        <img
                            src={event.image}
                            alt={event.eventName}
                            className="w-full h-auto rounded-xl shadow-md border border-gray-300 transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="w-full md:w-1/2 space-y-3 md:space-y-4" data-aos="fade-left">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-800">
                            <Users className="text-blue-500" /> {event.eventName}
                        </h1>

                        {/* Venue and Time */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 text-gray-700">
                                <MapPin className="text-red-500" />
                                <h3 className="text-sm md:text-lg font-medium">Venue: {event.venue}</h3>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="text-green-500" />
                                <h3 className="text-sm md:text-lg font-medium">Time: {event.time}</h3>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-md sm:text-lg md:text-xl font-semibold flex items-center gap-2 text-gray-700">
                                <Calendar className="text-purple-500" /> Description:
                            </h2>
                            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 pl-3 space-y-1 sm:space-y-2">
                                {event.description.map((item, index) => (
                                    <li key={index} className="transition-transform duration-200 hover:translate-x-1" data-aos="fade-right">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Faculty Coordinator */}
                        <div>
                            <h2 className="text-md sm:text-lg md:text-xl font-semibold flex items-center gap-2 text-gray-700">
                                <Star className="text-yellow-500" /> Faculty Coordinator
                            </h2>
                            <p className="text-sm md:text-base text-gray-600">{event.facultyCoordinator}</p>
                            {/* Mobile Number for Faculty Coordinator */}
                            <div className="flex items-center gap-2 text-gray-600">
                                <Phone className="text-blue-500" />
                                <p className="text-sm md:text-base">{event.facultyNumber}</p>
                            </div>
                        </div>

                        {/* Student Coordinator */}
                        <div>
                            <h2 className="text-md sm:text-lg md:text-xl font-semibold flex items-center gap-2 text-gray-700">
                                <Star className="text-yellow-500" /> Student Coordinator
                            </h2>
                            <p className="text-sm md:text-base text-gray-600">{event.studentCoordinator}</p>
                            {/* Mobile Number for Student Coordinator */}
                            <div className="flex items-center gap-2 text-gray-600">
                                <Phone className="text-blue-500" />
                                <p className="text-sm md:text-base">{event.studentNumber}</p>
                            </div>
                        </div>

                        {/* Register Now Button */}
                        <a
                            href="#"
                            className="inline-block dm-sans hover:scale-105 bg-sky-400 hover:bg-sky-400 hover:text-black focus-visible:ring ring-sky-300 text-white text-sm md:text-base font-semibold text-center rounded-full outline-none transition duration-100 px-8 sm:px-12 py-2 sm:py-3"
                            data-aos="zoom-in"
                        >
                            <span className="flex justify-center items-center gap-2">
                                Register Now <Rocket />
                            </span>
                        </a>
                        
                    </div>
                </div>

            ))}
        </div>
    );
};

export default EventsDisplay;
