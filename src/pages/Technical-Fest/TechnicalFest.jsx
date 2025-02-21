import React, { useEffect } from "react";
import DepartmentShowOff from "./DepartmentShowOff";
import { motion } from "framer-motion";
import { RevealLinks } from "@/components/page-components/RevealLink";
function TechnicalFest() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <RevealLinks /> */}
      <DepartmentShowOff />
    </div>
  );
}

export default TechnicalFest;
