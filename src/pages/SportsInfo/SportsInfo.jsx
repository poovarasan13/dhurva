import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

import volleyBallImage from "../../assets/test/4.png";
import kabaddiImage from "../../assets/test/4.png";
import cricketImage from "../../assets/test/4.png";
import footballImage from "../../assets/test/4.png";
import soloSingingImage from "../../assets/test/4.png";

const sportsData = [
  {
    title: "Handball",
    description: "Experience the fast-paced action of handball!",
    image: volleyBallImage,
    gender: "male",
    coordinator: "Ms. Shamadhani Begum",
    venue: "Sports Complex",
    time: "10:00 AM",
    rules: [
      "Each team must consist of 7 players, including a goalkeeper.",
      "Matches will be played in two halves of 15 minutes each, with a 5-minute halftime break.",
      "Unlimited substitutions are allowed during stoppages in play.",
      "Players must avoid excessive physical contact; fouls will result in free throws for the opposing team.",
      "A goal is scored when the entire ball crosses the goal line between the posts and under the crossbar.",
    ],
  },
  {
    title: "Kabaddi",
    description: "Get ready for intense raiding and defending in Kabaddi!",
    image: kabaddiImage,
    gender: "male",
    coordinator: "Mr. Rajesh Kumar",
    venue: "Kabaddi Ground",
    time: "2:00 PM",
    rules: [
      "Each team should have 7 players on the field at all times.",
      "A raider must touch opponents and return to their half without being tackled; they must hold their breath while raiding.",
      "Points are awarded for each opponent touched during a raid and for each successful tackle by the defending team.",
      "The match consists of two halves of 20 minutes each, with a 5-minute break in between.",
      "Players must maintain sportsmanship; any misconduct may lead to penalties or disqualification.",
    ],
  },
  {
    title: "Football",
    description:
      "Dribble, pass, and score in our exciting football tournament!",
    image: footballImage,
    gender: "male",
    coordinator: "Mr. Suresh Nair",
    venue: "Football Field",
    time: "4:00 PM",
    rules: [
      "Each team must have 11 players, including a goalkeeper.",
      "Games are played in two halves of 45 minutes each, with a halftime break of 15 minutes.",
      "Players must be aware of the offside rule; an attacking player is offside if they are closer to the opponent's goal line than both the ball and the second-last opponent when the ball is played to them.",
      "Fouls can result in direct or indirect free kicks depending on the nature of the foul.",
      "Players can receive yellow cards for cautions and red cards for serious offenses, resulting in expulsion from the match.",
    ],
  },
  {
    title: "Volleyball",
    description: "Spike your way to victory in the volleyball tournament!",
    image: volleyBallImage,
    gender: "both",
    coordinator: "Ms. Anjali Reddy",
    venue: "Volleyball Court",
    time: "11:00 AM",
    rules: [
      "Each team consists of six players on the court at any time.",
      "Matches will use rally scoring; points are scored on every serve, regardless of which team served.",
      "Teams must rotate positions after winning the serve from the opposing team.",
      "Players must not touch the net during play; violations result in points awarded to the opposing team.",
      "Teams can make up to six substitutions per set.",
    ],
  },
  {
    title: "Cricket",
    description:
      "Step up to the crease and smash those boundaries in our Cricket Championship!",
    image: cricketImage,
    gender: "male",
    coordinator: "Mr. Rohan Patel",
    venue: "Cricket Ground",
    time: "9:00 AM",
    rules: [
      "Each team consists of 11 players, with specific roles (batsmen, bowlers, fielders).",
      "The match format may vary (e.g., T20, ODI), but typically consists of two innings per side.",
      "Bowlers may not bowl more than one-fifth of the total overs in limited-overs formats.",
      "Teams must have a minimum number of fielders within a certain distance from the batsman at all times.",
      "All decisions made by umpires are final; appeals can be made but must adhere to cricketing protocols.",
    ],
  },
  {
    title: "Ball Badminton",
    description: "Experience the unique sport of Ball Badminton!",
    image: volleyBallImage,
    gender: "male",
    coordinator: "Mr. Vijay Kumar",
    venue: "Badminton Court",
    time: "3:00 PM",
    rules: [
      "Each team consists of six players on the court at any time.",
      "Matches will use rally scoring; points are scored on every serve, regardless of which team served.",
      "Teams must rotate positions after winning the serve from the opposing team.",
      "Players must not touch the net during play; violations result in points awarded to the opposing team.",
      "Teams can make up to six substitutions per set.",
    ],
  },
  {
    title: "Throwball",
    description:
      "Calling all! Join our Throwball tournament and showcase your skills.",
    image: volleyBallImage,
    gender: "female",
    coordinator: "Ms. Priya Sharma",
    venue: "Throwball Court",
    time: "12:00 PM",
    rules: [
      "Each team should have 6 players on the court during play.",
      "Matches are played in sets; a team wins a set by being the first to reach 25 points with at least a 2-point lead.",
      "The server must throw the ball from behind the service line and cannot step over it until after releasing the ball.",
      "Players cannot catch or hold the ball; it must be thrown to teammates or over the net directly.",
      "Teams are allowed one timeout per set, lasting up to one minute.",
    ],
  },
  {
    title: "Solo Singing",
    description: "Showcase your vocal talent in Solo Singing!",
    image: soloSingingImage,
    gender: "both",
    coordinator: "Ms. Nivethitha",
    venue: "LBS Hall",
    time: "9:30 AM",
    rules: [
      "Each participant's performance should not exceed 3 minutes.",
      "Participants must bring their own instruments or instrumental music on a pen drive for accompaniment.",
      "Performances will be judged based on vocal quality, selection of raga, composition, and overall impression.",
      "Only top six contestants from preliminary rounds will advance to the final round based on judges' scores.",
      "Participants should maintain decorum during performances; any disruptive behavior may lead to disqualification.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const SportsInfo = () => {
  const { sportTitle } = useParams();
  const [sport, setSport] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const foundSport = sportsData.find(
      (sport) => sport.title.toLowerCase().replace(/\s+/g, "-") === sportTitle
    );
    setSport(foundSport);
  }, [sportTitle]);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  if (!sport) {
    return <div className="text-black text-center py-10">Sport not found!</div>;
  }

  const getGenderIcon = (gender) => {
    if (gender === "male") return <FaMale className="ml-2 text-black" />;
    if (gender === "female") return <FaFemale className="ml-2 text-black" />;
    return (
      <>
        <FaMale className="ml-1  text-black" />
        <FaFemale className="ml-1 text-black" />
      </>
    ); // For both genders
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-white text-black mt-20 py-12"
    >
      <div className="container px-5 mx-auto">
        <div className="mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row">
            {" "}
            <div className="md:w-1/2 p-8 space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left dm-serif flex items-center ">
                <span className="text-lg sm:text-xl md:text-2xl">
                  {sport.title}
                </span>
                <div className="flex items-center">
                  {getGenderIcon(sport.gender)}
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-center">
                    {sport.gender === "male"
                      ? "(Only for Male)"
                      : sport.gender === "female"
                      ? "(Only for Female)"
                      : "(Both Male and Female)"}
                  </p>
                </div>
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                <span className="font-medium">Faculty Co-ordinator:</span>{" "}
                {sport.coordinator}
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                <span className="font-medium">Venue:</span> {sport.venue}
                <span className="float-right text-xs sm:text-sm md:text-base">
                  Time: {sport.time}
                </span>
              </p>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
                Rules and Regulations
              </h3>
              <ul className="list-decimal pl-5 text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                {sport.rules &&
                  sport.rules.map((rule, index) => <li key={index}>{rule}</li>)}
              </ul>

              <Button className=" bg-red-600 text-white font-bold py-2 px-4  rounded mt-6 block mx-auto">
                Register
              </Button>
            </div>
            <div className="md:w-1/2">
              <img
                src={sport.image}
                alt={sport.title}
                className="w-full h-full object-cover object-center rounded-r-xl"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SportsInfo;
