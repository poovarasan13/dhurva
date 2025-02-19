import React, { useEffect } from "react";
import OffStage from "./OffStage";
import Aos from "aos";
import "aos/dist/aos.css";
function OffStagePage() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <OffStage />
    </div>
  );
}

export default OffStagePage;
