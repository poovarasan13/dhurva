import React from "react";
import ElitePassGrid from "./ElitePassGrid";
import "../../assets/fonts/anton.css";
const ElitePassList = () => {
    const cardsData = [
        {
            title: "Elite Pass",
            price: "700",
            dates: ["Day 1 on 15/03/2024", "Day 2 on 16/03/2024", "Day 3 on 17/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/elitepass",
        },
        {
            title: "Premium Pass",
            price: "1000",
            dates: ["Day 2 on 16/03/2024", "Day 3 on 17/03/2024", "Day 4 on 18/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/premiumpass",
        },
        {
            title: "VIP Pass",
            price: "1500",
            dates: ["Day 3 on 17/03/2024", "Day 4 on 18/03/2024", "Day 5 on 19/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/vippass",
        },
        {
            title: "Elite Pass",
            price: "700",
            dates: ["Day 1 on 15/03/2024", "Day 2 on 16/03/2024", "Day 3 on 17/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/elitepass",
        },
        {
            title: "Premium Pass",
            price: "1000",
            dates: ["Day 2 on 16/03/2024", "Day 3 on 17/03/2024", "Day 4 on 18/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/premiumpass",
        },
        {
            title: "VIP Pass",
            price: "1500",
            dates: ["Day 3 on 17/03/2024", "Day 4 on 18/03/2024", "Day 5 on 19/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/vippass",
        },
        {
            title: "Elite Pass",
            price: "700",
            dates: ["Day 1 on 15/03/2024", "Day 2 on 16/03/2024", "Day 3 on 17/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/elitepass",
        },
        {
            title: "Premium Pass",
            price: "1000",
            dates: ["Day 2 on 16/03/2024", "Day 3 on 17/03/2024", "Day 4 on 18/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/premiumpass",
        },
        {
            title: "VIP Pass",
            price: "1500",
            dates: ["Day 3 on 17/03/2024", "Day 4 on 18/03/2024", "Day 5 on 19/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/vippass",
        },
        {
            title: "Elite Pass",
            price: "700",
            dates: ["Day 1 on 15/03/2024", "Day 2 on 16/03/2024", "Day 3 on 17/03/2024",],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/elitepass",
        },
        {
            title: "Premium Pass",
            price: "1000",
            dates: ["Day 2 on 16/03/2024", "Day 3 on 17/03/2024", "Day 4 on 18/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/premiumpass",
            titlefont: "anton-regular"
        },
        {
            title: "VIP Pass",
            price: "1500",
            dates: ["Day 3 on 17/03/2024", "Day 4 on 18/03/2024", "Day 5 on 19/03/2024"],
            buttonText: "Book Now",
            link: "https://razorpay.com/pay/vippass",
        },
    ];

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <ElitePassGrid cards={cardsData} />
        </div>
    );
};

export default ElitePassList;
