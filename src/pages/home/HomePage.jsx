import Navbar from "@/components/page-components/Navbar";
import PassCard from "@/components/page-components/PassCard";
import ProCard from "@/components/page-components/ProCard";
import ProPassCard from "@/components/page-components/ProPassCard";
import ProPassList from "@/components/page-components/ProPassList";
import FooterSection from "@/components/sections/footer/FooterSection";
import React from "react";

function HomePage() {
  return (
    <div>
      <Navbar />


    

      <ProPassList/>
      {/* <ProPassList/> */}



      {/* <PassCard /> */}
      {/* <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <ProCard
          title="Pro Plus Pass"
          price={500}
          dates="15-16/03/2024"
          features={[
            "Full Event Access (Day 1 + Day 2)",
            "Exclusive Meet & Greet with Resource Persons",
            "Priority Seating",
            "Backstage Access",
            "VIP Lounge Entry",
          ]}
        />
      </div> */}
      <FooterSection />
    </div>
  );
}

export default HomePage;
