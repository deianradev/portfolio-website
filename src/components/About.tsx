import { Code2, Layout, Sparkles } from 'lucide-react';

export function About() {
  const yearsOfExperience = new Date().getFullYear() - 2009;
  
  return (
    <section id="about" className="py-24 bg-primary-900/50 relative overflow-hidden border-b border-primary-700/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-gray-300 space-y-8 pb-12">
          <div className="text-center mb-12">
            <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink">
              {yearsOfExperience}+
            </span>
            <p className="text-lg mt-2 text-gray-400">Years of Development Experience</p>
          </div>

          <p className="text-lg leading-relaxed">
            I'm a passionate Frontend Developer with expertise in crafting exceptional web experiences. Specializing in Angular and React, I transform complex requirements into elegant, user-friendly solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="flex flex-col items-center space-y-3 p-6 bg-primary-800/50 rounded-xl border border-primary-700/50">
              <Layout className="text-accent-cyan w-8 h-8" />
              <h3 className="text-white font-semibold">UI Architecture</h3>
              <p className="text-center text-sm">Building scalable, responsive interfaces</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-primary-800/50 rounded-xl border border-primary-700/50">
              <Code2 className="text-accent-purple w-8 h-8" />
              <h3 className="text-white font-semibold">Clean Code</h3>
              <p className="text-center text-sm">Writing maintainable, efficient solutions</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-primary-800/50 rounded-xl border border-primary-700/50">
              <Sparkles className="text-accent-pink w-8 h-8" />
              <h3 className="text-white font-semibold">Performance</h3>
              <p className="text-center text-sm">Optimizing for speed and efficiency</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            My approach combines technical excellence with a keen eye for design, ensuring that every project not only functions flawlessly but also delivers an outstanding user experience. From interactive dashboards to complex web applications, I focus on creating solutions that are both beautiful and performant.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent"></div>
    </section>
  );
} 