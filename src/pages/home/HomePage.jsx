import DepartmentCard from "@/components/page-components/DepartmentCard";
import Navbar from "@/components/page-components/Navbar";
import PassCard from "@/components/page-components/PassCard";
import FooterSection from "@/components/sections/footer/FooterSection";
import React from "react";
import DepartmentShowOff from "../Technical-Fest/DepartmentShowOff";
import Promption from "@/components/page-components/Banners";
import EventCards from "@/components/page-components/EventCards";
import EventShowOff from "../Events/EventShowOff";
import HeroSection from "./section/HeroSection";
import DhurvaFest from "./section/DhurvaFest";
import Banners from "@/components/page-components/Banners";
import ProPassList from "./section/ProPassList";
import Gallery from "./section/Gallery";


function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <Gallery />
      <DhurvaFest />
      <ProPassList />
      <Banners />
    </div>
  );
}

export default HomePage;
