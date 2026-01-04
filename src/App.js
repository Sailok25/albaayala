import './App.css';
// Images
import miPorfoImage from './assets/images/mi-porfo.svg';
import albaayala from './assets/images/alba-ayala.jpg';
// Project Images
import contaPizzaImg from './assets/images/projects/Conta-Pizza.png';
import progitImg from './assets/images/projects/progit-2nd-edition-ca.png';
import danDanDishImg from './assets/images/projects/Dan-Dan-Dish.png';
import catarsisImg from './assets/images/projects/Catarsis.png';
import cdlsImg from './assets/images/projects/CDLS.png';
import ayalaToolsImg from './assets/images/projects/AyalaTools.png';
import velarieImg from './assets/images/projects/Velarie.png';
import cronoHubImg from './assets/images/projects/CronoHub.png';
// Certification Images
import claudeCert from './assets/images/certifications/claude-code-certificate.jpg';
// Components
import ExperienceItem from './components/ExperienceItem';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import CertificationCard from './components/CertificationCard';
// Contexts
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const experiences = [
    {
      id: 1,
      role: "Especialista en Soporte al Jugador y Resolución de Tickets",
      company: "Elite Tokens",
      period: "ago. 2025 - actualmente",
      description: `Responsable de la gestión y resolución de tickets de soporte dentro de la plataforma. Me encargo de asistir a los usuarios, revisar evidencias, resolver disputas de partidos, coordinar decisiones del staff y asegurar una experiencia justa y fluida para los jugadores. Trabajo diariamente en inglés, desarrollando habilidades de comunicación, gestión de conflictos y atención al usuario.`,
      skills: ["Trabajo en equipo en remoto", "Atención al cliente", "Gestión de tickets", "Comunicación bilingüe (EN)", "Resolución de problemas", "Soporte al usuario"]
    },
    {
      id: 2,
      role: "Desarrolladora Frontend usando un CMS (Ebasnet)",
      company: "Dispromèdia - Agència Web",
      period: "ene. 2025 - jun. 2025",
      description: `Desarrollo y mantenimiento de páginas web utilizando el CMS Ebasnet. Implementación de diseños responsivos, optimización SEO, edición de imágenes y colaboración en equipo para la creación de proyectos web empresariales completos.`,
      skills: ["Ebasnet", "Tailwind", "JavaScript", "HTML5", "CSS/SCSS", "SEO", "Desarrollo web", "Gestión de proyectos", "Trabajo en equipo", "Edición de imágenes"]
    },
    {
      id: 3,
      role: "Técnica en Reparación de Hardware IT",
      company: "Studi-Web S.C.P.",
      period: "nov. 2022 - feb. 2023",
      description: `Reparación y mantenimiento de equipos informáticos. Diagnóstico de problemas de hardware, montaje de componentes, cableado estructurado y atención al cliente tanto presencial como telefónica.`,
      skills: ["Hardware", "Reparación", "Diagnóstico", "Montaje de equipos", "Cableado estructurado", "Mantenimiento informático", "Atención al cliente", "Ventas"]
    },
  ];

  const projects = [
    {
      id: 1,
      title: "ContaPizza",
      description: "Aplicación Flutter con Firebase para el móvil, fue creada para gestionar los turnos familiares de preparación de la base de la pizza los sábados.",
      technologies: ["Dart", "Flutter", "Android", "Firebase"],
      repoUrl: "https://github.com/Sailok25/Conta-Pizza",
      image: contaPizzaImg
    },
    {
      id: 2,
      title: "ProGit (2ª Edición) - Versión Catalana",
      description: "Traducción del libro 'Pro Git' (2ª edición) al catalán. Un proyecto de contribución open-source que hace la documentación de Git accesible a la comunidad catalanohablante",
      technologies: ["Git", "Markdown", "Ruby"],
      repoUrl: "https://github.com/Sailok25/progit2-ca",
      demoUrl: "https://github.com/Sailok25/progit2-ca",
      image: progitImg
    },
    {
      id: 3,
      title: "DanDanDish",
      description: "Inspirado en el popular piedra-papel-tijera, ahora con temática de combate, es un juego popular infantil. Desarrollado con JS, puedes jugar contra la CPU. Está traducido a varios idiomas.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      repoUrl: "https://github.com/Sailok25/dan_dan_dish",
      demoUrl: "https://sailok25.github.io/dan-dan-dish/",
      image: danDanDishImg
    },
    {
      id: 4,
      title: "Catarsis",
      description: "Sitio web oficial de la banda Catarsis de Badajoz, fue uno de mis primeros proyectos web profesionales como desarrollador Frontend.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      repoUrl: "https://github.com/Sailok25/Catarsis",
      demoUrl: "https://sailok25.github.io/Catarsis/",
      image: catarsisImg
    },
    {
      id: 5,
      title: "Canción de la Semana",
      description: "Archivo musical personal desde 2021 donde registro semanalmente esa canción que se repite en mi cabeza, sin filtros de género o popularidad.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      repoUrl: "https://github.com/Sailok25/Cdls",
      demoUrl: "https://sailok25.github.io/Cdls/",
      image: cdlsImg
    },
    {
      id: 6,
      title: "AyalaTools",
      description: "Colección de herramientas web gratuitas desarrolladas por mí para facilitar tareas comunes.",
      technologies: ["HTML5", "Tailwinds", "React"],
      repoUrl: "https://github.com/Sailok25/AyalaTools",
      demoUrl: "https://ayalatools.vercel.app/",
      image: ayalaToolsImg
    },
    {
      id: 7,
      title: "Velarie - Tienda Online",
      description: "Tienda online ficticia creada como proyecto de práctica para simular un entorno de e-commerce completo.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      repoUrl: "https://github.com/Sailok25/Velarie",
      demoUrl: "https://sailok25.github.io/Velarie/",
      image: velarieImg
    },
    {
      id: 8,
      title: "CronoHub",
      description: "Aplicación web para gestionar y organizar tareas diarias, ayudando a mejorar la productividad personal.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      repoUrl: "https://github.com/Sailok25/CronoHub",
      demoUrl: "https://sailok25.github.io/CronoHub/",
      image: cronoHubImg
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Claude Code in Action",
      issuer: "Anthropic",
      date: "2025",
      photoUrl: claudeCert
    },
  ];

  return (
        <div className="App min-h-screen relative overflow-hidden bg-white">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10">
            <Navigation />
            <header id="home" className="min-h-screen flex flex-col justify-center items-center px-4 py-8 md:py-12 relative overflow-hidden">
              <div className="max-w-[100rem] mx-auto w-full relative h-full">

                {/* "Hola, soy" */}
                <div className="text-center md:text-left">
                  <p className="text-3xl sm:text-4xl md:text-7xl text-gray-900 mb-2 md:mb-4 font-bryndan tracking-wider md:pl-[15rem]">
                    Hola, soy
                  </p>
                </div>

                {/* NOMBRE PRINCIPAL */}
                <div className="mb-4 md:mb-6">
                  <h1 className="text-5xl sm:text-6xl md:text-10xl lg:text-12xl font-uhbee text-gray-900 leading-tight md:leading-none text-center tracking-tight px-2 md:px-4">
                    ALBA<br className="md:hidden" /> AYALA
                  </h1>
                </div>

                {/* TÍTULO */}
                <div className="text-center md:text-right mb-6 md:mb-8">
                  <p className="text-2xl sm:text-3xl md:text-6xl text-gray-900 font-bryndan font-light tracking-wider md:pr-0">
                    Desarrolladora<br className="sm:hidden" /> Frontend
                  </p>
                </div>

                {/* BOTONES DE REDES SOCIALES - AQUÍ VAN LOS 3 BOTONES */}
                <div className="flex justify-center md:justify-end items-center gap-4 md:gap-6 mb-12 md:mb-16 flex-wrap">
                  {/* Botón de GitHub */}
                  <a
                    href="https://github.com/Sailok25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 md:gap-3 bg-white text-gray-900 border-2 border-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="hidden sm:inline">GITHUB</span>
                    <span className="sm:hidden">Git</span>
                  </a>

                  {/* Botón de LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/alba-ayala-vilanova-26ba1517a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 md:gap-3 bg-white text-gray-900 border-2 border-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="hidden sm:inline">LINKEDIN</span>
                    <span className="sm:hidden">In</span>
                  </a>

                  {/* Botón de Correo */}
                  <a
                    href="mailto:albaayvi4@gmail.com"
                    className="inline-flex items-center gap-2 md:gap-3 bg-white text-gray-900 border-2 border-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="hidden sm:inline">CORREO</span>
                    <span className="sm:hidden">Mail</span>
                  </a>
                </div>

                {/* IMAGEN */}
                <div className="relative md:absolute left-0 md:left-4 bottom-0 md:bottom-[-155px] z-20 w-full md:w-auto flex justify-center md:block">
                  <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px] mt-8 md:mt-0">
                    <img
                      src={miPorfoImage}
                      alt="Dibujo a mano representando a Alba Ayala"
                      className="w-full h-auto object-contain opacity-95 filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* FLECHA */}
                <div className="mt-20 md:mt-30 w-full flex justify-center">
                  <a
                    href="#about"
                    className="animate-bounce w-12 h-16 md:w-20 md:h-35 rounded-[30px] md:rounded-[50px] border-2 md:border-[3px] border-gray-900 flex items-center justify-center p-2 md:p-3 bg-white/80 backdrop-blur-sm hover:bg-gray-900 hover:text-white transition-colors"
                    aria-label="Ir a la siguiente sección"
                  >
                    <svg
                      className="w-6 h-12 md:w-12 md:h-25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 48"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v40m0 0l6-6m-6 6l-6-6" />
                    </svg>
                  </a>
                </div>

              </div>
            </header>

            <section id="about" className="py-20 md:py-32 px-4 md:px-8 relative bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-uhbee text-center mb-12 md:mb-20 text-gray-900 tracking-tight">
                  ACERCA DE MÍ
                </h2>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

                  <div className="lg:w-3/5">
                    <div className="space-y-6">
                      <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
                        Soy <span className="font-semibold text-gray-900">Alba</span>, tengo <span className="font-semibold text-gray-900">21 años</span>, y soy desarrolladora Frontend. Combinando formación técnica (<span className="font-semibold text-gray-900">SMX y DAM</span>) con una pasión innata por el diseño, me he especializado en crear proyectos digitales que sean intuitivos, accesibles para todos y visualmente atractivos.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-3"></div>
                          <p className="text-gray-700 text-lg">Especializada en <span className="font-semibold">Frontend y Ticket Resolution</span></p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-3"></div>
                          <p className="text-gray-700 text-lg">Constantemente aprendiendo <span className="font-semibold">cosas nuevas</span></p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-3"></div>
                          <p className="text-gray-700 text-lg">Responsable y colaborativa en <span className="font-semibold">trabajo en equipo</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 md:mt-10">
                      <a
                        href="/assets/files/CV-Alba_Ayala.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        DESCARGAR CV
                      </a>
                    </div>
                  </div>

                  <div className="lg:w-2/5 flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="relative w-[24rem] h-[30rem] overflow-hidden rounded-[2rem] border-4 border-gray-900 shadow-2xl">
                        <img
                          src={albaayala}
                          alt="Alba Ayala"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="experience" className="py-20 md:py-32 px-4 md:px-8 bg-gray-50/50 relative">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-uhbee text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
                  EXPERIENCIA
                </h2>
                <div className="space-y-8 md:space-y-12">
                  {experiences.map((exp) => (
                    <ExperienceItem key={exp.id} experience={exp} />
                  ))}
                </div>
              </div>
            </section>

            <section id="projects" className="py-20 md:py-32 px-4 md:px-8 bg-white/50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-uhbee text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
                  PROYECTOS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </section>

            <section id="certifications" className="py-20 md:py-32 px-4 md:px-8 bg-gray-50/50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-uhbee text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
                  CERTIFICADOS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certifications.map((cert) => (
                    <CertificationCard key={cert.id} certification={cert} />
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-white/50">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-uhbee text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
                  CONTACTO
                </h2>

                <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                    ¿Trabajamos juntos en un proyecto, o tiens una sugerencia para uno?
                  </h3>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Tu nombre</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Correo electrónico</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                          placeholder="ejemplo@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Mensaje</label>
                      <textarea
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                        placeholder="Hola, vi tu portafolio y me gustaría colaborar en un proyecto contigo, contáctame para más detalles. ¡Espero tu respuesta pronto!"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-black w-full py-4 text-lg font-semibold rounded-lg hover:scale-[1.02] transition-transform"
                    >
                      ENVIAR
                    </button>
                  </form>
                </div>
              </div>
            </section>

            <footer className="py-8 px-4 border-t border-gray-200 bg-white">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-600 font-ui">
                  © {new Date().getFullYear()} Alba Ayala. Todos los derechos reservados.
                </p>
              </div>
            </footer>
          </div>
        </div>
  );
}

export default App;