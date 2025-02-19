import DepartmentCard from "@/components/page-components/DepartmentCard";
import React from "react";
import department from "@/data/Departments";
function DepartmentShowOff() {
  return (
    <div className=" mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {department.map((dept, index) => (
        <DepartmentCard events={dept} key={index} />
      ))}
    </div>
  );
}

export default DepartmentShowOff;
