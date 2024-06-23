"use client";
import projects from "../../../data/projects.json";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
import Project from "./components/ProjectCard";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Page() {
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [sortedTechnologies, setSortedTechnologies] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const technologies = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((technology: string) => {
        technologies.add(technology);
      });
    });
    const sortedTech = Array.from(technologies).sort();
    setSortedTechnologies(sortedTech);
  }, []);

  const addSkill = (skill: string) => {
    setFilteredSkills((prevSkills) => {
      if (prevSkills.includes(skill)) {
        return prevSkills.filter((s) => s !== skill);
      } else {
        return [...prevSkills, skill];
      }
    });
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex flex-col">
      <h1 className="md:hidden w-full flex justify-center pr-6 p-6 font-bold uppercase tracking-wide sticky top-0 bg-zinc-950 z-10">
        My Projects
      </h1>
      <button
        className="md:hidden block mx-auto my-4 px-5 py-2 bg-sky-800 rounded hover:bg-sky-900"
        onClick={toggleModal}
      >
        Filter Technologies
      </button>
      <Dialog
        open={isModalOpen}
        onClose={toggleModal}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded p-6 bg-zinc-950">
            <DialogTitle className="text-lg font-bold">
              Select Technologies
            </DialogTitle>
            <div className="mt-4 space-y-2">
              {sortedTechnologies.map((technology, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${
                    filteredSkills.includes(technology)
                      ? "text-sky-300 bg-sky-400/10"
                      : "border-slate-300/10 border"
                  } hover:text-sky-400 font-medium rounded-lg text-xs px-2 py-2.5 me-2 mb-2`}
                  onClick={() => addSkill(technology)}
                >
                  {technology}
                </button>
              ))}
            </div>
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-sky-800 rounded hover:bg-sky-900"
            >
              Close
            </button>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="hidden md:flex justify-center mb-8 flex-wrap md:px-24">
        {sortedTechnologies.map((technology: string, i: number) => {
          return (
            <button
              key={i}
              type="button"
              className={`${
                filteredSkills.includes(technology)
                  ? "text-sky-300 bg-sky-400/10 border border-sky-700/10"
                  : "border-slate-300/10 border"
              } hover:text-sky-400 rounded-lg text-sm px-2.5 py-2.5 me-2 mb-2`}
              onClick={() => addSkill(technology)}
            >
              {technology}
            </button>
          );
        })}
      </div>
      <div className="group grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 px-4 md:px-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            filteredSkills={filteredSkills}
          />
        ))}
      </div>
    </div>
  );
}
