import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: 'transparent' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'grab' },
            resize: { enable: true },
          },
          modes: {
            push: { quantity: 4 },
            grab: { distance: 140, links: { opacity: 0.5 } },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#ffffff' },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'out' },
            random: true,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: { enable: true, width: 1920, height: 1080 },
            value: 80,
          },
          opacity: {
            value: { min: 0.4, max: 0.7 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: { type: 'circle' },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
