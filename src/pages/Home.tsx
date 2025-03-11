import React from 'react';
import { Language } from '../types';
import Hero from '../components/Hero';
import CourseCatalog from '../components/CourseCatalog';
import Documentation from '../components/Documentation';

export default function Home({ language, onStartCourse }: { language: Language; onStartCourse: (courseId: string) => void }) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <Hero language={language} onStartLearning={() => onStartCourse('html')} />
      </section>

      {/* Course Catalog Section */}
      <section className="relative bg-white dark:bg-gray-900">
        <CourseCatalog language={language} onStartCourse={onStartCourse} />
      </section>

      {/* Documentation Section */}
      <section className="relative bg-gray-50 dark:bg-gray-800">
        <Documentation language={language} />
      </section>
    </main>
  );
}