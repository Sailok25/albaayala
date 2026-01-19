import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const languages = ['ES', 'CA', 'EN', 'FR'];
  const currentIndex = languages.indexOf(language.toUpperCase());
  const nextLanguage = languages[(currentIndex + 1) % languages.length];

  const handleClick = () => {
    changeLanguage(nextLanguage.toLowerCase());
  };

  return (
    <button
      onClick={handleClick}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
      aria-label="Change language"
    >
      {language.toUpperCase()}
    </button>
  );
}
