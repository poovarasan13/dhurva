import React from "react";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

function CoordinatorCard({ deptDetails }) {
  return (
    <Card className="w-full sm:w-[22rem] shadow-md border bg-sky-orange border-orange-400 border rounded-lg">
      <CardHeader className="text-xl text-center font-semibold text-gray-900">
        <span>
          {deptDetails.shortName} <span>Coordinator</span>
        </span>
      </CardHeader>
      <CardContent className="space-y-3 content-center text-gray-700">
        {/* Email */}
        <div className="flex items-center text-lg gap-2">
          <Mail className="text-orange-400" size={20} />
          <a
            href={`mailto:${deptDetails.coordinatorEmail}`}
            className="text-gray-600 hover:decoration-orange-400 hover:underline"
          >
            {deptDetails.coordinatorEmail}
          </a>
        </div>

        {/* Phone */}
        <div className="flex text-lg items-center gap-2">
          <Phone className="text-orange-400" size={20} />
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
