"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  image: string;
  title: string;
  detail: string;
  technologies: string[];
  repoLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<{
  project: Project;
  index: React.Key;
  filteredSkills: string[];
}> = ({ project, index, filteredSkills }) => {
  const [isHovered, setIsHovered] = useState(false);

  const projectVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: "200" },
    },
  };

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
    <motion.div
      key={index}
      className="group/link p-6 rounded-md transition-colors md:hover:bg-slate-900 md::drop-shadow-lg"
      variants={projectVariants}
      initial="initial"
      animate="visible"
      whileHover="hover"
    >
      <div className="relative h-48 w-full mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 1250px) 100vw, 760px"
        />
      </div>

      {project.demoLink ? (
        <a
          href={project.demoLink}
          className="text-lg font-bold flex items-center hover:text-sky-400"
          target="_blank"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {project.title}
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
      ) : (
        <p className="text-lg font-bold flex items-center hover:text-sky-400">
          {project.title}
        </p>
      )}
      <p className="text-slate-400 text-sm mb-4">{project.detail}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            // className="px-3 py-1 text-xs text-sky-300 bg-sky-400/10 rounded-full"
            className={`${
              filteredSkills.includes(tech)
                ? "text-sky-300 bg-sky-400/10 font-semibold"
                : "border-slate-300/10 border"
            } px-3 py-1 text-xs rounded-full`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {project.repoLink && (
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
        )}
        {project.demoLink && (
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={linkIconVariants}
            initial="initial"
            whileHover="hover"
          >
            <i className="fa-solid fa-paperclip text-2xl"></i>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
