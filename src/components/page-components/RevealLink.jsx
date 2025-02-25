import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="grid place-content-center text-center mt-10 px-6 py-8 sm:mt-20 sm:px-8 sm:py-12">
      <FlipLink href="#" color="text-orange-500">
        KCE
      </FlipLink>
      <FlipLink href="#" color="text-blue-600">
        Dhruva
      </FlipLink>
      <FlipLink href="#" color="text-red-500">
        Technical
      </FlipLink>
      <FlipLink href="#" color="text-green-500">
        Fest
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, color }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      whileFocus="hovered" // Fix for mobile focus
      whileTap="hovered" // Fix for mobile tap
      href={href}
      className={`relative block overflow-hidden whitespace-nowrap text-5xl font-black uppercase xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl ${color}`}
      style={{
        lineHeight: 0.9,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className={`absolute inset-0 ${color}`}>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
