import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from './CourseCard';
import { Layout, Code2, Database } from 'lucide-react';
import { Language } from '../types';
import { useTranslation } from 'react-i18next';

interface CourseCatalogProps {
  language: Language;
}

export default function CourseCatalog({ language }: CourseCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database'>('all');
  const { t } = useTranslation();

  const categories = [
    { id: 'all', icon: Layout },
    { id: 'frontend', icon: Code2 },
    { id: 'backend', icon: Database },
  ];

  const filteredCourses = courses.filter(
    course => activeCategory === 'all' || course.category === activeCategory
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-direction">
            {t('courses.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-direction">
            {t('courses.subtitle')}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-white dark:bg-gray-800">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as typeof activeCategory)}
                className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-direction font-medium">
                  {t(`courses.categories.${category.id}`)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}