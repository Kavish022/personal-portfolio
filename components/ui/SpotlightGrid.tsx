"use client";

import { useEffect, useRef, useState } from "react";

export function SpotlightGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable mouse-following spotlight on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    let rafId: number;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY + window.scrollY;
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    const update = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${currentX}px`);
        containerRef.current.style.setProperty("--mouse-y", `${currentY}px`);
      }

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        // Default coordinates if not hovered
        ["--mouse-x" as any]: "-500px",
        ["--mouse-y" as any]: "-500px",
      }}
    >
      {/* Subtle Digital Studio Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      {/* Dynamic Cursor Light Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-500 will-change-transform"
        style={{
          background: `radial-gradient(550px circle at var(--mouse-x) var(--mouse-y), var(--accent-glow), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Ambient Pulsing Atmospheric Glow Spheres */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#c5ff4a]/[0.025] blur-[140px] animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-[60%] right-[10%] w-[600px] h-[600px] rounded-full bg-sky-500/[0.02] blur-[160px] animate-pulse" style={{ animationDuration: "12s" }} />
      <div className="absolute top-[85%] left-[25%] w-[450px] h-[450px] rounded-full bg-purple-500/[0.02] blur-[130px] animate-pulse" style={{ animationDuration: "10s" }} />
    </div>
  );
}

