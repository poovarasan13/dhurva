import TestCard from "@/components/page-components/TestCard";
import department from "@/data/Departments";
import React from "react";

const Queries = () => {
  const coordinators = [
    {
      departmentName: "Physical Education",
      coordinatorName: "Mr.P.DhibeshKumar",
      coordinatorContactPhone: "+91 97865 30029",
    },
    {
      departmentName: "Physical Education",
      coordinatorName: "Mr.Sabarish",
      coordinatorContactPhone: "+91 93600 35659",
    },
    {
      coordinatorName: "Rahhul M C",
      coordinatorContactPhone: "+91 8270802749",
      departmentName: "Student Coordinator",
    },
    {
      departmentName: "Student Coordinator",
      coordinatorName: "Manikandan",
      coordinatorContactPhone: "+91 8838452061",
    },
  ];

  return (
    <div className="flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-8xl bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-lg p-4 sm:p-6">
        <h4 className="text-center text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5">
          For Inquiries & Registration
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {coordinators.map((coordinator, index) => (
            <TestCard deptDetails={coordinator} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queries;
