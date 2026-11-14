"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/Icons";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-100 dark:bg-[#070708] border-t border-black/[0.06] dark:border-white/[0.08] text-zinc-900 dark:text-white pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-black/[0.06] dark:border-white/[0.06]">
          {/* Brand & Closing statement */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 flex items-center justify-center">
                <span className="font-mono font-bold text-sm text-emerald-700 dark:text-[#c5ff4a]">
                  {portfolioData.initials}
                </span>
              </div>
              <span className="text-base font-bold text-zinc-900 dark:text-white">
                {portfolioData.name}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Crafting digital experiences with obsessive attention to typography, micro-interactions, and system performance.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-zinc-600 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select engineering opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-sans">
              {portfolioData.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-600 dark:hover:text-[#c5ff4a] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-sans">
              {portfolioData.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center gap-2"
                  >
                    {social.name === "GitHub" && <GitHubIcon className="w-4 h-4 text-zinc-500" />}
                    {social.name === "LinkedIn" && <LinkedInIcon className="w-4 h-4 text-zinc-500" />}
                    {social.name === "Instagram" && <InstagramIcon className="w-4 h-4 text-zinc-500" />}
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {currentYear} {portfolioData.name}. All rights reserved.</span>
            <span>•</span>
            <a
              href={portfolioData.resumeUrl}
              download="Kavish_Bhatt_Resume.pdf"
              className="text-emerald-700 dark:text-[#c5ff4a] hover:underline"
            >
              Download CV (PDF)
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-zinc-700 hover:text-black border border-black/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-emerald-600 dark:text-[#c5ff4a]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
