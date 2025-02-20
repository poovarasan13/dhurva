// import {  default as heroImage2 } from '../../assets/images/about-images.jpg';
import heroImage from "../../assets/images/HeroImage.png";
import heroImage2 from "../../assets/images/HeroImage.png";
const HeroPage = ({OffStage, title, tagline}) => {
  return (
    <div className="h-screen w-full bg-black overflow-hidden sticky ">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url(${OffStage ? heroImage : heroImage2})`,
          filter: "brightness(0.4) saturate(1.5)"
        }}
        data-aos="zoom-out"
      />
      
      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight dm-sans"
          data-aos="fade-up"
        >
          {title}
        </h1>
        <p 
          className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-wide dm-serif"
          data-aos="fade-up"
        >
          {tagline}
        </p>
      </div>
    </div>
  );
};

export default HeroPage;