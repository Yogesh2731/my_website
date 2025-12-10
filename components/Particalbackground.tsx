"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

interface ParticlesProps {
  id: string;
}

const ParticlesBackground: React.FC<ParticlesProps> = ({ id }) => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  // initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
  };

  // Dynamic colors for theme
  const isDark = theme === "dark";
  const particleColor = isDark ? "#ff0000" : "#0000ff";
  const backgroundColor = isDark ? "#171717" : "#faf7f2";

  // Converted JSON configuration (simplified + theme support)
  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: backgroundColor,
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: {
                enable: false,
                force: 2,
                smooth: 10
            }
          },
          onDiv:{
            selectors: [],
            enable: false,
            mode: [],
            type: "circle"
          },
          resize: {
            enable: true,
            delay: 0.5,
          },
        },
        modes: {
          trail: {
            delay: 0.005,
            pauseOnStop: true,
            quantity: 5,
            particles: {
              color: {
                value: particleColor,
                animation: {
                  enable: true,
                  speed: 400,
                  sync: true,
                },
              },
              move: {
                outModes: {
                  default: "destroy",
                },
                speed: 5,
              },
              size: {
                value: { min: 1, max: 10 },
                animation: {
                  enable: true,
                  speed: 10,
                  sync: true,
                  startValue: "min",
                  destroy: "max",
                },
              },
            },
          },
        },
      },
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        color: {
          value: particleColor,
          animation: {
            h: {
              enable: true,
              speed: 50,
              sync: false,
            },
          },
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5,
          },
        },
        size: {
          value: { min: 1, max: 5 },
          animation: {
            enable: true,
            speed: 3,
          },
        },
        links: {
          enable: true,
          distance: 50,
          color: particleColor,
          opacity: 1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [backgroundColor, particleColor]
  );


  if (!init) return null;

  return (
    <Particles
      id={id}
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
