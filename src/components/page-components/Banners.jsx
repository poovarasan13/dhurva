import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoscroll from "embla-carousel-auto-scroll";

import "../../assets/fonts/dmserif.css";
// import ClubAssets from "@/assets/images/ClubAssets";
import ClubAssets from "@/assets/images/HomePage/ClubAssets";
const images = Object.values(ClubAssets);
// const images = [one,two];

export default function Banners() {
  const autoscroll = useRef(
    Autoscroll({
      speed: 0.8,
      direction: "backward",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <div className="container mx-auto my-8 ">
      <h4 className="text-center text-5xl my-4 bebas">Our Clubs</h4>
      <div className="">
        <div className="relative bg-transparent rounded-2xl">
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
              align: "start",
            }}
            plugins={[autoscroll.current]}
            className="relative "
          >
            <CarouselContent className="pl-1 pr-1 sm:pl-2 sm:pr-2 md:pl-3 md:pr-3 -ml-0.5 sm:-ml-1 flex gap-1">
              {images.concat(images).map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7"
                >
                  <div className="shadow-md rounded-2xl  flex items-center justify-center h-25 w-35 sm:h-28 sm:w-34 md:w-30 md:h-38 lg:h-36 xl:h-40">
                    <CardContent className="flex items-center justify-center p-2">
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-35 h-45 object-contain"
                      />
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
