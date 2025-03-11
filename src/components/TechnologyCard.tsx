import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Technology } from '../types';

interface TechnologyCardProps {
  technology: Technology;
  language: 'en' | 'ar';
}

export default function TechnologyCard({ technology, language }: TechnologyCardProps) {
  const name = language === 'en' ? technology.name : technology.nameAr;
  const description = language === 'en' ? technology.description : technology.descriptionAr;

  return (
    <div
      className={`group relative overflow-hidden p-6 rounded-2xl transition-all duration-500 hover:shadow-2xl ${technology.gradient}`}
    >
      <div className="absolute inset-0 opacity-10 bg-grid-pattern transition-opacity duration-500 group-hover:opacity-20" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{technology.icon}</span>
          <span className={`px-3 py-1 rounded-full text-sm bg-${technology.color}-100 dark:bg-${technology.color}-900 text-${technology.color}-800 dark:text-${technology.color}-200`}>
            {technology.level}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-full mb-4 overflow-hidden">
          <div
            className={`h-full bg-${technology.color}-500 rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${technology.progress}%` }}
          />
        </div>
        
        <button className="w-full py-2 px-4 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 dark:border-gray-700 dark:hover:border-gray-600 flex items-center justify-center space-x-2 transition-all duration-300 group-hover:scale-105">
          <span>Start Learning</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}