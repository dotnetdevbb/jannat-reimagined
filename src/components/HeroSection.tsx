import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import heroBg from '@/assets/hero-bg.png';

const roles = [
  'Developer.',
  'Professional Coder.',
  '.NET Full Stack Developer',
  'Web Developer',
  'Mobile App Developer',
  'Desktop App Developer',
];

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0"
    >
      {/* Background Image with Particles Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <ParticlesBackground />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground mb-6 tracking-tight font-heading">
            USMAN AKRAM
          </h1>
        </div>

        <div
          className="animate-fade-up"
          style={{
            animationDelay: '0.8s',
            animationDuration: '0.8s',
            opacity: 0
             }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">
            I am a{' '}
            <span className="text-primary font-semibold">
              {displayText}
              <span className="typing-cursor" />
            </span>
          </p>
        </div>

        <div
          className="animate-fade-up mt-10"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <button onClick={handleContactClick} className="btn-primary">
            CONTACT ME
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};
