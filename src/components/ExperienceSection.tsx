import { useState } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

type TabType = 'experience' | 'education' | 'certifications';

const experiences = [
  {
    title: 'Senior Mobile Application Developer',
    company: 'TOTAL FITNESS HEALTH CLUBS LIMITED',
    location: 'Wilmslow, Manchester - UK',
    type: 'Contract',
    description: 'Dynamic and results-oriented Xamarin-based Mobile Developer with a proven track record of spearheading the development, enhancement, and maintenance of cutting-edge mobile applications. Adept at collaborating with cross-functional teams to translate business requirements into innovative technical solutions.',
    skills: ['Xamarin Mobile Apps', '.NET MAUI', 'Xamarin to MAUI Migration', 'API Development', 'Azure DevOps Services', 'CI/CD Pipelines', 'iOS Development', 'Android Development'],
  },
  {
    title: 'Web Application Developer',
    company: 'MANvFAT (Thrive Tribe)',
    location: 'London - UK',
    type: 'Full-time',
    description: 'MAN v FAT Football is a unique network of weight loss football clubs across the UK. Developed Web Application as .NET Full Stack Developer using various technologies.',
    skills: ['ASP .NET C# MVC', 'Entity Framework', 'HTML5/CSS3/JavaScript', 'Stripe API', 'GoCardless API', 'PayPal API', '.NET MAUI', 'Azure DevOps'],
  },
  {
    title: 'Analyst & Programmer (.NET Full Stack Developer)',
    company: 'Private Healthcare Company',
    location: 'Manchester - UK',
    type: 'Full-time',
    description: 'Developed and maintained enterprise healthcare management systems. Led the technical architecture and implementation of critical business applications.',
    skills: ['ASP.NET Core', 'SQL Server', 'Entity Framework', 'Web API', 'Azure Services', 'Agile/Scrum'],
  },
  {
    title: 'Desktop/Kiosk Application Developer',
    company: 'Technology Solutions Ltd',
    location: 'UK',
    type: 'Full-time',
    description: 'Developed custom kiosk and desktop applications using WPF and .NET Framework. Created intuitive user interfaces for self-service terminals.',
    skills: ['WPF C#', '.NET Framework', 'SQL Server', 'MVVM Pattern', 'Hardware Integration'],
  },
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Manchester',
    year: '2015 - 2017',
    description: 'Specialized in Software Engineering and Distributed Systems. Completed thesis on scalable web application architectures.',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Punjab',
    year: '2011 - 2015',
    description: 'Focused on software development, database management, and network systems. Graduated with distinction.',
  },
];

const certifications = [
  {
    title: 'MCPD - Microsoft Certified Professional Developer',
    year: '2019',
    description: 'Web Developer certification demonstrating proficiency in developing web applications using Microsoft technologies.',
  },
  {
    title: 'MCTS - Microsoft Certified Technology Specialist',
    year: '2018',
    description: '.NET Framework certification validating expertise in developing and maintaining .NET applications.',
  },
  {
    title: 'Azure Developer Associate',
    year: '2021',
    description: 'Certification in designing, building, testing, and maintaining cloud applications on Microsoft Azure.',
  },
  {
    title: 'Xamarin Certified Mobile Developer',
    year: '2020',
    description: 'Demonstrates expertise in building cross-platform mobile applications using Xamarin.',
  },
];

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const tabs = [
    { id: 'experience' as TabType, label: 'Experience', icon: Briefcase },
    { id: 'education' as TabType, label: 'Education', icon: GraduationCap },
    { id: 'certifications' as TabType, label: 'Certifications', icon: Award },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-subtitle">My Resume</span>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-card-bg-light hover:text-foreground'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' && (
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="bg-card rounded-xl p-6 hover:bg-card-bg-light transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-primary font-medium mt-1 sm:mt-0">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-0">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="bg-card rounded-xl p-6 hover:bg-card-bg-light transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-primary font-medium mt-1 sm:mt-0">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-4">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="certification-badge"
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{cert.year}</p>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
