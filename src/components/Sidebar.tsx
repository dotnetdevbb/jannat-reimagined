import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Facebook, Twitter, Home, Briefcase, Award, Mail } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home', icon: Home },
  { label: 'WHAT I DO', href: '#services', icon: Briefcase },
  { label: 'EXPERIENCE', href: '#experience', icon: Award },
  { label: 'CONTACTS', href: '#contacts', icon: Mail },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
];

export const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar-background border-b border-sidebar-border">
        <div className="flex items-center justify-between px-4 py-4">
          <a href="#home" className="text-xl font-bold text-foreground">
            <span className="text-primary">U</span>SMAN
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-sidebar-background transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-16">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
            <img
              src="https://jannat.dev/wp-content/themes/inbio/assets/images/logo/logo.png"
              alt="Usman Akram"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nav Items */}
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`flex items-center gap-3 text-lg font-medium ${
                activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              } transition-colors`}
            >
              <item.icon size={24} />
              {item.label}
            </button>
          ))}

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[280px] bg-sidebar-background border-r border-sidebar-border flex-col items-center py-10 z-50">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary mb-6">
            <img
              src="https://jannat.dev/wp-content/themes/inbio/assets/images/logo/logo.png"
              alt="Usman Akram"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-foreground">Usman Akram</h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 mb-auto w-full px-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                activeSection === item.href.slice(1)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <item.icon size={24} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3 mt-auto">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};
