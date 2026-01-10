import { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

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
    const typingSpeed = isDeleting ? 25 : 50;

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

  // Memoize dots so they don't regenerate on typing re-renders
  const dots = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 1,
      left: Math.random() * 100,
      top: Math.random() * 120,
      duration: 40 + Math.random() * 40,
      delay: Math.random() * 20,
    }));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0"
    >
      {/* Animated Background with floating dots */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card overflow-hidden">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-muted-foreground/15"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `floatUp ${dot.duration}s linear ${dot.delay}s infinite`,
            }}
          />
        ))}
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
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
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
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
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
