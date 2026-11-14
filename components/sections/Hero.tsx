"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { animateFloatingBadge } from "@/animations/anime";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/Icons";
import { animate, createTimeline, stagger } from "animejs";
import {
  ArrowDown,
  Sparkles,
  Layers,
  Zap,
  Download,
  FileText,
} from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const wordsContainerRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const floatPill1Ref = useRef<HTMLDivElement>(null);
  const floatPill2Ref = useRef<HTMLDivElement>(null);
  const floatPill3Ref = useRef<HTMLDivElement>(null);

  // Rotating roles state
  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "React.js & Angular Specialist",
    "Node.js & Database Engineer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roleTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Cycle through roles with flip animation
    const interval = setInterval(() => {
      if (roleTextRef.current) {
        animate(roleTextRef.current, {
          opacity: [1, 0],
          translateY: [0, -12],
          duration: 350,
          ease: "inQuad",
          onComplete: () => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            if (roleTextRef.current) {
              animate(roleTextRef.current, {
                opacity: [0, 1],
                translateY: [12, 0],
                duration: 400,
                ease: "outExpo",
              });
            }
          },
        });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    // Staggered reveal of title words
    const words = wordsContainerRef.current?.querySelectorAll(".hero-word-inner");

    const tl = createTimeline({
      defaults: {
        ease: "outExpo",
        duration: 950,
      },
    });

    if (badgeRef.current) {
      tl.add(badgeRef.current, {
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 650,
      });
    }

    if (words && words.length > 0) {
      tl.add(
        words,
        {
          opacity: [0, 1],
          translateY: ["110%", "0%"],
          rotateX: [45, 0],
          duration: 900,
          delay: stagger(65),
        },
        "-=450"
      );
    }

    if (descRef.current) {
      tl.add(
        descRef.current,
        {
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 700,
        },
        "-=500"
      );
    }

    if (actionsRef.current) {
      tl.add(
        actionsRef.current,
        {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 650,
        },
        "-=450"
      );
    }

    if (socialsRef.current) {
      tl.add(
        socialsRef.current,
        {
          opacity: [0, 1],
          translateY: [15, 0],
          duration: 500,
        },
        "-=350"
      );
    }

    const floaters = [floatPill1Ref.current, floatPill2Ref.current, floatPill3Ref.current].filter(Boolean);
    if (floaters.length > 0) {
      tl.add(
        floaters,
        {
          opacity: [0, 1],
          scale: [0.85, 1],
          duration: 800,
          delay: stagger(150),
        },
        "-=500"
      );
    }

    // Ambient floating badges
    const float1 = animateFloatingBadge(floatPill1Ref.current, 10, 3600);
    const float2 = animateFloatingBadge(floatPill2Ref.current, 8, 4200);
    const float3 = animateFloatingBadge(floatPill3Ref.current, 12, 3800);

    return () => {
      tl.revert();
      float1?.revert();
      float2?.revert();
      float3?.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="radial-glow-top" />

      {/* Floating decorative tech pills for desktop */}
      <div
        ref={floatPill1Ref}
        className="hidden xl:flex items-center gap-2.5 absolute top-36 right-20 px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 backdrop-blur-md text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-md opacity-0 hover:border-emerald-600 dark:hover:border-[#c5ff4a]/50 transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] shadow-[0_0_8px_rgba(22,163,74,0.4)] dark:shadow-[0_0_8px_#c5ff4a]" />
        <span>React.js & Angular • TypeScript</span>
      </div>

      <div
        ref={floatPill2Ref}
        className="hidden xl:flex items-center gap-2.5 absolute bottom-48 left-12 px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 backdrop-blur-md text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-md opacity-0 hover:border-emerald-600 dark:hover:border-[#c5ff4a]/50 transition-colors"
      >
        <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c5ff4a]" />
        <span>Node.js & PostgreSQL APIs</span>
      </div>

      <div
        ref={floatPill3Ref}
        className="hidden xl:flex items-center gap-2.5 absolute top-72 right-36 px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 backdrop-blur-md text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-md opacity-0 hover:border-emerald-600 dark:hover:border-[#c5ff4a]/50 transition-colors"
      >
        <Layers className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
        <span>Enterprise B2B OMS & HRMS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        {/* Availability Pill */}
        <div ref={badgeRef} className="opacity-0 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs font-mono tracking-wider uppercase text-zinc-700 dark:text-zinc-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] animate-ping" />
            <span className="text-zinc-900 dark:text-white font-medium">{portfolioData.status.toUpperCase()}</span>
            <span className="text-zinc-400 dark:text-zinc-500 hidden sm:inline">•</span>
            <span className="text-zinc-600 dark:text-zinc-400 hidden sm:inline">{portfolioData.company} • {portfolioData.location}</span>
          </div>
        </div>

        {/* Oversized Expressive Typography Heading with Masked Word Stagger */}
        <div ref={wordsContainerRef} className="mb-8 font-black tracking-tight leading-[1.05]">
          {/* Line 1 */}
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-900 dark:text-white">
            <span className="inline-block overflow-hidden mr-3 sm:mr-4 align-top">
              <span className="hero-word-inner inline-block will-change-transform">Building</span>
            </span>
            <span className="inline-block overflow-hidden align-top">
              <span className="hero-word-inner inline-block will-change-transform">Digital</span>
            </span>
          </div>

          {/* Line 2 */}
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-900 dark:text-white mt-1 sm:mt-2">
            <span className="inline-block overflow-hidden mr-3 sm:mr-4 align-top">
              <span className="hero-word-inner inline-block will-change-transform">Experiences</span>
            </span>
            <span className="inline-block overflow-hidden align-top">
              <span className="hero-word-inner inline-block will-change-transform">That</span>
            </span>
          </div>

          {/* Line 3 with Electric Lime Accent */}
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-1 sm:mt-2">
            <span className="inline-block overflow-hidden mr-3 sm:mr-4 align-top">
              <span className="hero-word-inner inline-block will-change-transform text-emerald-600 dark:text-[#c5ff4a] underline decoration-emerald-500/40 dark:decoration-[#c5ff4a]/40 decoration-wavy decoration-2">
                Make
              </span>
            </span>
            <span className="inline-block overflow-hidden mr-3 sm:mr-4 align-top">
              <span className="hero-word-inner inline-block will-change-transform text-emerald-600 dark:text-[#c5ff4a] underline decoration-emerald-500/40 dark:decoration-[#c5ff4a]/40 decoration-wavy decoration-2">
                an
              </span>
            </span>
            <span className="inline-block overflow-hidden align-top">
              <span className="hero-word-inner inline-block will-change-transform text-emerald-600 dark:text-[#c5ff4a] underline decoration-emerald-500/40 dark:decoration-[#c5ff4a]/40 decoration-wavy decoration-2">
                Impact.
              </span>
            </span>
          </div>
        </div>

        {/* Narrative Description & Rotating Role Badge */}
        <div className="max-w-2xl mb-10">
          <p
            ref={descRef}
            className="opacity-0 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed"
          >
            I'm <strong className="text-zinc-900 dark:text-white font-semibold">{portfolioData.name}</strong>, a{" "}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-[#c5ff4a]/10 border border-emerald-500/30 dark:border-[#c5ff4a]/30 text-emerald-700 dark:text-[#c5ff4a] font-mono font-medium text-base sm:text-lg">
              <span ref={roleTextRef} className="inline-block will-change-transform">
                {roles[currentRoleIndex]}
              </span>
            </span>{" "}
            at <strong className="text-zinc-900 dark:text-white font-medium">{portfolioData.company}</strong>. Architecting scalable full-stack applications with React, Angular, Node.js, and PostgreSQL — engineering efficient workflows and delivering high-performance enterprise solutions.
          </p>
        </div>

        {/* CTA Actions */}
        <div
          ref={actionsRef}
          className="opacity-0 flex flex-wrap items-center gap-4 mb-14"
        >
          <AnimatedButton
            href="#projects"
            variant="primary"
            size="lg"
            icon={<ArrowDown className="w-4 h-4" />}
          >
            Explore My Work
          </AnimatedButton>

          {/* Download CV Option */}
          <a
            href={portfolioData.resumeUrl}
            download="Kavish_Bhatt_Resume.pdf"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 bg-white hover:bg-zinc-100 text-zinc-900 border border-black/10 hover:border-emerald-600 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-white dark:border-white/10 dark:hover:border-[#c5ff4a] shadow-sm hover:shadow-md"
            aria-label="Download Kavish Bhatt's CV"
          >
            <Download className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a] group-hover:-translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>

          <AnimatedButton
            href="#contact"
            variant="secondary"
            size="lg"
          >
            Let's Talk
          </AnimatedButton>

          <div className="flex items-center gap-2 sm:ml-2">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-zinc-700 hover:text-black border border-black/10 hover:border-emerald-600 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:text-zinc-300 dark:hover:text-white dark:border-white/10 dark:hover:border-[#c5ff4a]/40 transition-all shadow-sm group"
                aria-label={`${social.name} Profile`}
              >
                {social.name === "GitHub" && <GitHubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                {social.name === "LinkedIn" && <LinkedInIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                {social.name === "Instagram" && <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Prompt Bar */}
        <div
          ref={socialsRef}
          className="opacity-0 pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
            <span>Currently based in {portfolioData.location}</span>
          </div>

          <a
            href="#about"
            className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-[#c5ff4a] transition-colors group cursor-pointer"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-emerald-600 dark:text-[#c5ff4a]" />
          </a>
        </div>
      </div>
    </section>
  );
}
