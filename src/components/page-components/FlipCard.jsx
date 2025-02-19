import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FlipCard = () => {
  const offers = ["hello", " brossssss", "roayal passs"];
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative w-full max-w-sm sm:w-80 h-96 shrink-0 overflow-hidden rounded-xl bg-sky-400 p-6 sm:p-8 mx-auto"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white text-black px-3 py-0.5 text-sm font-light  font-bold">
          Pro
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-4xl sm:text-6xl font-black leading-[1.2]"
        >
          Rs 300
          <br />
        </motion.span>
        <p className="text-sm sm:text-lg">
          {offers.map((rules, index) => (
            <>
              <li key={index} className="flex ">
                <Check className="text-green-500" />
                <span className="text-lg">{rules}</span>
              </li>
            </>
          ))}
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 hover:text-white hover:bg-black border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Get Pass Now
      </button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default FlipCard;
