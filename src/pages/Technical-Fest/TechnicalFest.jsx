import React, { useEffect } from "react";
import DepartmentShowOff from "./DepartmentShowOff";

function TechnicalFest() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <DepartmentShowOff />
    </div>
  );
}

export default TechnicalFest;
