import Lottie from "lottie-react";
import animationData from "./Anim/Animation1.json";

const Animation1 = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full absolute md:hidden z-[-100]">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "450px",
            height: "450px",
            transform: "translateX(-100px) translateY(-850px)",
          }}
        />
      </div>

      <div className="hidden md:flex justify-center items-center w-full h-full absolute lg:hidden z-[-100]">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "100px",
            height: "100px",
            transform: "translateX(-100px) translateY(-600px)",
          }}
        />
      </div>

      <div className="hidden lg:flex justify-center items-center w-full h-full absolute z-[-100]">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "430px",
            height: "430px",
            transform: "translateX(50px) translateY(-670px)",
          }}
        />
      </div>
    </>
  );
};

export default Animation1;
