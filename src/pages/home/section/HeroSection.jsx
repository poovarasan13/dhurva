import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import "../../../assets/fonts/allfonts.css";
import "../../../assets/fonts/dmsans.css";
// import { Button } from "@/components/ui/button";
import Button from "@/components/page-components/Button";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";


import HeroSection from "@/assets/images/HomePage/HeroSection";

const images = Object.values(HeroSection);

function HeroSectionComponent() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="py-8">
      <div className="container px-4 md:px-8 lg:px-16 xl:px-20 dm-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="text-center lg:text-left lg:pr-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight work-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-green-500 to-green-700">
              Forge 
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 font-extrabold to-red-700">
              Your 
              </span>{" "}
              <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-500 to-blue-700">
              Future 
              </span>{" "}
              <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-orange-400 to-orange-600">
              at DHRUVA 2025!
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl leading-7 text-gray-900 dark:text-gray-100">
              Karpagam College of Engineering presents the 8th edition of{" "}
              <strong>DHRUVA</strong>, a national-level
              techno-management-cultural fest on{" "}
              <strong>March 13, 14, 15</strong>. Join us for an unforgettable
              experience!
            </p>

            {/* <div className="py-4 flex justify-center lg:justify-start">
              <Button className="text-white bg-blue-600 hover:bg-blue-700 shadow-lg transform hover:scale-105 transition-all duration-300 flex gap-2 items-center">
                Register <Rocket size={18} />
              </Button>
            </div> */}

            {/* Register Button
            <div className="py-5 flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.button
                  className="text-white josefin px-5   py-2 md:px-4 md:py-2 md:text-[15px] bg-blue-600 hover:bg-blue-700 shadow-lg flex gap-2 items-center rounded-full"
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
 */}
          <Button link="#" text="Register" />
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

export default HeroSectionComponent;
