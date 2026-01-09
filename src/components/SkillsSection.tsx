import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Web Development',
    skills: [
      { name: 'ASP .NET MVC', level: 100 },
      { name: 'ASP .NET Core', level: 100 },
      { name: 'Web API Development', level: 95 },
      { name: 'Third Party API Integration', level: 90 },
      { name: 'HTML 5', level: 100 },
      { name: 'CSS 3', level: 85 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Entity Framework', level: 100 },
      { name: 'Telerik & Kendo UI ASP .NET Core', level: 90 },
      { name: 'REST API Development', level: 90 },
      { name: 'WPF C#', level: 85 },
      { name: 'IIS Web Deployment', level: 100 },
      { name: 'Azure Web Deployment', level: 100 },
    ],
  },
  {
    title: 'Mobile App Development',
    skills: [
      { name: '.NET MAUI (Multi-platform App UI)', level: 100 },
      { name: 'Xamarin Forms', level: 95 },
      { name: 'XAML', level: 80 },
      { name: 'MVVM Pattern', level: 90 },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C#', level: 100 },
      { name: 'SQL', level: 100 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Azure DevOps', level: 95 },
      { name: 'CI/CD Pipelines', level: 90 },
      { name: 'Git Version Control', level: 100 },
      { name: 'Microsoft Azure', level: 90 },
    ],
  },
];

const SkillBar = ({ name, level, isVisible }: { name: string; level: number; isVisible: boolean }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: isVisible ? `${level}%` : '0%',
          }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-card" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-subtitle">My Talent</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-foreground mb-8 pb-4 border-b border-border">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  isVisible={isVisible}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
