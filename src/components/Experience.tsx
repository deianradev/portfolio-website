import { Layout, Code2, Building2, Server } from 'lucide-react';

const capabilities = [
  {
    id: "dashboards",
    icon: "Layout", // Lucide icon name
    title: "Interactive Dashboards",
    description: "Crafting responsive dashboards that work seamlessly across all devices",
    skills: ["Angular", "React", "Performance Optimization", "Mobile-First Design"],
    highlight: "40% faster load times in latest projects"
  },
  {
    id: "core-tech",
    icon: "Code2", // Lucide icon name
    title: "Core Technologies",
    description: "Strong foundation in modern web technologies",
    skills: ["TypeScript", "Modern JavaScript", "HTML5", "CSS3/SCSS"],
    highlight: "Building type-safe, maintainable applications"
  },
  {
    id: "architecture",
    icon: "Architecture", // Lucide icon name
    title: "Frontend Architecture",
    description: "Designing scalable frontend applications with best practices",
    skills: ["System Design", "Component Architecture", "State Management", "Testing"],
    highlight: "Reduced technical debt by 60% in previous projects"
  },
  {
    id: "backend",
    icon: "Server", // Lucide icon name
    title: "API Development",
    description: "Creating efficient backend services with Node.js",
    skills: ["Node.js", "RESTful APIs", "Express", "API Integration"],
    highlight: "Built APIs serving 100K+ daily requests"
  }
];

export function Experience() {
  const getIcon = (iconName: string) => {
    const icons = {
      Layout: Layout,
      Code2: Code2,
      Architecture: Building2,
      Server: Server
    };
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  return (
    <section id="experience" className="py-24 bg-primary-800/30 relative overflow-hidden">
      <div style={{ paddingBottom: '128px' }}>
        {/* Top decorative border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent"></div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Here's what I can do for you
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => (
              <div 
                key={capability.id}
                className="group relative bg-primary-800/80 rounded-xl p-8 border border-primary-700/50
                           hover:bg-primary-700/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 via-accent-purple/0 to-accent-pink/0 
                              opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-700/50 rounded-lg text-accent-cyan">
                    {getIcon(capability.icon)}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {capability.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {capability.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary-900/50 text-accent-cyan rounded-full 
                                   text-sm font-medium border border-primary-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-sm text-accent-purple font-medium">
                      {capability.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}