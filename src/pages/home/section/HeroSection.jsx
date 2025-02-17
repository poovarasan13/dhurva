import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import one from "../../../assets/test/1.png";
import two from "../../../assets/test/2.png";
import three from "../../../assets/test/3.png";
import four from "../../../assets/test/4.png";
import five from "../../../assets/test/5.png";
import six from "../../../assets/test/vue.png";
import "../../../assets/fonts/allfonts.css";

const images = [one, two, three, four, five, six];

function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="mt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="lg:pr-10 ms-10">
            <p className="text-7xl font-extrabold leading-tight work-sans  ">
              <span className="text-green-500">Create</span>{" "}
              <span className="hover:text-red-600 text-red-700">Your</span>{" "}
              <span className="hover:text-blue-400 text-blue-600">Own</span>{" "}
              <span className="hover:text-orange-400  text-orange-300">Destiny</span>
            </p>
            <p className="mt-4 text-lg text-gray-900">
              Karpagam College of Engineering is delighted to present the 8th
              edition of <strong>DHRUVA </strong>, a national-level
              techno-management-cultural fest on
              <strong> March 13, 14, 15</strong>. Mark your calendars and join
              us for an unforgettable celebration of talent, creativity, and
              innovation at Dhruva 2024!
            </p>
          </div>

          <div className="flex justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-lg"
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.play()}
            >
              <CarouselContent>
                {images.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <div className="p-2">
                      <Card className="shadow-xl rounded-lg overflow-hidden">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-full object-cover rounded-lg"
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
