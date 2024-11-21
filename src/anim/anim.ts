export const menu = {
  open: {
    width: "190px",
    height: "250px",
    top: "-10px",
    right: "-10px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "80px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const perspective = {
  closed: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
  open: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.7, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.7 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: 0.40 * i },
  }),
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
