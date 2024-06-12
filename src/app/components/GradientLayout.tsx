"use client";
import React, { useEffect, useState, ReactNode } from "react";

const GradientPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

interface GradientLayoutProps {
  children: ReactNode;
  className: string;
}
const GradientLayout: React.FC<GradientLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div
      style={{
        background: `radial-gradient( circle at ${GradientPosition().x}px ${
          GradientPosition().y
        }px, rgba(29, 78, 216, 0.15), transparent 40% )`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default GradientLayout;
