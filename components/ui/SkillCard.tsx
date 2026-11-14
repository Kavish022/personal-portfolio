"use client";

import { useRef, useState } from "react";
import { type SkillItem } from "@/data/skills";

interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;
    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-4px)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      }}
      className={`relative p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
        skill.highlight
          ? "bg-white dark:bg-[#131318] border-emerald-500/30 dark:border-white/10 hover:border-emerald-600 dark:hover:border-[#c5ff4a]/50 shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_0_25px_rgba(197,255,74,0.1)]"
          : "bg-white dark:bg-[#0e0e12] border-black/[0.06] dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-[#121216] shadow-sm dark:shadow-none"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold text-zinc-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-[#c5ff4a] transition-colors">
              {skill.name}
            </h4>
            {skill.highlight && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] shadow-[0_0_6px_rgba(22,163,74,0.4)] dark:shadow-[0_0_6px_#c5ff4a]" />
            )}
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-white/5 dark:text-zinc-300 dark:border-white/5">
            {skill.experience}
          </span>
        </div>

        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {skill.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/5 flex items-center justify-between text-[11px] font-mono">
        <span className="text-zinc-500">Proficiency</span>
        <span
          className={`font-medium ${
            skill.level === "Expert"
              ? "text-emerald-700 dark:text-[#c5ff4a]"
              : skill.level === "Advanced"
              ? "text-sky-600 dark:text-sky-400"
              : "text-zinc-700 dark:text-zinc-300"
          }`}
        >
          {skill.level}
        </span>
      </div>
    </div>
  );
}
