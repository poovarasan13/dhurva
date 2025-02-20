import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import DhurvaFest from "@/utils/constant"; // Import the DhurvaFest object
import DhurvaFest from "@/assets/images/HomePage/DhurvaFest";

function CarosualCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }) // Delay is in milliseconds
  );

  // Convert the DhurvaFest object into an array of image URLs
  const imageUrls = Object.values(DhurvaFest);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-max md:w-96"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <img
              src={imageUrl}
              className="rounded-3xl"
              alt={`Slide ${index + 1}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarosualCard;
