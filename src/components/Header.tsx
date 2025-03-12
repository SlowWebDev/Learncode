import React, { useState } from 'react';
import { Menu, Search, Sun, Moon, Languages, Settings } from 'lucide-react';
import { Theme, Language, Page } from '../types';

interface HeaderProps {
  theme: Theme;
  language: Language;
  currentPage: Page;
  onThemeToggle: () => void;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (page: Page) => void;
  onDashboard: () => void;
}

export default function Header({ 
  theme, 
  language, 
  currentPage,
  onThemeToggle, 
  onLanguageChange,
  onNavigate,
  onDashboard
}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }} 
              className="flex items-center gap-2"
            >
              <span className="text-2xl font-bold">
                Learncode
              </span>
            </a>
            
            <div className="hidden md:flex items-center gap-6">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('courses');
                }}
                className={`text-sm hover:text-gray-600 dark:hover:text-gray-300 ${
                  currentPage === 'courses' ? 'text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                {language === 'ar' ? 'الدروس' : 'Courses'}
              </a>
              <a 
                href="https://www.w3schools.com/tags/default.asp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-600 dark:hover:text-gray-300"
              >
                {language === 'ar' ? 'التوثيق' : 'Documentation'}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5" />
            </button>

            <button
              onClick={onDashboard}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Dashboard"
            >
              <Settings className="w-5 h-5" />
            </button>

            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <input
              type="search"
              placeholder={language === 'ar' ? 'ابحث عن الدروس...' : 'Search tutorials...'}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>
      )}
    </header>
  );
}