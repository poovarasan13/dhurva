import React from "react";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

function CoordinatorCard({ deptDetails }) {
  return (
    <Card className="w-full max-w-sm sm:w-80 shadow-md border bg-sky-orange border-orange-400 rounded-lg p-4 sm:p-6">
      <CardHeader className="text-lg sm:text-xl text-center font-semibold text-gray-900">
        <span>
          {deptDetails.shortName} <span>Coordinator</span>
        </span>
      </CardHeader>
      <CardContent className="space-y-2 text-gray-700">
        {/* Email */}
        <div className="flex items-center text-base sm:text-lg gap-2">
          <Mail className="text-orange-400" size={15} />
          <a
            href={`mailto:${deptDetails.coordinatorEmail}`}
            className="text-gray-600 hover:decoration-orange-400 hover:underline"
          >
            {deptDetails.coordinatorEmail}
          </a>
        </div>

        {/* Phone */}
        <div className="flex text-base sm:text-lg items-center gap-2">
          <Phone className="text-orange-400" size={15} />
          <a
            href={`tel:${deptDetails.coordinatorContactPhone}`}
            className="text-gray-600 hover:decoration-orange-400 hover:underline"
          >
            {deptDetails.coordinatorContactPhone}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default CoordinatorCard;
