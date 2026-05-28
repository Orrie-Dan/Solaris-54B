export const easeOutExpo = [0.22, 1, 0.36, 1];
export const easeInSoft = [0.4, 0, 0.2, 1];

export const revealUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: easeOutExpo,
      opacity: { duration: 0.55, ease: easeOutExpo },
    },
  },
};

export const revealCard = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: easeOutExpo,
      opacity: { duration: 0.5, ease: easeOutExpo },
    },
  },
};

export const revealFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

export const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Triggers when ~18% visible; negative margin starts animation slightly before center. */
export const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -12% 0px",
};

/** Reduced-motion friendly route transition. */
export const fadeInOut = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.28, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.22, ease: easeInSoft },
  },
};

/** Primary route crossfade — opacity-led with a soft hold between exit and enter. */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.52, ease: easeOutExpo, delay: 0.04 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.38, ease: easeInSoft },
  },
};

/** In-section content swaps (map meta, solution pages, SSIT panel). */
export const contentFade = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: easeOutExpo,
      opacity: { duration: 0.42, ease: easeOutExpo },
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.32,
      ease: easeInSoft,
      opacity: { duration: 0.28, ease: easeInSoft },
    },
  },
};
