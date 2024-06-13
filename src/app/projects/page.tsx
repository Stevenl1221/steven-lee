"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import WorkoutImg from "../../../public/projects/workout.png";
import ASSoftwareImg from "../../../public/projects/assoftware.png";
import WeatherAppImg from "../../../public/projects/weatherapp.png";
import projects from "../../../data/projects.json";
import ProjectCard from "./components/ProjectCard";

export default function Page() {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 px-24">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}
