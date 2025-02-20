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
import guest1 from "../../../assets/test/guest1.png";
// import guest2 from "../../../assets/"
function CarosualCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-max  md:w-96 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <img src={guest1} className="  rounded-3xl" />
        </CarouselItem>
        <CarouselItem>
          <img src={guest1} className="  rounded-3xl" />
        </CarouselItem>
        <CarouselItem>
          <img src={guest1} className=" rounded-3xl" />
        </CarouselItem>
        <CarouselItem>
          <img src={guest1} className="  rounded-3xl" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default CarosualCard;
