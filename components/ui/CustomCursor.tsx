"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePosition = useRef({ x: -100, y: -100 });
  const ringPosition = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only desktop non-touch devices
    const touchCheck = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touchCheck || reducedMotion || window.innerWidth < 1024) {
      setIsTouchDevice(true);
      return;
    }

    setMounted(true);
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .interactive-hover"
      );
      setHovered(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Smooth responsive lerp loop for the outer ring
    const render = () => {
      const lerp = 0.22;
      ringPosition.current.x += (mousePosition.current.x - ringPosition.current.x) * lerp;
      ringPosition.current.y += (mousePosition.current.y - ringPosition.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!mounted || isTouchDevice) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Central Sharp Accent Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-emerald-600 dark:bg-[#c5ff4a] shadow-[0_0_8px_rgba(22,163,74,0.4)] dark:shadow-[0_0_8px_#c5ff4a] will-change-transform pointer-events-none"
      />

      {/* Clean Minimalist Magnetic Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 will-change-transform rounded-full border pointer-events-none transition-[width,height,margin,border-color,background-color] duration-200 ease-out ${
          hovered
            ? "w-11 h-11 -ml-[22px] -mt-[22px] border-emerald-600 dark:border-[#c5ff4a] bg-emerald-500/15 dark:bg-[#c5ff4a]/10 shadow-[0_0_15px_rgba(22,163,74,0.2)] dark:shadow-[0_0_15px_rgba(197,255,74,0.3)]"
            : clicked
            ? "w-6 h-6 -ml-3 -mt-3 border-emerald-600 dark:border-[#c5ff4a] bg-emerald-500/25 dark:bg-[#c5ff4a]/20"
            : "w-8 h-8 -ml-4 -mt-4 border-emerald-600/40 dark:border-[#c5ff4a]/40 bg-transparent"
        }`}
      />
    </div>
  );
}
