import React, { useState, useEffect } from 'react';
import { Theme, Language, Course, Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CoursePage from './pages/CoursePage';
import Dashboard from './pages/Dashboard';
import { useTranslation } from 'react-i18next';
import { courses } from './data/courses';
import './i18n';
import { Toaster } from 'react-hot-toast';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    i18n.changeLanguage(language);
  }, [theme, language, i18n]);

  const handleStartCourse = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
      setCurrentPage('course-page');
    }
  };

  const handleBack = () => {
    setCurrentPage('courses');
    setSelectedCourse(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'courses':
        return <Courses language={language} onStartCourse={handleStartCourse} />;
      case 'course-page':
        return selectedCourse ? (
          <CoursePage 
            course={selectedCourse} 
            language={language} 
            onBack={handleBack}
          />
        ) : null;
      case 'dashboard':
        return <Dashboard language={language} onBack={() => setCurrentPage('home')} />;
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
        currentPage={currentPage === 'course-page' ? 'courses' : currentPage}
        onDashboard={() => setCurrentPage('dashboard')}
      />
      {renderPage()}
      <Footer language={language} />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;