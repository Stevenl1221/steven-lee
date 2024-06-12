"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";

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

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="ml10 mb-4 flex align-baseline whitespace-nowrap lg:text-3xl">
        <p>I&#39;m Steven Lee</p>
        <span className="text-wrapper">
          <span className="letters font-bold flex flex-row" ref={ref}>
            {createSpannedString(", a Software Engineer.")}
          </span>
        </span>
      </div>
      <div className="my-8"></div>
    </main>
  );
};

export default Home;
