import { Github, Linkedin, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-primary-800/50 border-t border-primary-700/50">
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="text-center sm:text-left space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Deian Radev</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Frontend Developer specializing in creating beautiful, performant web applications
            </p>
            <p className="text-gray-400 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
              <MapPin size={16} className="text-accent-purple" />
              Northern Virginia Area
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-400 hover:text-accent-cyan transition-colors text-sm sm:text-base">Home</a>
              <a href="#about" className="text-gray-400 hover:text-accent-cyan transition-colors text-sm sm:text-base">About</a>
              <a href="#experience" className="text-gray-400 hover:text-accent-cyan transition-colors text-sm sm:text-base">Experience</a>
              <a href="#sample-work" className="text-gray-400 hover:text-accent-cyan transition-colors text-sm sm:text-base">Sample Work</a>
              <a 
                href="https://docs.google.com/document/d/1cGflsNbM7useAucWQay3eu_wEub9jj71pMHM5a9l-RY/edit?usp=sharing"
                className="text-gray-400 hover:text-accent-cyan transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center sm:text-left space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Connect</h3>
            <div className="flex items-center justify-center sm:justify-start gap-6">
              <a 
                href="https://github.com/deianradev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 sm:p-4 rounded-full bg-primary-700/50 text-gray-400 
                              group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan 
                              transition-all duration-300">
                  <Github size={20} />
                </div>
              </a>
              <a 
                href="https://linkedin.com/in/deianradev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 sm:p-4 rounded-full bg-primary-700/50 text-gray-400 
                              group-hover:bg-accent-purple/10 group-hover:text-accent-purple 
                              transition-all duration-300">
                  <Linkedin size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Deian Radev. All rights reserved.</p>
            <p>Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 