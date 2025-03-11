import React, { useState, useEffect } from 'react';
import { Theme, Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import DocumentationPage from './pages/Documentation';
import HTMLCourse from './pages/html/HTMLCourse';
import { useTranslation } from 'react-i18next';
import './i18n';

type Page = 'home' | 'courses' | 'documentation' | 'html-course';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    i18n.changeLanguage(language);
  }, [theme, language, i18n]);

  const handleStartCourse = (courseId: string) => {
    if (courseId === 'html') {
      setCurrentPage('html-course');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'courses':
        return <Courses language={language} onStartCourse={handleStartCourse} />;
      case 'documentation':
        return <DocumentationPage language={language} />;
      case 'html-course':
        return <HTMLCourse language={language} />;
      default:
        return <Home language={language} onStartCourse={handleStartCourse} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header
        theme={theme}
        language={language}
        onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        onLanguageChange={(lang) => setLanguage(lang)}
        onNavigate={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      {renderPage()}
      <Footer language={language} />
    </div>
  );
}

export default App;