"use client";

import { useEffect, useRef, useState } from "react";
import { servicesData, type ServiceItem } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { animate, stagger } from "animejs";
import { Layers, Sparkles, Zap, CheckCircle2, ArrowRight } from "lucide-react";

function ServiceCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "layers":
        return <Layers className="w-6 h-6 text-emerald-600 dark:text-[#c5ff4a] transition-transform duration-300 group-hover:scale-110" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6 text-emerald-600 dark:text-[#c5ff4a] transition-transform duration-300 group-hover:rotate-12" />;
      case "zap":
        return <Zap className="w-6 h-6 text-emerald-600 dark:text-[#c5ff4a] transition-transform duration-300 group-hover:scale-110" />;
      default:
        return <Layers className="w-6 h-6 text-emerald-600 dark:text-[#c5ff4a]" />;
    }
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="service-card opacity-0 group relative p-8 rounded-2xl bg-white dark:bg-[#111115] border border-black/[0.08] dark:border-white/[0.08] hover:border-emerald-500/50 dark:hover:border-[#c5ff4a]/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_35px_rgba(197,255,74,0.1)] flex flex-col justify-between overflow-hidden"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent-glow), transparent 70%)`,
        }}
      />

      {/* Top glowing laser line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/0 dark:via-[#c5ff4a]/0 to-transparent group-hover:via-emerald-600/40 dark:group-hover:via-[#c5ff4a]/60 transition-all duration-500" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-500/20 group-hover:bg-emerald-500/10 dark:bg-white/[0.04] dark:border-white/10 dark:group-hover:border-[#c5ff4a]/40 dark:group-hover:bg-[#c5ff4a]/10 flex items-center justify-center transition-all duration-300 shadow-sm">
            {getIcon(service.icon)}
          </div>
          <span className="font-mono text-xl font-bold text-zinc-400 group-hover:text-emerald-700 dark:text-zinc-600 dark:group-hover:text-[#c5ff4a] transition-colors">
            {service.number}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-[#c5ff4a] transition-colors">
          {service.title}
        </h3>

        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-300 mb-4">
          {service.tagline}
        </p>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables List */}
        <div className="space-y-2.5 mb-8">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 group/item">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c5ff4a] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Tags & Arrow */}
      <div className="relative z-10 pt-6 border-t border-black/[0.06] dark:border-white/5 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {service.techTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-white/[0.03] dark:text-zinc-400 dark:border-white/5 group-hover:border-black/10 dark:group-hover:border-white/15 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 text-zinc-600 group-hover:bg-emerald-600 group-hover:text-white dark:bg-white/[0.03] dark:border-white/5 dark:group-hover:bg-[#c5ff4a] dark:group-hover:text-black dark:text-zinc-500 flex items-center justify-center transition-all shrink-0">
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            animate(cards, {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              delay: stagger(150),
              ease: "outExpo",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          label="Capabilities"
          title="What I"
          highlight="Do"
          description="High-leverage engineering services focused on architecture, visual fidelity, and web performance."
        />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
