import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import kce25 from "../../../assets/images/kce25.jpg";
import "../../../assets/fonts/allfonts.css";
import "../../../assets/fonts/dmsans.css";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import dhruva from "../../../assets/images/dhurva-logo.png";

const images = [dhruva, kce25];

function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className=" py-8">
      <div className="container px-4 md:px-8 lg:px-16 xl:px-20 dm-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="text-center lg:text-left lg:pr-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight work-sans">
              <span className="text-transparent  bg-clip-text bg-gradient-to-r font-extrabold from-green-500 to-green-700">
                Experience
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 font-extrabold to-red-700">
                The
              </span>{" "}
              <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-500 to-blue-700">
                KCE's
              </span>{" "}
              <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-orange-400 to-orange-600">
                Dhruva
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-justify leading-7 text-gray-900 dark:text-gray-100">
              Karpagam College of Engineering proudly presents the 9th edition
              of{" "}
              <span className="hover:text-sky-300 text-orange-400">
                DHRUVA{" "}
              </span>
              a national-level techno-management-cultural fest happening on
              <span className="hover:text-sky-300 text-orange-400">
                {" "}March 13, 14, 15
              </span>
              . Join us for three days of innovation, learning, and celebration.
              Don't miss this unforgettable experience!
            </p>

            {/* Register Button */}
            <div className="py-8 flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.button
                    className="text-white josefin px-3 py-2 md:px-8 md:py-3 md:text-xl bg-sky-400 hover:bg-sky-400 shadow-lg flex gap-2 items-center rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Register
                    <motion.div
                      whileHover={{ y: -5, rotate: -15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Rocket size={18} />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.play()}
            >
              <CarouselContent>
                {images.map((img, idx) => (
                  <CarouselItem key={idx} className="w-full sm:w-auto">
                    <div className="p-2 sm:p-4">
                      <Card className="shadow-xl rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
                        <CardContent className="flex items-center justify-center p-3 sm:p-6">
                          <img
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-40 sm:h-52 md:h-64 lg:h-80 object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
