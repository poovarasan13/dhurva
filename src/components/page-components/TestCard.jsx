import React from "react";

function TestCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl  transition-transform transform hover:scale-105 group bg-white p-6">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-3xl"></div>
       
      </div>
    </div>
  );
}

export default TestCard;
