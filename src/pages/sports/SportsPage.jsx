import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { FaMale, FaFemale } from "react-icons/fa";
import volleyBallImage from "../../assets/test/image.png";
import kabaddiImage from "../../assets/test/image.png";
import cricketImage from "../../assets/test/image.png";
import footballImage from "../../assets/test/image.png";
import "../../assets/fonts/dmserif.css";
import "../../assets/fonts/sourcesans.css";

const sportsData = [
  {
    title: "Handball",
    description: "Experience the fast-paced action of handball!",
    image: volleyBallImage,
    imageOnLeft: false,
    gender: "male",
  },
  {
    title: "Kabaddi",
    description: "Get ready for intense raiding and defending in Kabaddi!",
    image: kabaddiImage,
    imageOnLeft: true,
    gender: "male",
  },
  {
    title: "Football",
    description:
      "Dribble, pass, and score in our exciting football tournament!",
    image: footballImage,
    imageOnLeft: false,
    gender: "male",
  },
  {
    title: "Volleyball",
    description: "Spike your way to victory in the volleyball tournament!",
    image: volleyBallImage,
    imageOnLeft: true,
    gender: "both",
  },
  {
    title: "Cricket",
    description:
      "Step up to the crease and smash those boundaries in our Cricket Championship!",
    image: cricketImage,
    imageOnLeft: false,
    gender: "male",
  },
  {
    title: "Ball Badminton",
    description: "Experience the unique sport of Ball Badminton!",
    image: volleyBallImage,
    imageOnLeft: true,
    gender: "male",
  },
  {
    title: "Throwball",
    description:
      "Calling all! Join our Throwball tournament and showcase your skills.",
    image: volleyBallImage,
    imageOnLeft: false,
    gender: "female",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const SportsPage = () => {
  return (
    <div className="container mx-auto px-4 lg:px-16 py-12 mt-20">
      <h1 className="lg:text-4xl text-2xl font-bold text-center mb-8 dm-serif">
        Sports Meet
      </h1>
      {sportsData.map((sport, index) => (
        <SportCard sport={sport} key={index} />
      ))}
    </div>
  );
};

const SportCard = ({ sport }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const handleExploreClick = () => {
    navigate(`/sports/${sport.title.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`flex flex-col md:flex-row items-center gap-10 py-8 my-4 border-b border-gray-200 last:border-b-0 ${
        sport.imageOnLeft ? "" : "md:flex-row-reverse"
      }`}
      style={
        sport.imageOnLeft
          ? { backgroundColor: "rgb(250, 167, 94)" }
          : { backgroundColor: "rgb(127, 162, 252)" }
      }
    >
      <motion.div className="w-full md:w-1/2 flex justify-center items-center">
        <motion.img
          src={sport.image}
          alt={sport.title}
          className="w-full max-w-[140px] md:max-w-[150px] lg:max-w-[200px] xl:max-w-[300px] h-auto rounded-xl shadow-lg"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dm-serif flex items-center justify-center md:justify-center">
          {sport.title}
          {sport.gender === "male" && (
            <>
              <FaMale className="ml-2 text-black" />
              <p className="text-sm md:text-base lg:text-2xl font-light">
                (Only for Male)
              </p>
            </>
          )}
          {sport.gender === "female" && (
            <>
              <FaFemale className="ml-2 text-black" />
              <p className="text-sm md:text-base lg:text-2xl">
                (Only for Female)
              </p>
            </>
          )}
          {sport.gender === "both" && (
            <>
              <FaMale className="ml-2 text-black" />
              <FaFemale className="ml-2 text-black" />
              <p className="text-sm md:text-base lg:text-xl">
                (Both Male and Female)
              </p>
            </>
          )}
        </h2>
        <p className="text-lg text-white-700 text-center leading-relaxed">
          {sport.description}
        </p>
        <div className="flex justify-center md:justify-center">
          <Button
            className="p-4 border-b-gray-200 border-b-4 border-2 justify-center"
            onClick={handleExploreClick}
          >
            Explore
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SportsPage;
