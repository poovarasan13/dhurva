import React from "react";

const Queries = () => {
  const coordinators = [
    { name: "Mr.P.DhibeshKumar", phone: "+91 97865 30029" },
    { name: "Mr.Sabarish", phone: "+91 93600 35659" },
  ];

  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-lg p-6">
        <h4 className="text-center text-xl font-bold text-gray-800 mb-5">
          For InQueries & Registration
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              {/* <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold shadow-lg">
                {coordinator.name.charAt(0)}
              </div> */}
              <h5 className="mt-3 text-lg font-semibold">{coordinator.name}</h5>
              <p className="text-gray-700 text-sm">
                Phone:{" "}
                <a
                  href={`tel:${coordinator.phone}`}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {coordinator.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queries;
