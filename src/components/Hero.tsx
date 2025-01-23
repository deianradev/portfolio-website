import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useScrollIndicator } from '../hooks/useScrollIndicator';

export function Hero() {
  const { scrollToSection } = useScrollIndicator();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-primary-900 text-white pt-16">
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Deian Radev</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-400 mb-8">
              Frontend Developer specializing in 
              <span className="relative inline-block ml-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink animate-gradient-x">
                  Angular and React
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink blur-3xl opacity-20 animate-pulse"></span>
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a 
                href="https://www.linkedin.com/in/deianradev/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Contact me on LinkedIn
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="/resume.pdf" 
                className="group border border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                download
              >
                Download CV
              </a>
            </div>

            <div className="flex justify-center space-x-6 mb-16">
              <a 
                href="https://github.com/deianradev" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-cyan transition-colors hover:scale-110 transform duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/deianradev" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-purple transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce inline-block text-accent-cyan hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}