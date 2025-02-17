"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoscroll from "embla-carousel-auto-scroll";

import one from "../../assets/test/1.png";
import two from "../../assets/test/2.png";
import three from "../../assets/test/3.png";
import four from "../../assets/test/4.png";
import five from "../../assets/test/5.png";
import six from "../../assets/test/vue.png";

const images = [one, two, three, four, five, six];
const orangeColor = "rgb(252,119,0)";
export default function ContinuousCarousel() {
  const autoscroll = useRef(
    Autoscroll({
      speed: 0.8,
      direction: "backward",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <div className="container mx-auto py-8">
      <div className="">
        <div className="relative bg-white rounded-2xl">
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
              align: "start",
            }}
            plugins={[autoscroll.current]}
            className="relative py-9"
            style={{ backgroundColor: orangeColor }}
          >
            <CarouselContent className="pl-1 pr-1 sm:pl-2 sm:pr-2 md:pl-3 md:pr-3 -ml-0.5 sm:-ml-1 flex gap-1">
              {images.concat(images).map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7"
                >
                  <Card className="shadow-md rounded-2xl bg-white flex items-center justify-center h-24 w-31 sm:h-28 sm:w-34 md:w-30 md:h-38 lg:h-36 xl:h-40">
                    <CardContent className="flex items-center justify-center p-2">
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
