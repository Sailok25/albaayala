import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "SOBRE MI" },
  { id: "experience", label: "EXPERIENCIA" },
  { id: "projects", label: "PROYECTOS" },
  { id: "certifications", label: "CERTIFICADOS" },
  { id: "contact", label: "CONTACTO" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAV DESKTOP */}
      <nav className="hidden md:flex fixed top-10 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-10 px-12 py-4 rounded-full border-2 border-gray-900 dark:border-white bg-white/80 dark:bg-black/80 backdrop-blur-md">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`
                text-base tracking-widest transition-all duration-300
                ${activeSection === section.id
                  ? "font-bold text-gray-900 dark:text-white"
                  : "font-light text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }
              `}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      {/* BOTÓN HAMBURGUESA (MÓVIL) */}
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden fixed top-6 right-6 z-50 w-12 h-12 rounded-full border-2 border-gray-900 dark:border-white bg-white/80 dark:bg-black/80 backdrop-blur-md flex items-center justify-center text-gray-900 dark:text-white"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      )}

      {/* OVERLAY + MENÚ MÓVIL */}
      {menuOpen && (
        <div className="fixed inset-0 z-40">
          {/* BLUR DE FONDO */}
          <div
            className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          />

          {/* MENÚ CENTRADO */}
          <div className="relative z-50 h-full flex flex-col items-center justify-center gap-10">
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl font-bold z-50 text-gray-900 dark:text-white"
              aria-label="Cerrar menú"
            >
              ✕
            </button>

            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`
                  text-2xl tracking-widest transition-all duration-300
                  ${activeSection === section.id
                    ? "font-bold text-gray-900 dark:text-white"
                    : "font-light text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }
                `}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}