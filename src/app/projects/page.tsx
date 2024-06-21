"use client";
import projects from "../../../data/projects.json";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
import Project from "./components/ProjectCard";

export default function Page() {
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [sortedTechnologies, setSortedTechnologies] = useState<string[]>([]);

  useEffect(() => {
    const technologies = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((technology: string) => {
        technologies.add(technology);
      });
    });
    console.log(technologies);
    const sortedTech = Array.from(technologies).sort();
    console.log(sortedTech);
    setSortedTechnologies(sortedTech);
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="md:hidden w-full flex justify-center pr-6 p-6 font-bold uppercase tracking-wide sticky top-0 bg-zinc-950 z-10">
        My Projects
      </h1>
      <div className="flex justify-center mb-8 flex-wrap">
        {sortedTechnologies.map((technology: string, i: number) => {
          return (
            <button
              key={i}
              type="button"
              className="hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border border-gray-300"
              onClick={() => setFilteredSkills([...filteredSkills, technology])}
            >
              {technology}
            </button>
          );
        })}
      </div>
      <div className="group grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 px-4 md:px-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
