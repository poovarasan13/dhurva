import DepartmentCard from "@/components/page-components/DepartmentCard";
import React from "react";

function DepartmentShowOff() {
  const events = [
    {
      departmentName: "Computer Science and Engineering",
      hackathon: 2,
      nonTechnicalEvent: 4,
      workShop: 5,
      technicalEvent: 8,
      href: "/departmentInfo",
    },
    {
      departmentName: "Information Technology",
      hackathon: 2,
      nonTechnicalEvent: 4,
      technicalEvent: 8,
      workShop: 5,
      href: "/departmentInfo",
    },
    {
      departmentName: "Computer Science and Design",
      hackathon: 2,
      nonTechnicalEvent: 4,
      technicalEvent: 8,
      workShop: 5,
      href: "/departmentInfo",
    },
    {
      departmentName: "Computer Science and Technology",
      hackathon: 2,
      nonTechnicalEvent: 4,
      technicalEvent: 8,
      workShop: 5,
      href: "/departmentInfo",
    },
    {
      departmentName: "Computer Science and Engineering Cyber Security",
      hackathon: 2,
      nonTechnicalEvent: 4,
      workShop: 5,
      technicalEvent: 8,
      href: "/departmentInfo",
    },
    {
      departmentName: "Electronics and Electrical Engineering",
      hackathon: 2,
      nonTechnicalEvent: 4,
      technicalEvent: 8,
      workShop: 5,
      href: "/departmentInfo",
    },
    {
      departmentName: "Electronics and Communication Engineering",
      hackathon: 2,
      nonTechnicalEvent: 4,
      technicalEvent: 8,
      workShop: 5,
      href: "/departmentInfo",
    },
  ];

  return (
    <div className=" mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {events.map((dept, index) => (
        <DepartmentCard events={dept} key={index} />
      ))}
    </div>
  );
}

export default DepartmentShowOff;
