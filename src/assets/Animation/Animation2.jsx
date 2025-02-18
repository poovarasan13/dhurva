import Lottie from "lottie-react";
import animationData from "./Anim/Animation3.json";

const Animation2 = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full absolute md:hidden ">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "140px",
            height: "140px",
            transform: "translateX(80px) translateY(-170px)",
          }}
        />
      </div>

      <div className="hidden md:flex justify-center items-center w-full h-full absolute lg:hidden">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "250px",
            height: "250px",
            transform: "translateX(400px) translateY(-60px)",
          }}
        />
      </div>
      <div className="hidden lg:flex justify-center items-center w-full h-full absolute">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "300px",
            height: "300px",
            transform: "translateX(450px) translateY(-100px)",
          }}
        />
      </div>
    </>
  );
};

export default Animation2;
