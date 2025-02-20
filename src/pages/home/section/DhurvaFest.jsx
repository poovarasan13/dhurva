import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wifi,
  Music,
  Code,
  Award,
  Smile,
  Calendar,
  WholeWord,
  Earth,
  CircuitBoard,
} from "lucide-react";
import React from "react";

import "../../../assets/fonts/dmsans.css";
import "../../../assets/fonts/opensans.css";
import "../../../assets/fonts/allfonts.css";
import { Carousel } from "@/components/ui/carousel";
import CarosualCard from "./CarosualCard";

function DhurvaFest() {
  return (
    <div className="py-16 px-6 sm:px-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="sm:text-5xl text-3xl  font-bold text-gray-900 mb-4 dm-sans ">
          KCE Dhruva Events
        </h2>
        <p className="sm:text-xl text-md text-gray-900 mb-10 ">
          Join us as we bring together vivid minds, visionaries, and budding
          talents from all parts of the country to showcase their skills and
          passion in a vibrant environment.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center p-8">
            <CarosualCard />
          </div>

          <div className="space-y-8">
            <p className="text-md sm:text-xl text-gray-700 text-justify dm-sans ">
              KCE Dhruva Events brings together innovators and creators to
              showcase their skills through a fusion of technical and cultural
              celebrations. Get ready for an unforgettable journey filled with
              electrifying tech competitions, mesmerizing cultural performances,
              and much more!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden">
                <CardHeader className=" bg-green-300 p-6 text-center">
                  <Code className="h-12 w-12 text-white mx-auto" />
                </CardHeader>
                <CardContent className="p-4 text-center bg-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 dm-sans">
                    Technical Event
                  </h3>
                  <p className="text-gray-600 sm:mb-6 mb-3 text-justify carme-regular">
                    Take on thrilling tech events, hackathons, and challenges
                    that test your creativity and skills. Innovate, collaborate,
                    and compete!
                    <span className="text-green-400"> March 14</span>.
                  </p>
                </CardContent>
                <CardFooter className="bg-gray-50 p-6 my-auto text-center justify-center">
                  <Button className="bg-green-300 hover:bg-green-300 text-white hover:text-black work-sans  transition-all py-2 px-6 rounded-full text-lg">
                    Explore More <CircuitBoard />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden">
                <CardHeader className="bg-sky-300 p-6 text-center">
                  <Music className="h-12 w-12 text-white  mx-auto" />
                </CardHeader>
                <CardContent className="p-4 text-center bg-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 dm-sans">
                    Cultural Event
                  </h3>
                  <p className="text-gray-600 sm:mb-6 mb-3 text-justify carme-regular">
                    Experience vibrant culture through music, dance, theatre,
                    and art. Celebrate creativity and innovation! Happening on{" "}
                    <span className="text-sky-400"> March 15</span>.
                  </p>
                </CardContent>
                <CardFooter className="bg-gray-50  text-center justify-center">
                  <Button className="bg-sky-400 rounded-full mt-12 hover:bg-sky-400 text-white hover:text-black work-sans  transition-all py-2 px-6  text-lg">
                    Explore More <Earth />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DhurvaFest;
