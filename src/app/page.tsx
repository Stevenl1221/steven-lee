"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { WavyBackground } from "./components/wavy-background";

type LetterProps = {
  children: string;
  i: number;
};

const Letter: React.FC<LetterProps> = ({ children, i }) => {
  return (
    <span className={`letter ${3 < i && i < 12 ? "text-sky-400" : ""}`}>
      {children === " " ? " " : children}
    </span>
  );
};

const Home: React.FC = () => {
  const ref = useRef<HTMLSpanElement>(null);

  const createSpannedString = (text: string): React.ReactElement[] => {
    return text.split("").map((char, index) => (
      <Letter key={index} i={index}>
        {char}
      </Letter>
    ));
  };

  useEffect(() => {
    if (ref.current) {
      anime({
        targets: ref.current.children,
        opacity: [0, 1],
        delay: (el, i) => 450 + 45 * i,
        easing: "easeInOutQuad",
      });
    }
  }, []);

  const linkIconVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      transition: { type: "easeInOutQuad", stiffness: 300 },
    },
  };

  return (
    <WavyBackground
      waveWidth={50}
      backgroundFill="bg-zinc-950"
      className="flex flex-col items-center justify-between p-24 pb-8 flex-grow text-slate-100"
    >
      <div className="flex align-baseline whitespace-nowrap text-lg lg:text-5xl font-bold">
        <p>I&#39;m Steven Lee</p>
        <span className="text-wrapper">
          <span className="font-bold flex flex-row" ref={ref}>
            {createSpannedString(", a Software Engineer.")}
          </span>
        </span>
      </div>
      <div className="flex space-y-8 flex-grow flex-col pt-8">
        <div className="space-x-8 flex justify-center">
          <motion.a
            href="https://github.com/Stevenl1221"
            target="_blank"
            rel="noopener noreferrer"
            variants={linkIconVariants}
            initial="initial"
            whileHover="hover"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-4xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/stevenl1221"
            target="_blank"
            rel="noopener noreferrer"
            variants={linkIconVariants}
            initial="initial"
            whileHover="hover"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl " />
          </motion.a>
        </div>
        <p className="text-[#727986] text-xs md:text-sm whitespace-nowrap">
          Built with <span className="font-medium text-slate-400">Next.js</span>{" "}
          and <span className="font-medium text-slate-400">Taildwind CSS</span>,
          deployed with{" "}
          <span className="font-medium text-slate-400">Vercel</span>.
        </p>
      </div>
    </WavyBackground>
  );
};

export default Home;
