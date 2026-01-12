import { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { link } from 'fs';

type TabType = 'experience' | 'education' | 'certifications' | 'skills';

const experiences = [
  {
    title: 'Senior Mobile Application Developer',
    company: 'TOTAL FITNESS HEALTH CLUBS LIMITED, Wilmslow, Manchester',
    location: 'Manchester - UK',
    type: 'Contract',
    links:[],
    description: 'Dynamic and results-oriented Xamarin-based Mobile Developer with a proven track record of spearheading the development, enhancement, and maintenance of cutting-edge mobile applications. Adept at collaborating with cross-functional teams to translate business requirements into innovative technical solutions.',
      highlights: [
    'Develop new features and functionalities for Xamarin-based mobile applications, following best practices and design principles.',
    'Identify and resolve bugs and issues in the existing codebase, conducting thorough testing to ensure optimal performance and reliability.',
    'Manage the deployment process, including app distribution and release management across various platforms such as Google Play Store and Apple App Store.',
    'Collaborate with backend developers to integrate APIs and ensure seamless communication between the mobile app and server-side components.',
    'Investigate and address technical issues reported by users or discovered during internal testing, providing timely resolutions.',
    'Migration of Xamarin projects to .NET MAUI.',
    'Collaboration: Work closely with designers, product managers, and other stakeholders to translate requirements into technical specifications and deliverables.',
    'Embrace Agile development practices, participating in sprint planning, daily stand-ups, and retrospective meetings to drive continuous improvement and delivery.',
    'CI/CD Implement and maintain continuous integration and continuous deployment pipelines, automating build, test, and deployment processes for efficiency and consistency.'
  ],
    skills: ['Xamarin Mobile Apps', '.NET MAUI', 'Xamarin to MAUI Migration', 'API Development', 'Azure DevOps Services', 'CI/CD Pipelines', 'iOS Development', 'Android Development'],
  },
  {
    title: 'Web Application Developer',
    company: 'MANvFAT (Thrive Tribe)',
    location: 'London - UK',
    type: 'Full-time',
    links:[
      'https://manvfatfootball.org',
      'https://manvfatchallenge.com',
    ],
    description: 'MAN v FAT Football is a unique network of weight loss football clubs across the UK. Developed Web Application as .NET Full Stack Developer using various technologies.',
   highlights: [
  'Developed full-stack web and mobile applications.',
  'Integrated Stripe, GoCardless, and PayPal payment gateways.',
  'Implemented automated emails with Mandrill and Mailchimp.',
  'Built .NET MAUI mobile app consuming Web APIs.',
  'Created interactive web portals for members.',
  'Tracked user behavior with Google Analytics & Tag Manager.',
  'Managed Azure DevOps pipelines and deployments.',
  'Led team and coordinated project planning.'
],
    skills: [
    'ASP.NET C# MVC',
    'Entity Framework',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap 5',
    '.NET MAUI',
    'Stripe API',
    'GoCardless API',
    'PayPal API',
    'Mandrill API',
    'Mailchimp API',
    'Web API Development',
    'Google Analytics',
    'Google Tag Manager',
    'Azure DevOps',
    'CI/CD',
    'Project Planning',
    'Team Leadership'
  ],
  },
  {
  title: 'Analyst & Programmer (.NET Full Stack Developer)',
  company: 'PACE Software Development Ltd',
  location: 'Sheffield - UK',
  type: 'Full-Time',
  links: ['https://www.pacecomputers.co.uk'],
  description: 'Worked on multiple projects as a .NET Full Stack Developer, building web and mobile applications, performing software conversions, database development, and providing post-completion support for enterprise applications.',
  highlights: [
    'Developed full-stack web and mobile applications using .NET technologies.',
    'Converted legacy ASP Classic and VB applications to modern .NET C# solutions.',
    'Designed and developed databases using Microsoft SQL Server and MySQL.',
    'Integrated REST APIs and third-party services for various applications.',
    'Set up Azure DevOps, Virtual Machines, App Services, and deployment pipelines.',
    'Worked in Agile teams, participating in planning, client meetings, and reporting.',
    'Troubleshot and debugged applications, ensuring optimal performance.',
    'Provided post-completion support and data analysis for clients.'
  ],
  skills: [
    'ASP.NET C# MVC',
    'ASP.NET Core',
    'Xamarin Mobile Apps',
    'Entity Framework',
    'SQL Server & MySQL',
    'HTML5, CSS3, JavaScript, TypeScript',
    'Bootstrap 4 & 5',
    'REST API Development',
    'Third-Party API Integration',
    'Azure DevOps',
    'IIS Deployment',
    'Agile Methodologies',
    'Data Analysis & Reporting',
    'TFS & Git',
    'Enterprise Application Development',
    'Legacy Software Conversion',
    'Troubleshooting & Debugging',
    'Project Planning & Lifecycle Management'
  ]
} ,
{
  title: 'Web/Mobile App Developer',
  company: 'myHRPartner',
  location: 'London - UK',
  type: 'Full-Time',
  links: ['https://www.linkedin.com/company/myhrpartner-limited'],
  description: 'Developed web and mobile applications for HR management using .NET technologies. Built scalable back-end systems and interactive front-end features, ensuring seamless integration with mobile apps.',
  highlights: [
    'Developed full-stack web applications using ASP.NET C# MVC.',
    'Designed and developed databases with Microsoft SQL Server and Entity Framework.',
    'Built RESTful Web APIs consumed by mobile applications.',
    'Developed mobile applications using .NET MAUI.',
    'Implemented interactive front-end features using HTML5, CSS3, JavaScript, jQuery UI, and Bootstrap 5.',
    'Ensured seamless integration between web portals and mobile apps.'
  ],
  skills: [
    'ASP.NET C# MVC',
    'Entity Framework',
    'SQL Server',
    'HTML5, CSS3, JavaScript',
    'jQuery UI',
    'Bootstrap 5',
    '.NET MAUI',
    'Web API Development',
    'Web & Mobile Integration'
  ]
},

  {
  title: 'Desktop/Kiosk Application Developer',
  company: 'FaceBox Photobooth',
  location: 'London - UK',
  type: 'Contract / Full-Time',
  links: ['https://pcode.uk'],
  description: 'Developed a Photobooth application using WPF C# with integrated backend and web systems. Built a kiosk software to capture photos, store locally, and sync with central servers, including integration with government APIs for passport applications.',
  highlights: [
    'Developed kiosk Photobooth software in WPF C# for capturing and uploading photos.',
    'Built backend and front-end web applications using ASP.NET Core.',
    'Integrated HMPO (GOV UK) API for online passport applications.',
    'Designed and managed Microsoft SQL Server databases and local SQLite storage.',
    'Implemented Windows Services and Task Scheduler for automated processes.',
    'Developed APIs to send offline images from kiosk machines to central server.'
  ],
  skills: [
    'WPF C#',
    'ASP.NET Core',
    'Web API Development',
    'SQL Server',
    'SQLite',
    'Windows Services',
    'Task Scheduler Integration',
    'API Integration',
    'Desktop & Kiosk Application Development'
  ]
} ,
];

const education = [
  {
    degree: 'Master of Science, Computer and Network Engineering',
    institution: 'Sheffield Hallam University (Sheffield - England)',
    year: '2011',
    link:'https://www.shu.ac.uk/',
    description: 'Focused on Software Engineering and Distributed Systems, with an emphasis on scalable web application architectures. Completed a thesis on designing and implementing high-performance, distributed web applications.',
  },
  {
    degree: 'Bachelor of Science, Telecommunication and Networking',
    institution: 'Comsats University (Abbottabad - Pakistan)',
    year: '2009',
    link:'https://www.cuiatd.edu.pk',
    description: 'Specialized in Telecommunication, Networking, and Software Development, with hands-on experience in database design and network system management. Graduated with distinction, demonstrating strong technical and analytical skills.',
  },
{
    degree: 'Higher Secondary School Certificate (GCSE), Information Computer Sciences',
    institution: 'GIFT Collage (Gujranwala -Pakistan )',
    year: '2005',
    link:'https://www.gift.edu.pk',
    description: 'Completed advanced coursework in Information and Computer Sciences, building a strong foundation in programming, databases, and computer systems, preparing for higher education in engineering and technology.',
  },
  {
    degree: 'Secondary School Certificate (Science), English, Math, Science & Computer',
    institution: 'Aizar High School (Gujranwala - Pakistan)',
    year: '2003',
    link:'https://www.facebook.com/AizarHighSchool',
    description: 'Completed foundational studies in Science, Mathematics, English, and Computer Studies, developing strong analytical and problem-solving skills that laid the groundwork for higher education in engineering and technology. ',
  },


 

];

const certifications = [
  {
    code :'MCPD(70-519)',
    title: 'Microsoft Certified Professional Developer',
    link: 'https://learn.microsoft.com/en-gb/users/usman-akram-thedeveloper/transcript/drpwxskz8lnqw',
    description: 'Demonstrates proficiency in developing web applications using Microsoft technologies, covering full-stack .NET development.',
  },
  {
    code :'MCTS(E130-9256)',
    title: 'Microsoft Certified Technology Specialist',
    link: 'https://learn.microsoft.com/en-gb/users/usman-akram-thedeveloper/transcript/drpwxskz8lnqww',
    description: 'Validates expertise in developing and maintaining .NET Framework applications with best practices and standards.',
  },
  {code :'MCP(E924-0957)',
    title: 'Microsoft Certified Professional',
    link: 'https://learn.microsoft.com/en-gb/users/usman-akram-thedeveloper/transcript/drpwxskz8lnqwwz',
    description: 'Certification in designing, building, testing, and maintaining cloud and enterprise applications on Microsoft Azure.',
  },
  {code :'MCTS(D674-2229)',
    title: 'Microsoft® Certified Technology Specialist',
    link: 'https://learn.microsoft.com/en-gb/users/usman-akram-thedeveloper/transcript/drpwxskz8lnqwwz',
    description: 'Demonstrates expertise in building .NET Framework 4 applications focusing on data access, including database integration and optimization.',
  },
  {code :'MCTS (D579-2967)',
    title: 'Microsoft® Certified Technology Specialist',
    link: 'https://learn.microsoft.com/en-gb/users/usman-akram-thedeveloper/transcript/drpwxskz8lnqwwz',
    description: 'Validates proficiency in developing .NET Framework 4 web applications, including ASP.NET MVC, Web API, and front-end integration.',
  },
];

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
      { name: 'Telerik & Kendo UI MAUI', level: 85 },
      

    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MICROSOFT SQL SERVER', level: 100 },
      { name: 'MY SQL ', level: 80 },
      { name: 'SQL LITE', level: 85 },
      { name: 'MONGODB', level: 60 },
      { name: 'Firebase Realtime Database', level: 65 },
      { name: 'Google Cloud database', level: 70 },
      
      
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C#', level: 100 },
      { name: 'PYTHON', level: 80 },
      { name: 'Bash Scripting', level: 70 },
      { name: 'POWERSHELL', level: 85 },
      { name: 'SQL/T-SQL', level: 100 },

    ],
  },
  
   {
    title: 'Client Side Tech',
    skills: [
      { name: 'JavaScript/JQuery', level: 100 },
      { name: 'JQuery UI ', level: 90 },
      { name: 'Ajax', level: 95 }, 
      
      
    ],
  },
  
  {
    title: 'Graphic Designing',
    skills: [
      { name: 'PHOTOSHOP', level: 100 },
      { name: 'PHOTOPEA ', level: 80 },
      { name: 'VIDEO EDITING', level: 60 }, 
      
      
    ],
  },
  
  {
    title: 'Management Skills',
    skills: [
      { name: 'Project Planning', level: 100 },
      { name: 'Project Functional Requirement Documentation ', level: 95 },
      { name: 'Project Management', level: 95 }, 
      {name:'Azure DevOps', level:90},
      {name:'Git repository Management', level:80},
      {name:'Github',level:90},
      { name:'Agile Development', level:100},
      {name:'Content Management System (CMS)', level:75},
      {name:'Team Leader', level:100},
      {name:'Post-Completion Support', level:100},
      { name:'Agile Development', level:100},
    ],
  },
{
    title: 'Analysis, Testing and Reporting',
    skills: [
      { name: 'google Analytics', level: 90 },
      { name: 'Data Analysis ', level: 100 },
      { name: 'Azure Service Monitoring', level: 85 }, 
      {name:'Azure DevOps', level:90},
      {name:'Git repository Management', level:80},
      {name:'Page Optimization',level:85},
      { name:'Debiging/Unit Tetsing', level:90},
      {name:'Crystal Reports', level:70},
      {name:'kendo UI Reporting', level:95},
      {name:'Custom Reporting ', level:100},
      {name:'Cloud Computing ', level:75},
    ],
  },
  {
    title: 'Third Party Tools',
    skills: [
      { name: 'Text Magic (Bulk SMS Marketing) API Integration', level: 100 },
      { name: 'Stripe API INtigration ', level: 100 },
      { name: 'GoCardless API Integration', level: 95 }, 
      {name:'Paypal API Integration', level:90},
      {name:'Mandrill and Mailchimp API Integration for Emails', level:100},
      
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

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === 'skills') {
      setSkillsVisible(true);
    }
  }, [activeTab]);

  const tabs = [
    { id: 'experience' as TabType, label: 'Experience', icon: Briefcase },
    { id: 'skills' as TabType, label: 'Professional Skills', icon: Code },
    { id: 'education' as TabType, label: 'Education', icon: GraduationCap },
    { id: 'certifications' as TabType, label: 'Certifications', icon: Award },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-subtitle">10+ Years of Experience</span>
          <h2 className="section-title">My Resume</h2>
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
                    {exp.links && exp.links.length > 0 && (
        <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground text-sm">
          {exp.links.map((point, i) => (
            <li key={i}>
              <a href={point} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline cursor-pointer">
                {point}
              </a>
            </li>
          ))}
        </ul>
      )}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    {/* Highlights List */}
      {exp.highlights && exp.highlights.length > 0 && (
        <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground text-sm">
          {exp.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
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
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-primary font-medium mb-4 hover:underline cursor-pointer inline-block">{edu.link}</a>
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
                    {cert.code}
                  </h3>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors mb-3"
                    >
                      View Certificate
                    </a>
                  )} 
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-2xl font-semibold text-foreground mb-8 pb-4 border-b border-border">
                    {category.title}
                  </h3>
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      isVisible={skillsVisible}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
