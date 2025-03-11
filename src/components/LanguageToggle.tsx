import React from 'react';
import { Globe2 } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  onLanguageToggle: () => void;
}

export default function LanguageToggle({ language, onLanguageToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onLanguageToggle}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe2 className="w-5 h-5" />
      <span className="sr-only">
        {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      </span>
    </button>
  );
}