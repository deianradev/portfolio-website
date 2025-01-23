import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart management and payment integration.",
      tech: ["Angular", "TypeScript", "RxJS", "NgRx", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/deianrader/ecommerce",
      demo: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management System",
      description: "Team collaboration tool with real-time updates and task tracking capabilities.",
      tech: ["Angular", "Firebase", "Material UI", "Chart.js"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/deianrader/taskmanager",
      demo: "https://task-manager-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring with interactive maps and forecasting.",
      tech: ["Angular", "TypeScript", "OpenWeather API", "D3.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/deianrader/weather",
      demo: "https://weather-demo.com"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Featured Projects
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-primary-900/80 rounded-xl overflow-hidden shadow-xl border border-primary-700/50 transition-all duration-300 hover:border-accent-cyan/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-800 text-accent-cyan rounded-full text-sm font-medium border border-primary-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-cyan transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-cyan transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}