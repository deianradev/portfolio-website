import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useScrollIndicator } from '../hooks/useScrollIndicator';
import { ScrollIndicator } from './ScrollIndicator';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolling, scrollToSection } = useScrollIndicator();

  return (
    <>
      <header className="fixed w-full bg-primary-900/90 backdrop-blur-sm z-50 border-b border-primary-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }} 
              href="#home" 
              className="hover:opacity-80 transition-opacity"
            >
              <Logo />
            </a>
            
            <nav className="hidden md:flex space-x-8">
              <NavLinks scrollToSection={scrollToSection} />
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/deianradev" className="text-gray-400 hover:text-accent-cyan transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/deianradev" className="text-gray-400 hover:text-accent-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-primary-800 border-t border-primary-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLinks mobile scrollToSection={scrollToSection} />
            </div>
          </div>
        )}
      </header>
      <ScrollIndicator isScrolling={isScrolling} />
    </>
  );
}

function NavLinks({ mobile, scrollToSection }: { 
  mobile?: boolean;
  scrollToSection: (id: string) => void;
}) {
  const baseStyles = mobile
    ? "block px-3 py-2 text-base font-medium text-gray-300 hover:text-accent-cyan transition-colors"
    : "text-gray-300 hover:text-accent-cyan transition-colors";

  const links = [
    { href: "home", text: "Home" },
    { href: "about", text: "About" },
    { href: "experience", text: "Experience" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          className={baseStyles}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.href);
          }}
        >
          {link.text}
        </a>
      ))}
    </>
  );
}