import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import "../../assets/fonts/opensans.css";
import { TicketCheck, Check, MoveRight } from "lucide-react";
import { Button } from "../ui/button";

function PassCard() {
  return (
    <div className="flex justify-center items-center p-4">
      <Card className="w-full max-w-sm bg-gradient-to-b bg-black text-white shadow-lg rounded-lg transition-transform transform hover:scale-101">
        <CardHeader className="flex flex-col items-center text-center space-y-2">
          <TicketCheck className="w-12 h-12 text-yellow-400" />
          <CardTitle className="text-2xl font-semibold">Dhurva Pass</CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-4">
          <p className="text-lg font-medium">₹200 </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="text-green-400 w-5 h-5" /> Access to Day 1
              Events
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-400 w-5 h-5" /> Access to Cultural
              Fest
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-400 w-5 h-5" /> Entry to Tech
              Workshops
            </li>
          </ul>
        </CardContent>

        {/* Footer Section */}
        <CardFooter className="flex justify-center">
          <Button className="bg-white text-dark  px-6 py-2 rounded-md text-lg font-semibold">
            Buy Pass
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PassCard;
