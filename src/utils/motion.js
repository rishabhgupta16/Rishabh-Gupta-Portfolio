/**
 * Shared motion primitives.
 * All timings use the "soft" easing personality:
 * short travel distances, gentle springs, quick settle.
 */

const SOFT_EASE = [0.22, 1, 0.36, 1];

export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 16,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: SOFT_EASE,
        duration: 0.7,
        delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay = 0, duration = 0.6) => {
  return {
    hidden: {
      x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
      y: direction === "up" ? 24 : direction === "down" ? -24 : 12,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type || "tween",
        delay,
        duration,
        ease: SOFT_EASE,
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.6) => {
  return {
    hidden: {
      scale: 0.96,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: SOFT_EASE,
      },
    },
  };
};

export const slideIn = (direction, type, delay = 0, duration = 0.8) => {
  return {
    hidden: {
      x: direction === "left" ? "-6%" : direction === "right" ? "6%" : 0,
      y: direction === "up" || direction === "down" ? "6%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: SOFT_EASE,
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};
