"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Navbar } from "./components/nav";
import anime from "animejs";

export default function Home() {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml10 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline({ loop: false }).add(
        {
          targets: ".ml10 .letter",
          rotateY: [-90, 0],
          duration: 1300,
          delay: (el, i) => 45 * i,
        },
        850
      );
    }
  }, []);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="ml10 mb-4 flex align-baseline whitespace-nowrap">
        <p className="">I&#39;m Steven Lee</p>
        <span className="text-wrapper">
          <span className="letters font-bold">, a Full Stack Engineer.</span>
        </span>
      </div>
      <div className="my-8"></div>
    </main>
  );
}
