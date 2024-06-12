import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "./components/nav";
import PageTransition from "./components/PageTransition";
import React from "react";
import GradientLayout from "./components/GradientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven Lee's Site",
  description: "Steven's personal site showcasing his projects and experience",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-zinc-950 text-slate-100",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className={inter.className}>
        <GradientLayout className={"min-w-screen min-h-screen"}>
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </GradientLayout>
      </body>
    </html>
  );
}
