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
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Course Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700">
            <img 
              src={course.icon} 
              alt={`${course.title} logo`}
              className="w-12 h-12 object-contain"
            />
          </div>
          <span className={`${difficultyColors[course.difficulty]} px-3 py-1 rounded-full text-sm font-medium`}>
            {t(`courses.difficulty.${course.difficulty.toLowerCase()}`)}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-direction">
          {language === 'ar' ? course.titleAr : course.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-direction">
          {language === 'ar' ? course.descriptionAr : course.description}
        </p>

        <div className="space-y-2 mb-6">
          {course.videos.slice(0, 2).map((video) => (
            <div key={video.id} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="truncate">{language === 'ar' ? video.titleAr : video.title}</span>
            </div>
          ))}
          {course.videos.length > 2 && (
            <p className="text-sm text-primary-600 dark:text-primary-400">
              +{course.videos.length - 2} {language === 'ar' ? 'المزيد من الدروس' : 'more lessons'}
            </p>
          )}
        </div>

        <button 
          onClick={() => onStartCourse(course.id)}
          className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group-hover:transform group-hover:translate-y-[-2px]"
        >
          <span className="font-medium">
            {t('courses.startLearning')}
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}