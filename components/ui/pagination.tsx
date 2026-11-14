"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pagination({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

export function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-wrap items-center gap-1.5 sm:gap-2", className)}
      {...props}
    />
  );
}

export function PaginationItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li className={cn("", className)} {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
} & React.ComponentProps<"button">;

export function PaginationLink({
  className,
  isActive,
  disabled,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <button
      type="button"
      aria-current={isActive ? "page" : undefined}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-xl text-xs font-mono font-medium transition-all duration-200 select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:focus-visible:ring-[#c5ff4a]",
        size === "icon" && "h-9 w-9 sm:h-10 sm:w-10",
        size === "default" && "h-9 px-4 sm:h-10 sm:px-5 gap-1.5",
        size === "sm" && "h-8 px-3 text-[11px] gap-1",
        size === "lg" && "h-11 px-6 text-sm gap-2",
        isActive
          ? "bg-emerald-600 text-white font-semibold shadow-md dark:bg-[#c5ff4a] dark:text-black dark:shadow-[0_0_15px_rgba(197,255,74,0.35)] scale-105"
          : "text-zinc-600 hover:text-zinc-950 hover:bg-black/5 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/5",
        disabled && "opacity-40 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent hover:text-zinc-600 dark:hover:text-zinc-400 scale-100",
        className
      )}
      {...props}
    />
  );
}

export function PaginationPrevious({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      disabled={disabled}
      className={cn("gap-1.5 pl-3 pr-4", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="hidden sm:inline font-sans">Previous</span>
    </PaginationLink>
  );
}

export function PaginationNext({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      disabled={disabled}
      className={cn("gap-1.5 pl-4 pr-3", className)}
      {...props}
    >
      <span className="hidden sm:inline font-sans">Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  );
}

export function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-zinc-400 dark:text-zinc-600",
        className
      )}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

