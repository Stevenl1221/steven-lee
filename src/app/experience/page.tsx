import { useEffect } from "react";
import experiences from "../../../data/experiences.json";
import ExperienceCard from "./components/ExperienceCard";
import { motion, AnimatePresence } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 lg:px-24 lg:py-0">
      <div className="flex flex-col lg:flex-row gap-4">
        <h1 className="w-full lg:w-1/3 flex justify-center pr-6 p-6 font-bold uppercase tracking-wide sticky top-0 bg-zinc-950 md:bg-transparent z-10">
          My Experience
        </h1>
        <ol
          className="flex flex-col space-y-4 mb-24 w-full lg:w-3/4 group"
          role="list"
        >
          {experiences.map((experience, id) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </ol>
      </div>
    </div>
  );
}
