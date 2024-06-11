"use client";
import Anime, { anime } from "react-anime";
type LetterProps = {
  children: string;
};

export default function Home() {
  const Letter: React.FC<LetterProps> = ({ children }) => {
    return <span className="letter">{children === " " ? " " : children}</span>;
  };

  const createSpannedString = (text: string): React.ReactElement[] => {
    return text
      .split("")
      .map((char) => <Letter key={char}>{char === " " ? " " : char}</Letter>);
  };
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="ml10 mb-4 flex align-baseline whitespace-nowrap lg:text-3xl">
        <p className="">I&#39;m Steven Lee</p>
        <span className="text-wrapper">
          <span className="letters font-bold flex flex-row">
            <Anime
              rotateY={[-90, 0]}
              delay={(el: any, i: any) => 1000 + 45 * i}
            >
              {createSpannedString(", a Software Engineer.")}
            </Anime>
          </span>
        </span>
      </div>
      <div className="my-8"></div>
    </main>
  );
}
