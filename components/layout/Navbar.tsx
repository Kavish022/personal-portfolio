"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Sun, Moon, Menu, X, ArrowUpRight, Download } from "lucide-react";
import { animate, stagger } from "animejs";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  const sectionIds = ["hero", "about", "projects", "services", "skills", "experience", "contact"];
  const activeSection = useActiveSection(sectionIds, "hero");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Anime.js mobile menu transition
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      animate(mobileMenuRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 350,
        ease: "outExpo",
      });

      if (menuLinksRef.current) {
        const links = menuLinksRef.current.querySelectorAll(".mobile-link");
        animate(links, {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: stagger(60),
          duration: 400,
          ease: "outExpo",
        });
      }
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/80 dark:bg-[#090909]/80 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo / Initials */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 group-hover:border-emerald-600 dark:group-hover:border-[#c5ff4a]/60 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(22,163,74,0.2)] dark:group-hover:shadow-[0_0_15px_rgba(197,255,74,0.3)]">
              <span className="font-mono font-bold text-sm tracking-wider text-zinc-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-[#c5ff4a] transition-colors">
                {portfolioData.initials}
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold text-zinc-900 dark:text-white tracking-tight leading-tight">
                {portfolioData.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                Frontend Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold bg-emerald-600 shadow-[0_0_12px_rgba(22,163,74,0.3)] dark:bg-[#c5ff4a] dark:text-black dark:shadow-[0_0_12px_rgba(197,255,74,0.4)]"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-black/5 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Theme Toggle + Contact CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Theme Switcher Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  resolvedTheme === "dark" ? "light" : "dark"
                } mode`}
                className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:focus-visible:ring-[#c5ff4a]"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>
            )}

            {/* Download CV CTA (Desktop) */}
            <a
              href={portfolioData.resumeUrl}
              download="Kavish_Bhatt_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 border border-emerald-500/20 dark:bg-[#c5ff4a]/10 dark:hover:bg-[#c5ff4a]/20 dark:text-[#c5ff4a] dark:border-[#c5ff4a]/30 transition-all duration-300 shadow-sm"
              title="Download Kavish Bhatt's CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Quick Contact CTA (Desktop) */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-zinc-800 hover:text-black border border-black/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-zinc-200 dark:hover:text-white dark:border-white/10 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-[#c5ff4a]" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-zinc-900 dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-30 bg-white/95 dark:bg-[#090909]/95 backdrop-blur-xl md:hidden pt-28 px-8 pb-12 flex flex-col justify-between"
        >
          <div ref={menuLinksRef} className="flex flex-col gap-4">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-link text-2xl font-bold text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-[#c5ff4a] transition-colors py-1 flex items-center justify-between border-b border-black/5 dark:border-white/5"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              {portfolioData.company} • {portfolioData.location}
            </div>
            <a
              href={portfolioData.resumeUrl}
              download="Kavish_Bhatt_Resume.pdf"
              className="w-full py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/15 text-zinc-900 dark:text-white font-semibold text-center text-sm flex items-center justify-center gap-2 border border-black/10 dark:border-white/10 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a]" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-emerald-600 text-white dark:bg-[#c5ff4a] dark:text-black font-semibold text-center text-sm shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
}
