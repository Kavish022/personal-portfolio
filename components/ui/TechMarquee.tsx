"use client";

interface TechMarqueeProps {
  className?: string;
}

export function TechMarquee({ className = "" }: TechMarqueeProps) {
  const items = [
    { text: "REACT.JS", highlight: true },
    { text: "ANGULAR", highlight: false },
    { text: "TYPESCRIPT", highlight: true },
    { text: "NODE.JS & EXPRESS", highlight: false },
    { text: "POSTGRESQL", highlight: true },
    { text: "SEQUELIZE ORM", highlight: false },
    { text: "REDUX TOOLKIT & RXJS", highlight: true },
    { text: "ANT DESIGN", highlight: false },
    { text: "TAILWIND CSS", highlight: true },
    { text: "REST APIS & DTOs", highlight: false },
    { text: "DOCKER & SUPABASE", highlight: true },
    { text: "ENTERPRISE B2B SYSTEMS", highlight: false },
  ];

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden py-6 border-y border-black/[0.06] dark:border-white/[0.08] bg-zinc-100/60 dark:bg-black/40 backdrop-blur-sm select-none ${className}`}
    >
      {/* Edge Blur Fade Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fafafa] dark:from-[#090909] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fafafa] dark:from-[#090909] to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render 3 duplicate loops to guarantee continuous infinite scroll */}
        {[...Array(3)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center shrink-0 gap-8 pr-8">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span
                  className={`text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors duration-300 ${
                    item.highlight
                      ? "text-emerald-700 dark:text-[#c5ff4a] font-semibold drop-shadow-[0_0_8px_rgba(22,163,74,0.25)] dark:drop-shadow-[0_0_10px_rgba(197,255,74,0.3)]"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {item.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#c5ff4a]/60 shadow-[0_0_6px_rgba(22,163,74,0.4)] dark:shadow-[0_0_6px_#c5ff4a]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

