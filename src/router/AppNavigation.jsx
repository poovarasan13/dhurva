import Navbar from "@/components/page-components/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import CulturalFestPage from "@/pages/CulturalFest/CulturalFestPage";
import EventShowPage from "@/pages/EventDisplay/EventShowPage";
import EventPage from "@/pages/Events/EventPage";
import HomePage from "@/pages/home/HomePage";
import TechnicalFest from "@/pages/Technical-Fest/TechnicalFest";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import "

function AppNavigation() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/culturalFest" element={<CulturalFestPage />} />
        <Route path="/technicalFest/*" element={<TechnicalFest />}></Route>
        <Route path="/departmentInfo" element={<EventPage />}></Route>
        <Route path="/eventInfo" element={<EventShowPage />}></Route>
      </Routes>
      <FooterSection />
    </div>
  );
}

export default AppNavigation;
