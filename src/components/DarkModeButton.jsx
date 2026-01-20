import { useState, useEffect } from 'react';

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-[#070707] border-2 border-black dark:border-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {isDark ? (
        <span className="text-2xl">🌙</span>
      ) : (
        <span className="text-2xl">☀️</span>
      )}
    </button>
  );
}