import React from "react";
import "../../assets/style/AnimatedCard.css";
import '../../assets/fonts/opensans.css';
import '../../assets/fonts/dmsans.css';

const AnimatedCard = () => {
  return (
    <div className="flex bg-gray-200 justify-center items-center mt-16">
      <div className="my-20">
        <div className="card">
          <div className="bg">
            <div className="p-3">
                <h3 className="text-center text-3xl dm-sans  text-black  ">Pro Pass</h3></div>{" "}
                <p className="text-2xl text-center">Rs : 200</p>
                <ul>
                  <li></li>
                </ul>
          </div>
          <div className="blob"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
