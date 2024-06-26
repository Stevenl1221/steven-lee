import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "./components/nav";
import React from "react";
import GradientLayout from "./components/GradientLayout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Steven Lee's Site",
  description: "Steven's personal site showcasing his projects and experience",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");
const linkIconVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    transition: { type: "easeInOutQuad", stiffness: 300 },
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cx("bg-zinc-950 text-slate-300")}>
      <Script
        src="https://kit.fontawesome.com/2a0d9b603a.js"
        crossOrigin="anonymous"
      ></Script>
      <body className={`${GeistSans.className} `}>
        <GradientLayout
          className={"flex flex-col min-w-screen min-h-screen max-h-full"}
        >
          <Navbar />
          {children}
        </GradientLayout>
      </body>
    </html>
  );
}
