"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

type LetterProps = {
  children: string;
};

const Letter: React.FC<LetterProps> = ({ children }) => {
  return <span className="letter">{children === " " ? " " : children}</span>;
};

const Home: React.FC = () => {
  const ref = useRef<HTMLSpanElement>(null);

  const createSpannedString = (text: string): React.ReactElement[] => {
    return text
      .split("")
      .map((char, index) => <Letter key={index}>{char}</Letter>);
  };

  useEffect(() => {
    if (ref.current) {
      anime({
        targets: ref.current.children,
        opacity: [0, 1],
        // rotateY: [-90, 0],
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
    <main className="flex flex-col items-center justify-between p-24 flex-grow">
      <div className="ml10 mb-4 flex align-baseline whitespace-nowrap lg:text-3xl">
        <p>I&#39;m Steven Lee</p>
        <span className="text-wrapper">
          <span className="letters font-bold flex flex-row" ref={ref}>
            {createSpannedString(", a Software Engineer.")}
          </span>
        </span>
      </div>
      <div className="flex space-x-8 justify-end">
        <motion.a
          href="https://github.com/Stevenl1221"
          target="_blank"
          rel="noopener noreferrer"
          variants={linkIconVariants}
          initial="initial"
          whileHover="hover"
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
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-4xl " />
        </motion.a>
      </div>
    </main>
  );
};

export default Home;
