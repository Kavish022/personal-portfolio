"use client";

import { useEffect, useRef, useState } from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { animate } from "animejs";
import { Briefcase, Calendar, CheckCircle2, GraduationCap } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of scroll through this section
      const totalDist = rect.height;
      const scrolledPastTop = windowHeight * 0.7 - rect.top;
      const progress = Math.min(1, Math.max(0, scrolledPastTop / totalDist));
      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Staggered reveal for timeline items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              opacity: [0, 1],
              translateX: [-20, 0],
              duration: 750,
              ease: "outExpo",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          label="Trajectory"
          title="Career &"
          highlight="Experience"
          description="A track record of full-stack engineering at Webanix Pvt. Ltd., building scalable enterprise systems and rigorous academic foundations."
        />

        {/* Timeline Container */}
        <div ref={containerRef} className="relative mt-16 max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Base Background Track Line */}
          <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-[2px] bg-zinc-200 dark:bg-white/[0.08]" />

          {/* Animated Scroll Progress Line */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute left-2.5 sm:left-4 top-4 w-[2px] bg-gradient-to-b from-emerald-600 to-emerald-500 shadow-[0_0_12px_rgba(22,163,74,0.4)] dark:from-[#c5ff4a] dark:to-[#c5ff4a]/80 dark:shadow-[0_0_12px_rgba(197,255,74,0.6)] transition-all duration-150 ease-out"
            style={{ height: `${lineHeight}%` }}
          />

          {/* Traveling Glowing Beacon Bead at Scroll Tip */}
          <div
            aria-hidden="true"
            className="absolute left-[11px] sm:[left:17px] -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] shadow-[0_0_14px_rgba(22,163,74,0.5)] dark:shadow-[0_0_14px_#c5ff4a] transition-all duration-150 ease-out z-10 pointer-events-none"
            style={{ top: `calc(1rem + ${lineHeight}%)`, transform: "translate(-50%, -50%)" }}
          >
            <span className="absolute inset-0 rounded-full bg-emerald-500 dark:bg-[#c5ff4a] animate-ping opacity-60" />
          </div>

          {/* Timeline Entries */}
          <div className="space-y-12 sm:space-y-16">
            {experienceData.map((item) => (
              <div
                key={item.id}
                className="timeline-item opacity-0 relative group"
              >
                {/* Node Bullet Dot */}
                <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#090909] border-2 border-zinc-300 dark:border-white/20 group-hover:border-emerald-600 dark:group-hover:border-[#c5ff4a] flex items-center justify-center transition-colors shadow-sm">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.current ? "bg-emerald-600 dark:bg-[#c5ff4a] animate-ping" : "bg-zinc-400 dark:bg-zinc-500"
                    }`}
                  />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111115] border border-black/[0.08] dark:border-white/[0.08] hover:border-emerald-500/40 dark:hover:border-[#c5ff4a]/30 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-[#c5ff4a] transition-colors">
                          {item.role}
                        </h3>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-500/30 dark:bg-[#c5ff4a]/10 dark:text-[#c5ff4a] dark:border-[#c5ff4a]/30 font-medium">
                            Current Role
                          </span>
                        )}
                        {item.type === "education" && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-sky-50 text-sky-700 border border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/30 font-medium">
                            Academic Degree
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-300 mt-0.5 flex items-center gap-2">
                        {item.type === "education" ? (
                          <GraduationCap className="w-3.5 h-3.5 text-zinc-500" />
                        ) : (
                          <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                        )}
                        <span>{item.company}</span>
                        <span className="text-zinc-400 dark:text-zinc-600">•</span>
                        <span className="text-zinc-500 dark:text-zinc-400 font-normal text-xs">{item.location}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-white/[0.03] dark:text-zinc-400 dark:border-white/5 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c5ff4a]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Bullet Achievements */}
                  <div className="space-y-2 mb-6">
                    {item.achievements.map((achieve, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a] shrink-0 mt-0.5" />
                        <span>{achieve}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-black/[0.06] dark:border-white/5 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-white/[0.03] dark:text-zinc-400 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
