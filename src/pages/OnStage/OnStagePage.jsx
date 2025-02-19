import React, { useEffect } from "react";
import OnStage from "./OnStage";
import Aos from "aos";
import "aos/dist/aos.css";
function OnStagePage() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <OnStage />
    </div>
  );
}

export default OnStagePage;
