export const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      damping: 40,
      delay: 0.4,
      duration: 0.2,
      stiffness: 400,
      type: 'spring',
    },
  },

  open: {
    opacity: 0.5,
    transition: {
      delay: 0.2,
      duration: 0.3,
      type: 'spring',
    },
  },
}

export const backgroundVariants = {
  closed: {
    clipPath: 'circle(19px at 259px 71px)',
    transition: {
      damping: 40,
      delay: 0.2,
      stiffness: 400,
      type: 'spring',
    },
  },

  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 259px 71px)`,
    transition: {
      restDelta: 2,
      stiffness: 20,
      type: 'spring',
    },
  }),
}

export const parentStaggerVariants = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { delayChildren: 0.2, staggerChildren: 0.07 },
  },
}

export const childrenStaggerVariants = {
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    y: 50,
  },
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    y: 0,
  },
}
