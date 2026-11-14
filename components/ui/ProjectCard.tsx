"use client";

import { useState, useRef } from "react";
import { type Project } from "@/data/projects";
import { ProjectMockup } from "./ProjectMockup";
import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Subtle 3D tilt calculation
    const rotX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-4px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      }}
      className="group relative rounded-2xl bg-white dark:bg-[#111115] border border-black/[0.08] dark:border-white/[0.08] hover:border-emerald-500/50 dark:hover:border-[#c5ff4a]/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_35px_rgba(197,255,74,0.1)] flex flex-col overflow-hidden will-change-transform"
    >
      {/* Interactive Cursor Spotlight on Border & Surface */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent-glow), transparent 70%)`,
        }}
      />

      {/* Top Media / Interactive Mockup Area */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-zinc-100 dark:bg-[#0a0a0d] border-b border-black/[0.06] dark:border-white/[0.06] p-3 flex items-center justify-center">
        <div
          className={`w-full h-full transition-transform duration-700 ease-out ${
            isHovered ? "scale-[1.04]" : "scale-100"
          }`}
        >
          <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
        </div>

        {/* Hover overlay with quick preview trigger */}
        <div
          className={`absolute inset-0 bg-black/50 dark:bg-black/60 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-opacity duration-300 z-20 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => onSelectProject(project)}
            className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs flex items-center gap-2 hover:bg-emerald-500 hover:text-white dark:hover:bg-[#c5ff4a] dark:hover:text-black transition-all transform hover:scale-105 shadow-xl"
          >
            <Eye className="w-4 h-4" />
            <span>Deep Dive</span>
          </button>
        </div>

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-white/90 dark:bg-black/75 backdrop-blur-md text-emerald-700 dark:text-[#c5ff4a] border border-emerald-500/30 dark:border-[#c5ff4a]/30 shadow-md">
            {project.category}
          </span>
          {project.isDemoContent && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-200/90 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-700 dark:text-zinc-400 border border-black/10 dark:border-white/10">
              Demo Preview
            </span>
          )}
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
        <div>
          {/* Project Title with Animated Accent Indicator */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#c5ff4a] transition-colors duration-300 flex items-center gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-600 dark:text-[#c5ff4a]" />
            </h3>
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 shrink-0 shadow-[0_0_8px_rgba(22,163,74,0.4)] dark:shadow-[0_0_8px_#c5ff4a]" />
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/5 mb-5 group-hover:border-black/10 dark:group-hover:border-white/10 transition-colors">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[10px] font-sans text-zinc-500 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-zinc-900 dark:text-white mt-0.5 group-hover:text-emerald-600 dark:group-hover:text-[#c5ff4a] transition-colors">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 text-zinc-700 border border-zinc-200 hover:border-zinc-300 dark:bg-white/[0.04] dark:text-zinc-300 dark:border-white/[0.06] dark:hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded-md text-xs font-mono bg-zinc-100 text-zinc-500 dark:bg-white/[0.02] dark:text-zinc-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
          <button
            onClick={() => onSelectProject(project)}
            className="text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-[#c5ff4a] flex items-center gap-1.5 transition-colors group/btn"
          >
            <span>Explore Case Study</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(project)}
              title="Open GitHub"
              className="p-2 rounded-lg bg-black/5 hover:bg-black/10 text-zinc-700 hover:text-black dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProject(project)}
              title="Open Live Preview"
              className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:bg-[#c5ff4a]/10 dark:hover:bg-[#c5ff4a]/20 dark:text-[#c5ff4a] transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
