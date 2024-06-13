"use client";
import React, { useState } from "react";
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
  link: string;
  industry: string;
  technologies: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkIconVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      translateY: 0,
      translateX: 0,
    },
    hover: {
      scale: 1.2,
      translateY: -7,
      translateX: 2,
      transition: { type: "easeInOutQuad", stiffness: 300 },
    },
  };
  return (
    <li className="group/link p-6 rounded-md transition-all md:hover:bg-slate-900 md::drop-shadow-lg md:hover:!opacity-100 md:group-hover:opacity-50">
      <div className="mb-4">
        <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
          {experience.timeline}
        </p>
        <div className="flex items-center space-x-2">
          <a
            href={experience.link}
            className="text-lg font-bold flex items-center group-hover/link:text-sky-400"
            target="_blank"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {experience.title} • {experience.company}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 ml-1"
              variants={linkIconVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </motion.svg>
          </a>
          <Image
            src={experience.logo}
            alt="logo"
            width={32}
            height={32}
            className="bg-white object-contain rounded-full h-[32px] w-[32px]"
          />
        </div>
        {experience.team ? (
          <p className="text-sm text-gray-400">{experience.team}</p>
        ) : (
          <p className="text-sm text-gray-400">{experience.industry}</p>
        )}
      </div>
      <p className="text-sm">{experience.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-semibold text-sky-300 bg-sky-400/10 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </li>
  );
};

export default ExperienceCard;
