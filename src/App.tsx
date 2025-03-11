import React, { useState, useEffect } from 'react';
import { Theme, Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseCatalog from './components/CourseCatalog';
import CodeEditor from './components/CodeEditor';
import Documentation from './components/Documentation';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');
  const { i18n } = useTranslation();

  useEffect(() => {
    // Only change text direction, not layout
    document.documentElement.setAttribute('lang', language);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    i18n.changeLanguage(language);
  }, [theme, language, i18n]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header
        theme={theme}
        language={language}
        onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        onLanguageChange={(lang) => setLanguage(lang)}
      />
      <main className="space-y-section">
        <Hero language={language} />
        <CourseCatalog language={language} />
        <CodeEditor language={language} />
        <Documentation language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;