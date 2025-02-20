import React from "react";
import { motion } from "framer-motion";
import "../../assets/style/TestCard.css";
import "../../assets/fonts/dmsans.css";
import "../../assets/fonts/dmserif.css";
import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";

function TestCard({ deptDetails }) {
  return (
    <div className="p-3">
      {" "}
      <div className="flex justify-center items-center vh-100   bg-light">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Faster transition for the card
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Faster hover transition
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }} // Faster tap transition
          className="max-w-sm rounded-lg  overflow-hidden shadow-lg bg-white p-6"
        >
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2 text-gray-900 dm-serif text-center">
              {deptDetails.departmentName}
            </h5>
            <p className="text-gray-700 text-center text-lg  text-base">
              {deptDetails.coordinatorName}
            </p>
            <div className="flex  gap-3 mt-6">
              <Button className="dm-sans rounded-full px-6 bg-sky-400 hover:bg-white hover:outline-sky-400 hover:outline-2 hover:border-2 hover:border-blue-[##4889F4] hover:text-sky-400">
                <Phone /> call
              </Button>
              <Button className="dm-sans rounded-full px-6 bg-sky-400 hover:bg-white hover:outline-sky-400 hover:outline-2 hover:border-2 hover:border-sky-[#4889F4] hover:text-sky-400">
                <Mail /> email
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TestCard;
