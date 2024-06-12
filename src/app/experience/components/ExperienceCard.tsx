import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Experience {
  id: number;
  timeline: string;
  title: string;
  company: string;
  team: string;
  description: string;
  logo: string;
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <li
      className={`group/list p-6 rounded-md transition-all lg:hover:bg-slate-900 lg:hover:drop-shadow-lg lg:group-hover:opacity-50 lg:hover:!opacity-100`}
    >
      <div className="mb-4">
        <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">
          {experience.timeline}
        </p>
        <h3 className="text-lg font-bold flex items-center lg:group-hover/list:text-sky-300">
          {experience.title} • {experience.company}{" "}
          <Image
            src={experience.logo}
            alt="logo"
            width={32}
            height={32}
            className="ml-4 bg-white object-contain rounded-full"
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        </h3>
        {experience.team && (
          <p className="text-sm text-gray-400">{experience.team}</p>
        )}
      </div>
      <p className="text-sm text-slate-200">{experience.description}</p>
    </li>
  );
};

export default ExperienceCard;
