import React from 'react'
import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';

const ThemeLanguageSwitcher = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("en") ? "ua" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <button
        onClick={toggleLanguage}
        className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {i18n.language.startsWith("en") ? "UA" : "EN"}
      </button>
      <button
        onClick={toggleTheme}
        className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </div>
  );
}

export default ThemeLanguageSwitcher
