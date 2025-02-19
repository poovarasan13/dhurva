import ConcertEvent from "@/components/page-components/ConcertEvent";
import EventBanner from "@/components/page-components/EventBanner";
import Navbar from "@/components/page-components/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import "../../assets/fonts/josefin.css";
import React, { useEffect } from "react";
import "../../assets/fonts/pacifico.css";
import "../../assets/fonts/righteous.css";
import Musicalconcert from "@/components/page-components/Musicalconcert";
import "../../assets/fonts/madimi.css";
const LiveinConcert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20">
      <ConcertEvent />

      <Musicalconcert />
    </div>
  );
};

export default LiveinConcert;
