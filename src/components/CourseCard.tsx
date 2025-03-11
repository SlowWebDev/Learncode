import React from 'react';
import { ArrowRight, Users, BookOpen } from 'lucide-react';
import { Course, Language } from '../types';
import { useTranslation } from 'react-i18next';

interface CourseCardProps {
  course: Course;
  language: Language;
}

export default function CourseCard({ course, language }: CourseCardProps) {
  const { t } = useTranslation();

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <div className="group relative overflow-hidden p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      <div className="absolute top-0 right-0 px-3 py-1 m-4 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700">
        <span className="text-direction">
          {t(`courses.difficulty.${course.difficulty.toLowerCase()}`)}
        </span>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{course.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-direction">
            {language === 'ar' ? course.titleAr : course.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-direction">
            {language === 'ar' ? course.descriptionAr : course.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4 flex-shrink-0" />
          <span className="text-direction">
            {formatNumber(course.students)} {t('courses.students')}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <BookOpen className="w-4 h-4 flex-shrink-0" />
          <span className="text-direction">
            {course.chapters} {t('courses.chapters')}
          </span>
        </div>
      </div>

      <button className="w-full py-3 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <span className="text-direction font-medium">
          {t('courses.startLearning')}
        </span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}