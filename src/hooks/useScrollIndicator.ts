import { useState, useEffect } from 'react';

export function useScrollIndicator() {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setIsScrolling(true);
    
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });

    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Match this with the CSS transition duration
  };

  return { isScrolling, scrollToSection };
}