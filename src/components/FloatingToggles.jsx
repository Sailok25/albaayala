import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function FloatingToggles() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  );
}
