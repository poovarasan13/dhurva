"use client";

import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import one from "../../assets/test/1.png";
import two from "../../assets/test/2.png";
import three from "../../assets/test/3.png";
import four from "../../assets/test/4.png";
import five from "../../assets/test/5.png";
import six from "../../assets/test/vue.png";

const images = [one, two, three, four, five, six];

export default function InfiniteCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div className="max-w-full mx-auto px-2 sm:px-4">
      <Carousel
        opts={{
          loop: true,
          dragFree: true,
          align: "start",
          speed: 5,
        }}
        plugins={[plugin.current]}
        className="relative"
      >
        <CarouselContent className="-ml-2 sm:-ml-4 flex gap-2 sm:gap-4">
          {images.concat(images).map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:pl-4 basis-[60%] xs:basis-[50%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <Card className="p-1 sm:p-2 shadow-md rounded-lg">
                <CardContent className="aspect-square flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="md:w-32 md:h-32 sm:w-4 sm:h-4"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
