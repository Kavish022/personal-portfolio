"use client";

import { useRef, type ReactNode, type ButtonHTMLAttributes } from "react";
import { animateMagnetic, resetMagnetic } from "@/animations/anime";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export function AnimatedButton({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  icon,
  iconPosition = "right",
  className = "",
  onClick,
  ...props
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current || window.innerWidth < 1024) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    animateMagnetic(buttonRef.current, x, y);
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current || window.innerWidth < 1024) return;
    resetMagnetic(buttonRef.current);
  };

  const baseStyles =
    "group relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:focus-visible:ring-[#c5ff4a] active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2.5",
    lg: "text-base px-8 py-4 gap-3",
  }[size];

  const variantStyles = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_2px_12px_rgba(22,163,74,0.3)] hover:shadow-[0_4px_16px_rgba(22,163,74,0.4)] dark:bg-[#c5ff4a] dark:text-black dark:hover:bg-[#b4f535] dark:shadow-[0_0_20px_rgba(197,255,74,0.3)] dark:hover:shadow-[0_0_28px_rgba(197,255,74,0.5)] font-semibold",
    secondary:
      "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 hover:border-zinc-300 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:border-white/10 dark:hover:border-white/20 backdrop-blur-sm",
    outline:
      "border border-zinc-300 dark:border-white/15 hover:border-emerald-600 dark:hover:border-[#c5ff4a] text-zinc-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-[#c5ff4a] bg-transparent hover:bg-emerald-50 dark:hover:bg-[#c5ff4a]/5",
    ghost:
      "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/5",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}

