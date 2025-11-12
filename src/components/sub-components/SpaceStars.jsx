import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export const SpaceStars = () => {
    const options = {
        fullScreen: { enable: true },
        particles: {
          number: {
            value: 800,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.1,
              opacity_min: 0.8,
              sync: false
            }
          },
          size: {
            value: { min: 0.5, max:1 },
            random: true,
            anim: {
              enable: true,
              speed: 0.1,
              size_min: 0.5,
              sync: false
            }
          },
          links: {
            enable: false
          },
          move: {
            enable: true,
            speed: 0.1,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: false
            },
            onClick: {
              enable: false
            }
          }
        }
      };
      
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles id="tsparticles3" options={options} init={particlesInit} loaded={particlesLoaded} />
    );
};
