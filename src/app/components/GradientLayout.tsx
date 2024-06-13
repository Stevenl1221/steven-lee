"use client";
import React, { useEffect, useState, ReactNode } from "react";
import useMousePosition from "./useMousePosition";

interface GradientLayoutProps {
  children: ReactNode;
  className: string;
}
const GradientLayout: React.FC<GradientLayoutProps> = ({
  children,
  className,
}) => {
  const { x, y } = useMousePosition();

  return (
    <div className={className}>
      {children}
      <style jsx>{`
        @media (min-width: 768px) {
          div {
            background: ${`radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 40%)`};
          }
        }
      `}</style>
    </div>
  );
};

export default GradientLayout;
