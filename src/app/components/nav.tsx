"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "HOME",
  },
  "/experience": {
    name: "EXPERIENCE",
  },
  "/projects": {
    name: "PROJECTS",
  },
  "/resume": {
    name: "RESUME",
  },
};

export function Navbar() {
  const [selectedLink, setSelectedLink] = useState(
    usePathname().slice(1).toUpperCase() || "HOME"
  );

  return (
    <aside className="-ml-[8px] tracking-tight flex flex-col items-center justify-between p-24 md:p-24 z-10">
      <div className="sticky top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade"
          id="nav"
        >
          <div className="flex flex-row space-x-0 lg:p-0 md:p-8">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isSelected = name === selectedLink;

              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-200 flex align-middle relative py-1 px-1 md:px-2 m-1 font-bold no-underline ${
                    isSelected ? "font-bold text-white" : "text-gray-400"
                  }`}
                  onClick={() => setSelectedLink(name)}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
