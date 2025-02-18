import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  List,
  AlertCircle,
} from "lucide-react";

import volleyBallImage from "../../assets/test/cricket.png";
import kabaddiImage from "../../assets/test/cricket.png";
import cricketImage from "../../assets/test/cricket.png";
import footballImage from "../../assets/test/cricket.png";
import soloSingingImage from "../../assets/test/cricket.png";
import Animation2 from "@/assets/Animation/Animation2";

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

const containerVariants = {
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
    return (
      <div className="text-black text-center py-10 flex items-center justify-center gap-2">
        <AlertCircle className="w-6 h-6 text-red-600" />
        <span>Sport not found!</span>
      </div>
    );
  }

  return (
    <div  className="mt-16">
      <Animation2 />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="bg-white text-black py-12 px-4 md:px-12 lg:px-24"
      >
        <h1 className="text-4xl font-bold text-gray-800 text-center flex items-center gap-2">
          <Trophy className="w-8 h-8 text-yellow-500" />
          {sport.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <img
              src={sport.image}
              alt={sport.title}
              className="w-full h-full object-cover object-center rounded-lg"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span>
                Faculty Coordinator:{" "}
                <span className="text-gray-900">{sport.coordinator}</span>
              </span>
            </p>
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-500" />
              <span>
                Venue: <span className="text-gray-900">{sport.venue}</span>
              </span>
            </p>
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span>
                Time: <span className="text-gray-900">{sport.time}</span>
              </span>
            </p>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <List className="w-6 h-6 text-orange-500" />
              Rules and Regulations
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {sport.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg mx-auto block w-40 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Register
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SportsInfo;
