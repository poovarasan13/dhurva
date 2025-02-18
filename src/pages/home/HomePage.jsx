import React from "react";
import HeroSection from "./section/HeroSection";
import DhurvaFest from "./section/DhurvaFest";
import Banners from "@/components/page-components/Banners";
import ProPassList from "./section/ProPassList";
import Gallery from "./section/Gallery";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Gallery />
      <DhurvaFest />
      <ProPassList />
      <Banners />
    </div>
  );
}

export default HomePage;
