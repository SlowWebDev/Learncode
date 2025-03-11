import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Course, Language } from '../types';
import { useTranslation } from 'react-i18next';

interface CourseCardProps {
  course: Course;
  language: Language;
  onStartCourse: (courseId: string) => void;
}

export default function CourseCard({ course, language, onStartCourse }: CourseCardProps) {
  const { t } = useTranslation();

  const difficultyColors = {
    Beginner: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    Intermediate: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    Advanced: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
  };

  return (
    <div className="card card-hover p-6 group">
      <div className="absolute top-0 right-0 px-3 py-1 m-4 text-xs font-medium rounded-full">
        <span className={`${difficultyColors[course.difficulty]} px-3 py-1 rounded-full text-sm font-medium`}>
          {t(`courses.difficulty.${course.difficulty.toLowerCase()}`)}
        </span>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          <img 
            src={course.icon} 
            alt={`${course.title} logo`}
            className="w-12 h-12 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-direction">
            {language === 'ar' ? course.titleAr : course.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-direction">
            {language === 'ar' ? course.descriptionAr : course.description}
          </p>
        </div>
      </div>

      <button 
        onClick={() => onStartCourse(course.id)}
        className="btn btn-primary w-full flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
      >
        <span className="text-direction font-medium">
          {t('courses.startLearning')}
        </span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}