"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { animateCounter } from "@/animations/anime";
import { animate, stagger } from "animejs";
import {
  CheckCircle2,
  Terminal,
  Sparkles,
  Play,
  RotateCw,
  Check,
  Download,
  GraduationCap,
} from "lucide-react";

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);

  // Counter refs
  const statValRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statCards = entry.target.querySelectorAll(".stat-card");
            animate(statCards, {
              opacity: [0, 1],
              translateY: [25, 0],
              duration: 700,
              delay: stagger(120),
              ease: "outExpo",
            });

            // Animate number counters
            const numericalValues = [1, 28, 20, 1420];
            const suffixes = ["+", "+", "+", "+"];

            statValRefs.current.forEach((el, idx) => {
              if (el && numericalValues[idx] !== undefined) {
                animateCounter(el, numericalValues[idx], "", suffixes[idx], 1600 + idx * 200);
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const runTerminalCode = async () => {
    if (terminalRunning) return;
    setTerminalRunning(true);
    setTerminalOutput("Building AST & compiling strict types with Turbopack...");

    await new Promise((r) => setTimeout(r, 700));
    setTerminalOutput("Linking modules (Next.js 16 + React 19)...");

    await new Promise((r) => setTimeout(r, 700));
    setTerminalOutput("✨ [SUCCESS] Ready in 14ms (0 warnings, 0 type errors)");
    setTerminalRunning(false);
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          label="Perspective"
          title="A Little"
          highlight="About Me"
          description="Crafting digital products with a mindset of engineering rigor, design empathy, and relentless curiosity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative, Philosophy, and Problem Solving Approach */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>{portfolioData.bioSummary}</p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={portfolioData.resumeUrl}
                  download="Kavish_Bhatt_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-[#c5ff4a] dark:hover:bg-[#b4f535] dark:text-black font-semibold text-xs sm:text-sm transition-all shadow-md dark:shadow-[0_0_20px_rgba(197,255,74,0.3)]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete CV (PDF)</span>
                </a>
              </div>
            </div>

            {/* Academic Credentials / Education Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a]" />
                <span>Education Background</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-[#c5ff4a]/30 shadow-sm dark:shadow-none transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-emerald-700 dark:text-[#c5ff4a] font-medium">
                        {edu.period}
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white mt-1">
                        {edu.degree}
                      </h4>
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-mono">
                      {edu.institution} • {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Philosophy Quote Card with animated glow beam */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-white/[0.02] border border-black/10 dark:border-white/10 relative overflow-hidden group hover:border-emerald-500/40 dark:hover:border-[#c5ff4a]/40 shadow-sm dark:shadow-none transition-all">
              <div className="w-1.5 absolute left-0 top-0 bottom-0 bg-emerald-600 dark:bg-[#c5ff4a] shadow-[0_0_12px_rgba(22,163,74,0.4)] dark:shadow-[0_0_12px_#c5ff4a]" />
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-[#c5ff4a] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} /> Philosophy
              </div>
              <blockquote className="text-base sm:text-lg italic text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                "{portfolioData.philosophy}"
              </blockquote>
            </div>

            {/* Problem Solving Approach Pillars */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Core Engineering Tenets
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.approach.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-[#c5ff4a]/30 hover:bg-zinc-50 dark:hover:bg-white/[0.04] shadow-sm dark:shadow-none transition-all flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal & Quick Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Handcrafted Animated Developer Card / Terminal Mockup */}
            <div className="rounded-2xl bg-[#0f0f13] border border-zinc-800 dark:border-white/10 overflow-hidden shadow-2xl relative group">
              <div className="px-4 py-3 bg-white/[0.03] border-b border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-zinc-400 font-medium">engineer.config.ts</span>
                </div>

                <button
                  type="button"
                  onClick={runTerminalCode}
                  disabled={terminalRunning}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-[#c5ff4a] hover:text-black text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 transition-colors disabled:opacity-50"
                  title="Execute config in sandbox"
                >
                  {terminalRunning ? (
                    <RotateCw className="w-3 h-3 animate-spin text-[#c5ff4a]" />
                  ) : (
                    <Play className="w-3 h-3 text-[#c5ff4a]" />
                  )}
                  <span>Run</span>
                </button>
              </div>

              <div className="p-5 font-mono text-xs space-y-2.5 text-zinc-300">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span>:{" "}
                  <span className="text-yellow-400">FullStackEngineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-500">name:</span>{" "}
                  <span className="text-emerald-400">"{portfolioData.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-500">role:</span>{" "}
                  <span className="text-emerald-400">"{portfolioData.title}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-500">company:</span>{" "}
                  <span className="text-emerald-400">"{portfolioData.company}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-500">education:</span>{" "}
                  <span className="text-sky-300">"MCA - JRNV University, Rajasthan"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-500">stack:</span> [
                  <span className="text-sky-300">"React.js"</span>,{" "}
                  <span className="text-sky-300">"Angular"</span>,{" "}
                  <span className="text-sky-300">"Node.js"</span>,{" "}
                  <span className="text-sky-300">"PostgreSQL"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-500">openToOpportunities:</span>{" "}
                  <span className="text-[#c5ff4a] font-bold">true</span>,
                </div>
                <div>&#125;;</div>

                {/* Simulated Terminal Output Box */}
                {terminalOutput && (
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-400 flex items-start gap-2 animate-pulse">
                    <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{terminalOutput}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats Grid with Count-Up Animation */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {portfolioData.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="stat-card opacity-0 p-5 rounded-xl bg-white dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/5 hover:border-emerald-500/40 dark:hover:border-[#c5ff4a]/40 hover:bg-zinc-50 dark:hover:bg-white/[0.04] transition-all group shadow-sm hover:shadow-md dark:shadow-none"
                >
                  <div
                    ref={(el) => {
                      statValRefs.current[idx] = el;
                    }}
                    className="text-2xl sm:text-3xl font-black font-mono text-zinc-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-[#c5ff4a] transition-colors"
                  >
                    0
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-300 mt-1 font-sans">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-500 mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
