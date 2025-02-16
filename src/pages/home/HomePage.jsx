import Navbar from "@/components/page-components/Navbar";
import PassCard from "@/components/page-components/PassCard";
import FooterSection from "@/components/sections/footer/FooterSection";
import React from "react";

function HomePage() {
  return (
    <div>
      <Navbar />
      <PassCard />
      <FooterSection />
    </div>
  );
}

export default HomePage;
