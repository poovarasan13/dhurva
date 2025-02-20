import Navbar from "@/components/page-components/Navbar";
import PassCard from "@/components/page-components/PassCard";
import FooterSection from "@/components/sections/footer/FooterSection";
import CulturalFestPage from "@/pages/CulturalFest/CulturalFestPage";
import EventShowPage from "@/pages/EventDisplay/EventShowPage";
import EventPage from "@/pages/Events/EventPage";
import HomePage from "@/pages/home/HomePage";
import LiveinConcert from "@/pages/Live-in-Concert/LiveinConcert";
import OffStagePage from "@/pages/OffStage/OffStagePage";
import OnStagePage from "@/pages/OnStage/OnStagePage";
import PassPage from "@/pages/Pass/PassPage";
import RegistrationPage from "@/pages/Registration/RegistrationPage";
import SportsPage from "@/pages/sports/SportsPage";
import SportsInfo from "@/pages/SportsInfo/SportsInfo";
import TechnicalFest from "@/pages/Technical-Fest/TechnicalFest";
import React from "react";
import { Route, Routes } from "react-router-dom";

function AppNavigation() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dhurva" element={<HomePage />}></Route>
        <Route path="/culturalFest" element={<CulturalFestPage />} />
        <Route path="/technicalFest/*" element={<TechnicalFest />}></Route>
        <Route path="/departmentInfo" element={<EventPage />}></Route>
        <Route path="/eventInfo" element={<EventShowPage />}></Route>
        <Route path="/sports" element={<SportsPage />}></Route>
        <Route path="/sports/:sportTitle" element={<SportsInfo />}></Route>
        <Route path="/live" element={<LiveinConcert />}></Route>
        <Route path="/pass" element={<PassPage />}></Route>
        <Route path="/onstage" element={<OnStagePage />}></Route>
        <Route path="/offstage" element={<OffStagePage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
      </Routes>
      <FooterSection />
    </div>
  );
}

export default AppNavigation;
