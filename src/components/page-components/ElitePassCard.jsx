import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../assets/fonts/Jersey-25.css";
import "../../assets/fonts/anton.css";
import "../../assets/fonts/liter.css";
const ElitePassCard = ({ title, price, dates, buttonText, link }) => {
    const [hoverDirection, setHoverDirection] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    // Handle mouse movement to determine hover effect direction
    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const xOffset = x / width - 0.5;
        const yOffset = y / height - 0.5;
        if (Math.abs(xOffset) > Math.abs(yOffset)) {
            setHoverDirection(xOffset > 0 ? "right" : "left");
        } else {
            setHoverDirection(yOffset > 0 ? "bottom" : "top");
        }
    };
    const normalGradient = "bg-gradient-to-br from-blue-500 to-blue-700"; // Define normal gradient
    const hoverGradient = "bg-gradient-to-br from-sky-400 to-sky-600";  // Define hover gradient
    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 1, opacity: 0.9 }}
            whileHover={{
                scale: 1.1,
                opacity: 1,
                boxShadow:
                    hoverDirection === "left"
                        ? "-10px 10px 20px rgba(0, 0, 0, 0.3)"
                        : hoverDirection === "right"
                            ? "10px 10px 20px rgba(0, 0, 0, 0.3)"
                            : hoverDirection === "top"
                                ? "0px -10px 20px rgba(0, 0, 0, 0.3)"
                                : "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.2, ease: "linear" }}
            className={`rounded-2xl p-8 shadow-md text-white text-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl ${isHovered ? hoverGradient : normalGradient}`}
        >
            {/* Title */}
            <h2 className="text-3xl font-bold mb-3 anton-regular">{title}</h2>
            {/* Price */}
            <p className="text-xl font-semibold liter-regular">Rs : {price}</p>
            {/* Dates List */}
            <div className="mt-4 space-y-2">
                {dates.map((date, index) => (
                    <p key={index} className="text-sm liter-regular">
                        {date}
                    </p>
                ))}
            </div>
            {/* Book Now Button with Razorpay Link */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-5 py-2 bg-white text-PrimaryBlue font-semibold rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition-all duration-150 ease-linear"
            >
                {buttonText}
            </a>
        </motion.div>
    );
};
export default ElitePassCard;