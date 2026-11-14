"use client";

import { useEffect, useRef } from "react";
import { type Project } from "@/data/projects";
import { portfolioData } from "@/data/portfolio";
import { ProjectMockup } from "./ProjectMockup";
import { X, ExternalLink, CheckCircle2, BarChart2, Layers } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { animate } from "animejs";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    // Prevent background scrolling while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Anime.js modal entrance
    if (overlayRef.current && modalRef.current) {
      animate(overlayRef.current, {
        opacity: [0, 1],
        duration: 300,
        ease: "outQuad",
      });
      animate(modalRef.current, {
        opacity: [0, 1],
        scale: [0.94, 1],
        translateY: [20, 0],
        duration: 400,
        ease: "outExpo",
      });
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 dark:bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#101014] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-900 dark:text-white my-auto flex flex-col gap-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-zinc-600 hover:text-black dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-400 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:focus-visible:ring-[#c5ff4a]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:bg-[#c5ff4a]/10 dark:text-[#c5ff4a] dark:border-[#c5ff4a]/20">
              {project.category}
            </span>
            {project.isDemoContent && (
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-white/5">
                Sample Showcase
              </span>
            )}
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {project.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-base">{project.tagline}</p>
        </div>

        {/* Realistic Mockup Window in Modal */}
        <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-inner border border-black/[0.06] dark:border-white/5">
          <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
        </div>

        {/* Overview & Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-sm font-mono text-emerald-700 dark:text-[#c5ff4a] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Overview & Architecture
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.detailedOverview}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono text-emerald-700 dark:text-[#c5ff4a] uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Core Engineering Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Telemetry & Tech */}
          <div className="space-y-5 bg-zinc-50 dark:bg-white/[0.02] p-4 rounded-xl border border-black/5 dark:border-white/5">
            <div>
              <h3 className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a]" /> Performance Metrics
              </h3>
              <div className="space-y-2.5">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs border-b border-black/5 dark:border-white/5 pb-1.5">
                    <span className="text-zinc-500 dark:text-zinc-400">{metric.label}</span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-[#c5ff4a]">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-white/5 dark:text-zinc-300 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions in Modal */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-[#c5ff4a] dark:text-black font-semibold text-xs flex items-center justify-center gap-2 dark:hover:bg-[#b4f535] transition-colors shadow-sm"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>View Source Code & Specs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolioData.resumeUrl}
                download="Kavish_Bhatt_Resume.pdf"
                className="w-full py-2.5 px-4 rounded-lg bg-black/5 hover:bg-black/10 text-zinc-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-200 text-xs flex items-center justify-center gap-2 transition-colors border border-black/10 dark:border-white/10"
              >
                <span>Download CV for Full Architecture</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
