import React from 'react';
import { Language } from '../types';
import Hero from '../components/Hero';
import CourseCatalog from '../components/CourseCatalog';
import Documentation from '../components/Documentation';

interface HomeProps {
  language: Language;
  onStartCourse: (courseId: string) => void;
}

export default function Home({ language, onStartCourse }: HomeProps) {
  return (
    <main className="space-y-section">
      <Hero 
        language={language} 
        onStartLearning={() => onStartCourse('html')} 
      />
      <CourseCatalog 
        language={language} 
        onStartCourse={onStartCourse} 
      />
      <Documentation language={language} />
    </main>
  );
}