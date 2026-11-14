"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 750,
              ease: "outExpo",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headingRef}
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      }`}
    >
      {/* Category Pill Tag */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-[#c5ff4a] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] animate-pulse" />
        {label}
      </div>

      {/* Main Display Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
        {title}{" "}
        {highlight && (
          <span className="text-emerald-600 dark:text-[#c5ff4a] relative inline-block">
            {highlight}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-500/30 dark:bg-[#c5ff4a]/30 rounded-full"
            />
          </span>
        )}
      </h2>

      {/* Subtitle / Description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

