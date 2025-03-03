import ecommerceSample from '../assets/ecommerce-sample.png';
import todoSample from '../assets/todos-sample.png';
import weatherSample from '../assets/weather-dashboard-sample.png';

export const SampleWork = () => {
  const projects = [
    {
      id: 'plant-shop',
      title: 'Plant Shop E-commerce',
      description: 'A modern e-commerce platform for indoor and outdoor plants, featuring a shopping cart, product filtering, and product details page.',
      image: ecommerceSample,
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://ecommerce-store-sample.netlify.app/',
      githubUrl: 'https://github.com/yourusername/plant-shop',
    },
    {
      id: 'task-manager',
      title: 'Task Manager App',
      description: 'A demonstration of CRUD operations using the DummyJSON Todos API. Built with Angular Material.',
      image: todoSample,
      technologies: ['Angular', 'Angular Material', 'Tailwind CSS'],
      demoUrl: 'https://todo-sample-dmr.netlify.app/',
      githubUrl: 'https://github.com/deianradev/todo-sample',
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard providing real-time weather data, astro data, and current weather conditions.',
      image: weatherSample,
      technologies: ['Angular', 'OpenWeather API', 'CSS'],
      demoUrl: 'https://weather-dashboard-sample-dmr.netlify.app/',
      githubUrl: 'https://github.com/deianradev/weather-dashboard',
    }
  ];

  return (
    <section id="sample-work" className="relative py-20 bg-primary-900">
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Sample Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary-800/50 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error(`Failed to load image for ${project.title}:`, target.src);
                    target.onerror = null;
                    target.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log(`Successfully loaded image for ${project.title}`);
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary-700/50 text-accent-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-md bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/30 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-md bg-primary-700/50 text-white hover:bg-primary-700/70 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 