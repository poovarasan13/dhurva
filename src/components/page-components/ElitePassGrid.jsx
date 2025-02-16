import React from "react";
import ElitePassCard from "./ElitePassCard";

const ElitePassGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {cards.map((card, index) => (
        <ElitePassCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ElitePassGrid;