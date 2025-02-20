import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFileAlt,
  FaCalendarAlt,
  FaBuilding,
  FaMale,
  FaFemale,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import SportsAssests from "@/assets/images/sports/SportAssets";
import { Card, CardContent } from "@/components/ui/card";
import Queries from "../SportsInfo/Queries";

const sportsData = [
  {
    title: "Handball",
    description: "Experience the fast-paced action of handball!",
    coordinator: "VivekPrasanna SivaSamy",
    image: SportsAssests.Handball,
    imageOnLeft: false,
    gender: "male",
  },
  {
    title: "Kabaddi",
    description: "Get ready for intense raiding and defending in Kabaddi!",
    coordinator: "Vasanth Balan",
    phone: "+91 70920 88003",
    image: SportsAssests.Kabbadi,
    imageOnLeft: true,
    gender: "male",
  },
  {
    title: "Football",
    description:
      "Dribble, pass, and score in our exciting football tournament!",
    coordinator: "Aakash",
    phone: "+91 6379040788",
    image: SportsAssests.Football,
    imageOnLeft: false,
    gender: "male",
  },
  {
    title: "Volleyball",
    description: "Spike your way to victory in the volleyball tournament!",
    image: SportsAssests.Volleyball,
    coordinator: "Deepak",
    phone: "+91 97865 30029",
    imageOnLeft: true,
    gender: "both",
  },
  {
    title: "Cricket",
    description:
      "Step up to the crease and smash those boundaries in our Cricket Championship!",
    image: SportsAssests.Cricket,
    coordinator: "Mohan",
    phone: "+91 82202 93437",
    imageOnLeft: false,
    gender: "male",
  },
  {
    title: "Ball Badminton",
    description: "Experience the unique sport of Ball Badminton!",
    image: SportsAssests.BallBadminton,
    coordinator: "Sudharsan",
    phone: "+91 63790 40788",
    imageOnLeft: true,
    gender: "male",
  },
  {
    title: "Throwball",
    description:
      "Calling all! Join our Throwball tournament and showcase your skills.",
    image: SportsAssests.Throwball,
    imageOnLeft: false,
    gender: "female",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const coordinatorData = {
  name: "P. Dhibesh Kumar",
  email: "dpekce@kce.ac.in",
  phone: "+91 97865 30029",
  description: "Faster, Higher, Stronger, Together.",
  eventName: "Karpagam All India Inter College ChampionShip",
  eventType:
    "HandBall, VolleyBall, Kabbadi, Cricket, BallBadminton, Throwball,Football",
  eventTiming: "13.3.2025 - 14.3.2025",
  venue: "KCE GROUND",
};

import { User, Mail, Phone, FileText, Calendar, MapPin } from "lucide-react";

const CoordinatorCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden p-4">
      <div className="p-8 bg-white text-gray-800 rounded-3xl shadow-xl">
        <h2 className="text-1xl sm:text-3xl font-extrabold text-center mb-6 dm-serif">
          Overall Coordinator
        </h2>

        <div>
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 w-full ">
              <User className="text-blue-500" />
              <div className="text-sm sm:text-sm md:text-md dm-sans text-gray-800 w-full sm:w-1/2 md:w-2/3">
                {coordinatorData.name}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 w-full ">
              <Mail className="text-green-500" />
              <div className="text-sm sm:text-sm md:text-md text-gray-800 w-full sm:w-1/2 md:w-2/3">
                {coordinatorData.email}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 w-full ">
              <Phone className="text-red-500" />
              <div className="text-sm sm:text-sm md:text-md dm-sans text-gray-800 w-full sm:w-1/2 md:w-2/3">
                <a
                  href={`tel:$ {coordinatorData.phone}`}
                  className="text-black hover:text-blue-800 "
                >
                  {coordinatorData.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 w-full ">
              <FileText className="text-yellow-500" />
              <div className="text-sm sm:text-sm md:text-md dm-sans text-gray-800 w-full sm:w-1/2 md:w-2/3">
                {coordinatorData.description}
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-2xl sm:text-xs md:text-xl dm-serif font-semibold mt-8 mb-4">
          Event Details
        </h3>
        <div>
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 w-full ">
              <Calendar className="text-purple-500" />
              <div className="text-sm sm:text-sm md:text-md dm-sans text-gray-800 w-full ">
                {coordinatorData.eventName}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 w-full ">
              <FileText className="text-teal-500" />
              <div className="text-sm sm:text-sm md:text-md dm-sans text-gray-800 w-full sm:w-1/2 md:w-2/3">
                {coordinatorData.eventType}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 w-full ">
              <Calendar className="text-orange-500" />
              <div className="text-sm sm:text-sm md:text-md dm-sans text-gray-800 w-full sm:w-1/2 md:w-2/3">
                {coordinatorData.eventTiming}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 w-full ">
              <MapPin className="text-indigo-500" />
              <div className="text-sm sm:text-sm md:text-md dm-sans text-gray-800 w-full sm:w-1/2 md:w-2/3">
                {coordinatorData.venue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SportsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        className="mt-10 container mx-auto px-4 text-center mt-24"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight dm-serif bg-gradient-to-r text-black  bg-clip-text">
          Department of Physical Education
        </h1>
        <p className="mt-4 dm-sans text-sm md:text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          The Department of Physical Education is excited to announce its
          upcoming events! Join us for
          <span className="font-bold text-black hover:text-red-600 ms-2 me-2">
            7 thrilling sports competitions
          </span>
          that will test your skills, strength, and teamwork. Get ready to
          compete, excel, and embrace the spirit of sportsmanship!
        </p>
      </motion.div>
      <CoordinatorCard />
      <div className="container mx-auto px-4 lg:px-16 pb-12 lg:mt-18 mt-10">
        <h1 className="lg:text-4xl text-2xl font-bold text-center mb-8 dm-serif mt-20 ">
          Sports Meet
        </h1>
        {sportsData.map((sport, index) => (
          <SportCard sport={sport} key={index} />
        ))}
        <Queries />
      </div>
    </>
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
      className={`flex flex-col md:flex-row items-center gap-10 py-8 my-4 border-b rounded-xl border-gray-200 last:border-b-0 ${
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
          className="w-full max-w-[220px] md:max-w-[240px] lg:max-w-[240px] xl:max-w-[300px] h-auto rounded-md shadow-lg"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left ">
        <h2 className="text-2xl  dm-serif md:text-xl lg:text-2xl font-semibold text-black dm-serif flex items-center justify-center md:justify-center">
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
        <p className="text-md  dm-sans text-center ">{sport.description}</p>
        <div className="flex justify-center md:justify-center">
          <Button
            className="p-4 border-b-gray-200  justify-center"
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
