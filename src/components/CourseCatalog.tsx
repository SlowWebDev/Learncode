import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from './CourseCard';
import { Layout, Code2, Database } from 'lucide-react';
import { Language } from '../types';
import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

interface CourseCatalogProps {
  language: Language;
  onStartCourse: (courseId: string) => void;
}

export default function CourseCatalog({ language, onStartCourse }: CourseCatalogProps) {
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
    <>
      <div className="bg-white dark:bg-black">
        <SectionDivider variant="wave" className="text-gray-50 dark:text-gray-900" />
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('courses.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('courses.subtitle')}
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection delay={200} className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-white dark:bg-gray-800 shadow-lg p-1">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as typeof activeCategory)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">
                    {t(`courses.categories.${category.id}`)}
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <AnimatedSection key={course.id} delay={300 + index * 100}>
                <CourseCard 
                  course={course} 
                  language={language} 
                  onStartCourse={onStartCourse}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-black">
        <SectionDivider variant="wave" className="text-gray-50 dark:text-gray-900" flip />
      </div>
    </>
  );
}