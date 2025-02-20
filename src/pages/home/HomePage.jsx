import React, { useEffect } from "react";
import HeroSection from "./section/HeroSection";
import DhurvaFest from "./section/DhurvaFest";
import Banners from "@/components/page-components/Banners";
import ProPassList from "./section/ProPassList";
import Gallery from "./section/Gallery";
import VideoParallax from "./section/VideoParallax";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <VideoParallax />
      <HeroSection />

      <Gallery />
      <DhurvaFest />
      {/* <ProPassList /> */}
      <Banners />
    </div>
  );
}

export default HomePage;
