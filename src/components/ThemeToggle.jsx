import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xl"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}
