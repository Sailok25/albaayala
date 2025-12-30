import './App.css';
import miPorfoImage from './assets/images/mi-porfo.svg';
import contaPizzaImg from './assets/images/projects/Conta-Pizza.png';
import progitImg from './assets/images/projects/progit-2nd-edition-ca.png';
import danDanDishImg from './assets/images/projects/Dan-Dan-Dish.png';
import catarsisImg from './assets/images/projects/Catarsis.png';
import cdlsImg from './assets/images/projects/CDLS.png';
import albaayala from './assets/images/alba-ayala.jpg';
import ExperienceItem from './components/ExperienceItem';
import ProjectCard from './components/ProjectCard';

function App() {
  const experiences = [
    {
      id: 1,
      role: "Player Support & Ticket Resolution Specialist",
      company: "Elite Tokens",
      period: "ago. 2025 - actually",
      description: `Desc del puesto\nAptitudes`,
      skills: ["Soporte", "Resolución", "Comunicación"]
    },
    {
      id: 2,
      role: "Frontend Web Developer using a CMS (Ebasnet)",
      company: "Dispromedia",
      period: "ene. 2025 - jun. 2025",
      description: `Desc del puesto\nAptitudes`,
      skills: ["React", "CMS", "Tailwind", "JavaScript"]
    },
    {
      id: 3,
      role: "IT Hardware Repair Technician",
      company: "Studi-Web S.C.P.",
      period: "nov. 2022 - feb. 2023",
      description: `Desc del puesto\nAptitudes`,
      skills: ["Hardware", "Reparación", "Diagnóstico"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "ContaPizza",
      description: "Una app que gestiona el día que le toca hacer la pizza en casa a mis hermanos y a mí.",
      technologies: ["React", "Tailwind", "HTML5"],
      repoUrl: "#",
      demoUrl: "#",
      image: contaPizzaImg
    },
    {
      id: 2,
      title: "ProGit (2º Edition) - Catalan Version",
      description: "Traducción del libro 'Pro Git' (2ª edición) al catalán. Un proyecto de contribución open-source que hace la documentación de Git accesible a la comunidad catalanohablante",
      technologies: ["Git", "Markdown", "Ruby"],
      repoUrl: "https://github.com/Sailok25/progit2-ca",
      demoUrl: "https://github.com/Sailok25/progit2-ca",
      image: progitImg
    },
    {
      id: 3,
      title: "DanDanDish",
      description: "Descripción breve de DanDanDish...",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      repoUrl: "https://github.com/Sailok25/dan_dan_dish",
      demoUrl: "https://sailok25.github.io/dan-dan-dish/",
      image: danDanDishImg
    },
    {
      id: 4,
      title: "Catarsis",
      description: "Descripción breve de Catarsis...",
      technologies: ["HTML5", "CSS3", "JS"],
      repoUrl: "https://github.com/Sailok25/Catarsis",
      demoUrl: "https://sailok25.github.io/Catarsis/",
      image: catarsisImg
    },
    {
      id: 5,
      title: "Canción de la Semana",
      description: "Descripción de Canción de la Semana...",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      repoUrl: "https://github.com/Sailok25/Cdls",
      demoUrl: "https://sailok25.github.io/Cdls/",
      image: cdlsImg
    }
  ];

  const certifications = [
    { id: 1, name: "Claude Code in Action", issuer: "Anthropic", date: "2025", photoUrl: "assets/images/certifications/claude-code-certificate.jpg" },
  ];

// En App.js, antes del return
console.log('Imágenes cargadas:', {
  contaPizzaImg,
  progitImg,
  danDanDishImg,
  catarsisImg,
  cdlsImg
});

  return (
    <div className="App min-h-screen relative overflow-hidden bg-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <header id="home" className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative">
          <div className="max-w-[100rem] mx-auto w-full relative h-full">
            <p className="text-4xl md:text-7xl text-gray-900 mb-4 font-bryndan tracking-wider pl-4 md:pl-[15rem]">
              Hello, I'm
            </p>

            <div className="mb-6">
              <h1 className="text-6xl md:text-10xl lg:text-12xl font-uhbee text-gray-900 leading-none text-center tracking-tight px-4">
                ALBA AYALA
              </h1>
            </div>

            <p className="text-4xl md:text-6xl text-gray-900 mb-12 font-bryndan font-light tracking-wider text-center md:text-right pr-4 md:pr-0">
              Frontend developer
            </p>

            <div className="absolute left-[-50px] md:left-4 bottom-[50px] md:bottom-[-155px] z-20 w-[150px] md:w-[220px] lg:w-[250px]">
              <img
                src={miPorfoImage}
                alt="Dibujo a mano representando a Alba Ayala"
                className="w-full h-auto object-contain opacity-95 filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="mt-20 md:mt-32">
              <a
                href="#about"
                className="animate-bounce mx-auto w-16 h-24 md:w-20 md:h-35 rounded-[50px] border-[3px] border-gray-900 flex items-center justify-center p-3 block bg-white/80 backdrop-blur-sm hover:bg-gray-900 hover:text-white transition-colors"
              >
                <svg
                  className="w-8 h-20 md:w-12 md:h-25"
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
              ABOUT ME
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
                      <p className="text-gray-700 text-lg">Constantemente aprendiendo cosas nuevas</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-3"></div>
                      <p className="text-gray-700 text-lg">Responsable y colaborativa en <span className="font-semibold">trabajo en equipo</span></p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-3"></div>
                      <p className="text-gray-700 text-lg">Comprometida con el <span className="font-semibold">aprendizaje continuo</span></p>
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
                    DOWNLOAD CV
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
              EXPERIENCE
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
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 md:py-32 px-4 md:px-8 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-uhbee text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <img
                      src={cert.photoUrl}
                      alt={cert.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-1">Issuer: {cert.issuer}</p>
                  <p className="text-gray-500">Date: {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-uhbee text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
              CONTACT
            </h2>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                DO YOU WANT TO WORK ON A PROJECT TOGETHER, OR DO YOU HAVE A SUGGESTION FOR ONE?
                <br />
                <span className="text-primary-600">SEND ME A MESSAGE NOW!</span>
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="Volodimir Zayeb"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="volozayeb27@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Hey i see your webpage and i want to do a project with you, contact me for more details. I wait for your reply soon!!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-black w-full py-4 text-lg font-semibold rounded-lg hover:scale-[1.02] transition-transform"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 font-ui">
              © {new Date().getFullYear()} Alba Ayala. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;