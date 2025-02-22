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
import Button from "@/components/page-components/Button";
import { Rocket } from "lucide-react";
import HeroSection from "@/assets/images/HomePage/HeroSection";

const images = Object.values(HeroSection);

function HeroSectionComponent() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 dm-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left lg:pr-8 xl:pr-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight work-sans">
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
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 text-gray-900 dark:text-gray-100">
              Karpagam College of Engineering presents the 8th edition of{" "}
              <strong>DHRUVA</strong>, a national-level
              techno-management-cultural fest on{" "}
              <strong>March 13, 14, 15</strong>. Join us for an unforgettable
              experience!
            </p>

            {/* Register Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <Button link="#" text="Register" />
            </div>
          </div>

          {/* Carousel Section */}
          <div className="flex justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl"
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
                            className="w-full h-auto object-cover rounded-lg"
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
