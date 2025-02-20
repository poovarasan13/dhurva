import React, { useEffect, useState } from "react";
// import videoBg from "../../../assets/video/home.mp4";
import "../../../assets/fonts/dmsans.css";

const VideoParallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative sm:mt-16 md:mt-20 w-full h-[900px] md:h-[700px] overflow-hidden flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-[900px] md:h-[700px] object-cover"
        src="https://res.cloudinary.com/dzpkbej9y/video/upload/v1740030183/websitevid-loww_pmyawj.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ transform: `translateY(${offsetY}px)` }}
      />

      <div className="absolute top-0 left-0 w-full h-[900px] md:h-[700px] bg-black/50"></div>

      <div className="relative md:mt-[400px] mt-[600px] z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-2xl md:text-6xl font-bold dm-sans">
          Create your{" "}
          <span className="text-orange-600">
            own <span className="text-sky-800">Destiny</span>
          </span>
        </h1>
        <p className="text-sm md:text-lg mt-2">
          Immerse yourself in the next generation of innovation.
        </p>
      </div>
    </div>
  );
};

export default VideoParallax;
