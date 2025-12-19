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

            {/* Flecha minimalista con borde sutil - VERSIÓN CORREGIDA */}
            <div className="mt-20">
              <div className="animate-bounce mx-auto w-20 h-35 rounded-[50px] border-[4px] border-black flex items-center justify-center p-3">
                <svg
                  className="w-12 h-25"  
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 48"  /* Simplificado y proporcional */
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v40m0 0l6-6m-6 6l-6-6"
                  />
                </svg>
              </div>
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