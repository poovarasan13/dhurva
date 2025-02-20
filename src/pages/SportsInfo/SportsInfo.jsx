import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  List,
  Phone,
  AlertCircle,
} from "lucide-react";
import SportsAssests from "@/assets/images/sports/SportAssets";

const sportsData = [
  {
    title: "Handball",
    description: "Experience the fast-paced action of handball!",
    image: SportsAssests.Handball,
    gender: "male",
    coordinator: "VivekPrasanna SivaSamy",
    phone: "+91 93422 83487",
    venue: "KCE",
    time: "13th March 2025, 09.00 AM",
    rules: [
      "Teams should report at least 30 minutes before the commencement of the match",
      "Player must produce the college identity card at the time of registration and will be returned only after the tournament. Without Identity card, the players will not be permitted to participate.",
      "No one else including alumni students will be permitted into our campus. Team with Physical Director or any accompanying staff member must carry the college identity card.",
      "Coaches will be allowed only with proper authorization letter from the Principal.",
      "Teams should keep their valuables locked in their bag/suitcase. College will not take responsibility for any loss.",
      "Each team must consist of 16 players, including a goalkeeper.",
      "Matches will be played in two halves of 15 minutes each, with a 5-minute halftime break.",
      "Unlimited substitutions are allowed during stoppages in play.",
      "Players must avoid excessive physical contact; fouls will result in free throws for the opposing team.",
      "A goal is scored when the entire ball crosses the goal line between the posts and under the crossbar.",
    ],
  },
  {
    title: "Kabaddi",
    description: "Get ready for intense raiding and defending in Kabaddi!",
    image: SportsAssests.Kabbadi,
    gender: "male",
    coordinator: "Vasanth Balan",
    phone: "+91 70920 88003",
    venue: "KCE",
    time: "13th March 2025, 09.00 AM",
    rules: [
      "Teams should report at least 30 minutes before the commencement of the match",
      "Player must produce the college identity card at the time of registration and will be returned only after the tournament. Without Identity card, the players will not be permitted to participate.",
      "No one else including alumni students will be permitted into our campus. Team with Physical Director or any accompanying staff member must carry the college identity card.",
      "Coaches will be allowed only with proper authorization letter from the Principal.",
      "Teams should keep their valuables locked in their bag/suitcase. College will not take responsibility for any loss.",
      "Each team should have 12 players on the field at all times.",
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
    image: SportsAssests.Football,
    gender: "male",
    coordinator: "Aakash",
    phone: "+91 9497037603",
    venue: "KCE",
    time: "13th March 2025, 09.00 AM",
    rules: [
      "Teams should report at least 30 minutes before the commencement of the match",
      "Player must produce the college identity card at the time of registration and will be returned only after the tournament. Without Identity card, the players will not be permitted to participate.",
      "No one else including alumni students will be permitted into our campus. Team with Physical Director or any accompanying staff member must carry the college identity card.",
      "Coaches will be allowed only with proper authorization letter from the Principal.",
      "Teams should keep their valuables locked in their bag/suitcase. College will not take responsibility for any loss.",
      "Each team must have 8 players, including a goalkeeper.",
      "Games are played in two halves of 45 minutes each, with a halftime break of 15 minutes.",
      "Players must be aware of the offside rule; an attacking player is offside if they are closer to the opponent's goal line than both the ball and the second-last opponent when the ball is played to them.",
      "Fouls can result in direct or indirect free kicks depending on the nature of the foul.",
      "Players can receive yellow cards for cautions and red cards for serious offenses, resulting in expulsion from the match.",
    ],
  },
  {
    title: "Volleyball",
    description: "Spike your way to victory in the volleyball tournament!",
    image: SportsAssests.Volleyball,
    gender: "both",
    coordinator: "Dhanush",
    phone: "+916383104393",
    venue: "KCe",
    time: "13th March 2025, 09.00 AM",
    rules: [
      "Teams should report at least 30 minutes before the commencement of the match",
      "Player must produce the college identity card at the time of registration and will be returned only after the tournament. Without Identity card, the players will not be permitted to participate.",
      "No one else including alumni students will be permitted into our campus. Team with Physical Director or any accompanying staff member must carry the college identity card.",
      "Coaches will be allowed only with proper authorization letter from the Principal.",
      "Teams should keep their valuables locked in their bag/suitcase. College will not take responsibility for any loss.",
      "Each team consists of 12 players on the court at any time.",
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
    image: SportsAssests.Cricket,
    gender: "male",
    coordinator: "Mohan",
    phone: "+91 82202 93437",
    venue: "KCE",
    time: "13th March 2025, 09.00 AM",
    rules: [
      "Teams should report at least 30 minutes before the commencement of the match",
      "Player must produce the college identity card at the time of registration and will be returned only after the tournament. Without Identity card, the players will not be permitted to participate.",
      "No one else including alumni students will be permitted into our campus. Team with Physical Director or any accompanying staff member must carry the college identity card.",
      "Coaches will be allowed only with proper authorization letter from the Principal.",
      "Teams should keep their valuables locked in their bag/suitcase. College will not take responsibility for any loss.",
      "Each team consists of 15 players, with specific roles (batsmen, bowlers, fielders).",
      "The match format may vary (e.g., T20, ODI), but typically consists of two innings per side.",
      "Bowlers may not bowl more than one-fifth of the total overs in limited-overs formats.",
      "Teams must have a minimum number of fielders within a certain distance from the batsman at all times.",
      "All decisions made by umpires are final; appeals can be made but must adhere to cricketing protocols.",
    ],
  },
  {
    title: "Ball Badminton",
    description: "Experience the unique sport of Ball Badminton!",
    image: SportsAssests.BallBadminton,
    gender: "male",
    coordinator: "Sudharsan",
    phone: "+91 63790 40788",
    venue: "KCE",
    time: "13th March 2025, 09.00 AM",
    rules: [
      "Teams should report at least 30 minutes before the commencement of the match",
      "Player must produce the college identity card at the time of registration and will be returned only after the tournament. Without Identity card, the players will not be permitted to participate.",
      "No one else including alumni students will be permitted into our campus. Team with Physical Director or any accompanying staff member must carry the college identity card.",
      "Coaches will be allowed only with proper authorization letter from the Principal.",
      "Teams should keep their valuables locked in their bag/suitcase. College will not take responsibility for any loss.",
      "Each team consists of 10 players on the court at any time.",
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
    image: SportsAssests.Throwball,
    gender: "female",
    coordinator: "Revanth",
    phone: "+91 7639381389",
    venue: "KCE",
    time: "13th March 2025, 09.00 AM",
    rules: [
      "Teams should report at least 30 minutes before the commencement of the match",
      "Player must produce the college identity card at the time of registration and will be returned only after the tournament. Without Identity card, the players will not be permitted to participate.",
      "No one else including alumni students will be permitted into our campus. Team with Physical Director or any accompanying staff member must carry the college identity card.",
      "Coaches will be allowed only with proper authorization letter from the Principal.",
      "Teams should keep their valuables locked in their bag/suitcase. College will not take responsibility for any loss.",
      "Each team should have 12 players on the court during play.",
      "Matches are played in sets; a team wins a set by being the first to reach 25 points with at least a 2-point lead.",
      "The server must throw the ball from behind the service line and cannot step over it until after releasing the ball.",
      "Players cannot catch or hold the ball; it must be thrown to teammates or over the net directly.",
      "Teams are allowed one timeout per set, lasting up to one minute.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const SportsInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <div className="mt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="bg-white text-black py-12 px-4 md:px-12 lg:px-24"
      >
        <h1 className="text-2xl md:text-4xl  font-bold text-gray-800 text-center flex items-center gap-2">
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
                {/* Faculty Coordinator:{" "} */}
                <span className="text-gray-900">{sport.coordinator}</span>
              </span>
            </p>
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-500" />
              <span>
                {/* Phone:  */}
                <a
                  href={`tel:$ {sport.phone}`}
                  className="text-black hover:text-blue-800 "
                >
                  {sport.phone}
                </a>
                {/* <span className="text-gray-900">{sport.phone}</span> */}
              </span>
            </p>
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-500" />
              <span>
                {/* Venue:  */}
                <span className="text-gray-900">{sport.venue}</span>
              </span>
            </p>
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span>
                {/* Time:  */}
                <span className="text-gray-900">{sport.time}</span>
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
            <a
              href="#"
              className="inline-block dm-sans hover:scale-105 bg-sky-400 hover:bg-sky-400 hover:text-black  focus-visible:ring ring-sky-300 text-white text-sm md:text-base font-semibold text-center rounded-full outline-none transition duration-100 px-12 py-3"
            >
              <span className="justify-content flex">
                Register Now <Rocket />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SportsInfo;
