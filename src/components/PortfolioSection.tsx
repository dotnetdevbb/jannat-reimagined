import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NFT Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
  },
  {
    title: 'Online Food Delivery App',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    title: 'Healthcare Management',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    title: 'Payment Gateway System',
    category: 'API Integration',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-subtitle">Visit My Portfolio</span>
          <h2 className="section-title">My Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="project-overlay">
                <span className="text-primary text-sm uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <button className="flex items-center gap-2 text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-lg transition-all duration-300 w-fit">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
