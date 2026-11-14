"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none"
    >
      <div
        className="h-full bg-emerald-600 dark:bg-[#c5ff4a] shadow-[0_0_10px_rgba(22,163,74,0.4)] dark:shadow-[0_0_12px_rgba(197,255,74,0.7)] transition-transform duration-75 ease-out origin-left"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}

