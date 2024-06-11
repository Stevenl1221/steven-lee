import React from "react";
import Image from "next/image";

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
    <div className="hover:bg-[#121b39] transition ease-in-out delay-50 p-6 rounded-lg">
      <div className="mb-4">
        <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">
          {experience.timeline}
        </p>
        <h3 className="text-lg font-bold flex items-center">
          {" "}
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
      <p className="text-sm">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
