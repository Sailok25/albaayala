// components/Navigation.jsx
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'contact', label: 'CONTACT ME' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
          {/* LOGO/MARCA - Solo visible en scroll */}
          {isScrolled && (
            <div className="hidden md:block">
              <span className="font-uhbee text-xl text-gray-900">ALBA AYALA</span>
            </div>
          )}

          {/* MENÚ DE NAVEGACIÓN */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 text-sm md:text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:scale-105'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* BOTÓN CONTACTO - Solo en desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-outline-black px-6 py-2 text-sm font-semibold hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;