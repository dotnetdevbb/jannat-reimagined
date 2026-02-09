import { Sidebar } from '@/components/Sidebar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:ml-[280px]">
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
