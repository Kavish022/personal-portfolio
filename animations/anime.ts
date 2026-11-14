"use client";

import { animate, createTimeline, stagger } from "animejs";

/**
 * Checks if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Hero section entrance animation: staggered fade-up of badges, heading lines, and CTAs
 */
export const animateHeroEntrance = (targets: {
  badge?: HTMLElement | null;
  headingWords?: (HTMLElement | null)[];
  description?: HTMLElement | null;
  actions?: HTMLElement | null;
  socials?: HTMLElement | null;
  floatingElements?: (HTMLElement | null)[];
}) => {
  if (prefersReducedMotion()) {
    return null;
  }

  const tl = createTimeline({
    defaults: {
      ease: "outExpo",
      duration: 1000,
    },
  });

  if (targets.badge) {
    tl.add(targets.badge, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
    });
  }

  const validWords = (targets.headingWords || []).filter(Boolean) as HTMLElement[];
  if (validWords.length > 0) {
    tl.add(
      validWords,
      {
        opacity: [0, 1],
        translateY: [40, 0],
        rotateX: [35, 0],
        duration: 900,
        delay: stagger(45),
      },
      "-=400"
    );
  }

  if (targets.description) {
    tl.add(
      targets.description,
      {
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 700,
      },
      "-=500"
    );
  }

  if (targets.actions) {
    tl.add(
      targets.actions,
      {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
      },
      "-=400"
    );
  }

  if (targets.socials) {
    tl.add(
      targets.socials,
      {
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 500,
      },
      "-=300"
    );
  }

  const validFloaters = (targets.floatingElements || []).filter(Boolean) as HTMLElement[];
  if (validFloaters.length > 0) {
    tl.add(
      validFloaters,
      {
        opacity: [0, 1],
        scale: [0.85, 1],
        duration: 800,
        delay: stagger(150),
      },
      "-=500"
    );
  }

  return tl;
};

/**
 * Character-by-character heading reveal with 3D perspective
 */
export const animateCharacterReveal = (elements: HTMLElement[]) => {
  if (elements.length === 0 || prefersReducedMotion()) return null;

  return animate(elements, {
    opacity: [0, 1],
    translateY: [35, 0],
    rotateX: [50, 0],
    duration: 800,
    delay: stagger(30),
    ease: "outExpo",
  });
};

/**
 * Section reveal triggered by IntersectionObserver
 */
export const animateSectionReveal = (element: HTMLElement | null) => {
  if (!element || prefersReducedMotion()) return null;

  return animate(element, {
    opacity: [0, 1],
    translateY: [35, 0],
    duration: 850,
    ease: "outExpo",
  });
};

/**
 * Staggered cards reveal
 */
export const animateCardsStagger = (elements: HTMLElement[]) => {
  if (elements.length === 0 || prefersReducedMotion()) return null;

  return animate(elements, {
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 800,
    delay: stagger(120),
    ease: "outExpo",
  });
};

/**
 * Ambient floating animation for background or decorative badges
 */
export const animateFloatingBadge = (
  element: HTMLElement | null,
  offsetY: number = 8,
  duration: number = 4000
) => {
  if (!element || prefersReducedMotion()) return null;

  return animate(element, {
    translateY: [-offsetY, offsetY],
    duration,
    ease: "inOutSine",
    alternate: true,
    loop: true,
  });
};

/**
 * Dynamic number counter animation (0 -> target)
 */
export const animateCounter = (
  element: HTMLElement | null,
  endValue: number,
  prefix: string = "",
  suffix: string = "",
  duration: number = 1800
) => {
  if (!element) return null;
  if (prefersReducedMotion()) {
    element.innerText = `${prefix}${endValue.toLocaleString()}${suffix}`;
    return null;
  }

  const tracker = { val: 0 };
  return animate(tracker, {
    val: endValue,
    duration,
    ease: "outExpo",
    onRender: () => {
      element.innerText = `${prefix}${Math.round(tracker.val).toLocaleString()}${suffix}`;
    },
  });
};

/**
 * Magnetic button hover effect
 */
export const animateMagnetic = (
  target: HTMLElement | null,
  x: number,
  y: number
) => {
  if (!target || prefersReducedMotion()) return null;

  return animate(target, {
    translateX: x,
    translateY: y,
    duration: 300,
    ease: "outQuad",
  });
};

/**
 * Reset magnetic position
 */
export const resetMagnetic = (target: HTMLElement | null) => {
  if (!target) return null;

  return animate(target, {
    translateX: 0,
    translateY: 0,
    duration: 500,
    ease: "outElastic(1, .5)",
  });
};
