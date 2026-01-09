import { 
  Globe, 
  Smartphone, 
  Server, 
  Database, 
  CreditCard, 
  Briefcase 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'Experienced in developing modern web applications using ASP.NET MVC, ASP.NET Core, Entity Framework, HTML5, CSS3, Bootstrap, and JavaScript. Building responsive and scalable solutions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Expert in cross-platform mobile development using .NET MAUI and Xamarin Forms. Creating native-quality apps for iOS and Android with shared codebase.',
  },
  {
    icon: Server,
    title: 'Web API Development',
    description: 'Skilled in designing and developing RESTful APIs using ASP.NET Core Web API. Creating secure, scalable, and well-documented API endpoints for various applications.',
  },
  {
    icon: Database,
    title: 'Database Design/Development',
    description: 'Proficient in SQL Server database design, optimization, and development. Creating efficient database structures, stored procedures, and data migration strategies.',
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway Integration',
    description: 'Experienced in integrating various payment gateways including Stripe, PayPal, and GoCardless. Implementing secure payment processing solutions for e-commerce platforms.',
  },
  {
    icon: Briefcase,
    title: 'Business Planning/Strategy',
    description: 'Providing technical consultation and business strategy for software projects. Helping businesses choose the right technology stack and development approach.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-subtitle">Features</span>
          <h2 className="section-title">What I Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="icon-box">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
