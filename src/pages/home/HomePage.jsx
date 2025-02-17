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
// import HeroSection from "../CulturalFest/section/HeroSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default HomePage;
