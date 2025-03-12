import React from 'react';
import { Code2 } from 'lucide-react';
import { Language } from '../types';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  language: Language;
  onStartLearning: () => void;
}

export default function Hero({ language, onStartLearning }: HeroProps) {
  const { t } = useTranslation();
  
  return (
    <section className="relative pt-16 overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-direction text-gray-900 dark:text-white">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 text-direction">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center content-spacing">
            <button 
              onClick={onStartLearning}
              className="px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white dark:text-white flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Code2 className="w-5 h-5" />
              <span className="text-direction font-medium">{t('hero.startLearning')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}