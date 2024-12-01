export const nonCollidableParticles = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fullScreen: {
    zIndex: 0,
    enable: false, // this is the line to change
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 5,
      },
      repulse: {
        distance: 80,
        duration: 0.9,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 4,
      straight: false,
    },

    // opacity: {
    //   value: 0.5,
    // },
    // shape: {
    //   type: "circle",
    // },
    // size: {
    //   value: { min: 1, max: 5 },
    // },
    number: {
      value: 200,
    },
    color: {
      value: "#ffffff",
    },
    links: {
      enable: true,
      distance: 120,
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: {
        min: 2,
        max: 4,
      },
    },
    move: {
      enable: true,
      speed: 1,
    },
  },
  detectRetina: true,
};

export const nonCollidableParticlesForMobile = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fullScreen: {
    zIndex: 0,
    enable: false, // this is the line to change
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 5,
      },
      repulse: {
        distance: 40,
        duration: 0.9,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 40,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 4,
      straight: false,
    },

    // opacity: {
    //   value: 0.5,
    // },
    // shape: {
    //   type: "circle",
    // },
    // size: {
    //   value: { min: 1, max: 5 },
    // },
    number: {
      value: 70,
    },
    color: {
      value: "#ffffff",
    },
    links: {
      enable: true,
      distance: 50,
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: {
        min: 1,
        max: 2,
      },
    },
    move: {
      enable: true,
      speed: 1,
    },
  },
  detectRetina: true,
};
