import { useEffect } from "react";
import experiences from "../../../data/experiences.json";
import ExperienceCard from "./components/ExperienceCard";
export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans lg:px-24 lg:py-0">
      <div className="flex gap-4">
        <h1 className="w-1/2 flex justify-center pr-6 p-6 font-bold uppercase tracking-wide">
          My Experience
        </h1>
        <div className="flex flex-col space-y-4 mb-12">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
