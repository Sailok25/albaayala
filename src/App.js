// App.js - CON IMAGEN EN ESQUINA INFERIOR IZQUIERDA
import './App.css';
import miPorfoImage from './assets/images/mi-porfo.svg';

function App() {
  return (
    <div className="App min-h-screen relative overflow-hidden">
      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Header/Hero Section */}
        <header className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
          <div className="max-w-[100rem] mx-auto w-full">

            {/* Texto con Bryndan Write */}
            <p className="text-4xl md:text-7xl text-black mb-4 font-bryndan tracking-wider pl-[15rem]">
              Hello, I'm
            </p>

            {/* Nombre con UhBee HanByeol */}
            <div className="mb-6">
              <h1 className="text-10xl md:text-12xl lg:text-12xl font-uhbee text-black leading-none text-center">
                ALBA AYALA
              </h1>
            </div>

            {/* Texto con Bryndan Write */}
            <p className="text-6xl md:text-7xl text-black mb-12 font-bryndan font-light tracking-wider text-right">
              Frontend developer
            </p>

            <div className="absolute left-[-15px] bottom-[270px] z-0 w-[200px] md:w-[250px] lg:w-[250px]">
              <img
                src={miPorfoImage}
                alt="Dibujo a mano representando a Alba Ayala"
                className="w-full h-auto object-contain opacity-90"
              />
            </div>

            {/* Flecha indicadora para scroll */}
            <div className="mt-20 animate-bounce">
              <svg
                className="w-8 h-8 mx-auto text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </header>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white text-center relative z-10">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-3xl font-uhbee mb-6 text-white">
              ALBA AYALA
            </p>
            <p className="text-gray-400 mb-8 font-sans">
              Frontend Developer & UI Designer
            </p>
            <div className="flex justify-center gap-6 mb-8 font-sans">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Email
              </a>
            </div>
            <p className="text-gray-500 text-sm font-sans">
              © {new Date().getFullYear()} Alba Ayala. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;