import React from "react";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

function CoordinatorCard({ deptDetails }) {
  return (
    <Card className="w-full max-w-[18rem] sm:max-w-[22rem] hover:text-white shadow-md border transition-transform duration-300 bg-white border-orange-400 rounded-lg p-4 sm:p-5">
      <CardHeader className="text-lg sm:text-xl text-center font-semibold text-gray-900">
        {deptDetails.shortName} <span>Coordinator</span>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-700 hover:text-white">
        {/* Email */}
        <div className="flex items-center text-sm sm:text-base gap-3">
          <Mail className="text-orange-400" size={18} />
          <a
            href={`mailto:${deptDetails.coordinatorEmail}`}
            className="text-gray-600 hover:text-orange-500 hover:underline transition duration-200"
          >
            {deptDetails.coordinatorEmail}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center text-sm sm:text-base gap-3">
          <Phone className="text-orange-400" size={18} />
          <a
            href={`tel:${deptDetails.coordinatorContactPhone}`}
            className="text-gray-600 hover:text-orange-500 hover:underline transition duration-200"
          >
            {deptDetails.coordinatorContactPhone}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default CoordinatorCard;
