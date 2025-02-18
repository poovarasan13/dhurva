import React, { useEffect, useState } from "react";
import videoBg from "../../../assets/video/home.mp4";
import "../../../assets/fonts/dmsans.css";

const VideoParallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[650px] md:h-[600px] overflow-hidden flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-[600px] object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        style={{ transform: `translateY(${offsetY}px)` }}
      />

      <div className="absolute top-0 left-0 w-full h-[600px] bg-black/50"></div>

      <div className="relative md:mt-[420px]  mt-96 z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-2xl md:text-6xl font-bold dm-sans">
          Experience the Future
        </h1>
        <p className="text-sm md:text-lg mt-2">
          Immerse yourself in the next generation of innovation.
        </p>
      </div>
    </div>
  );
};

export default VideoParallax;
