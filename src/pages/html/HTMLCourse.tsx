import React, { useState } from 'react';
import { Language, Lesson, CourseProgress } from '../../types';
import { ChevronRight, BookOpen, CheckCircle, ChevronLeft, ChevronDown } from 'lucide-react';
import { htmlLessons } from '../../data/htmlLessons';
import CodeEditor from '../../components/CodeEditor';

interface HTMLCourseProps {
  language: Language;
}

export default function HTMLCourse({ language }: HTMLCourseProps) {
  const [currentLesson, setCurrentLesson] = useState<number>(0);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [progress, setProgress] = useState<CourseProgress>({
    totalLessons: htmlLessons.length,
    completedLessons: 0,
    currentLesson: 0
  });

  const lesson = htmlLessons[currentLesson];

  const markLessonComplete = () => {
    const updatedLessons = [...htmlLessons];
    updatedLessons[currentLesson].completed = true;
    
    setProgress(prev => ({
      ...prev,
      completedLessons: Math.min(prev.completedLessons + 1, prev.totalLessons)
    }));
  };

  const navigateToLesson = (index: number) => {
    setCurrentLesson(index);
    setProgress(prev => ({
      ...prev,
      currentLesson: index
    }));
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Collapsible Sidebar */}
          <div 
            className={`transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl shadow-lg h-[calc(100vh-8rem)] sticky top-24 overflow-hidden ${
              isSidebarExpanded ? 'w-72' : 'w-16'
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h2 className={`text-xl font-bold transition-opacity duration-300 ${
                isSidebarExpanded ? 'opacity-100' : 'opacity-0'
              }`}>
                {language === 'ar' ? 'دورة HTML' : 'HTML Course'}
              </h2>
              <button
                onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label={isSidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
              >
                <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${
                  isSidebarExpanded ? '' : 'rotate-180'
                }`} />
              </button>
            </div>

            <div className={`p-4 ${isSidebarExpanded ? '' : 'hidden'}`}>
              <div className="mb-6">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-primary-600 rounded-full transition-all duration-300"
                    style={{ width: `${(progress.completedLessons / progress.totalLessons) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {progress.completedLessons} / {progress.totalLessons} {language === 'ar' ? 'مكتمل' : 'completed'}
                </p>
              </div>

              <nav className="space-y-2">
                {htmlLessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => navigateToLesson(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      currentLesson === index
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {lesson.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <BookOpen className="w-5 h-5 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">
                        {language === 'ar' ? 'الدرس' : 'Lesson'} {lesson.number}
                      </span>
                      <p className="text-sm font-medium truncate">
                        {language === 'ar' ? lesson.titleAr : lesson.title}
                      </p>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Collapsed state shows only icons */}
            {!isSidebarExpanded && (
              <div className="p-2">
                {htmlLessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => navigateToLesson(index)}
                    className={`w-full p-2 rounded-lg mb-2 flex justify-center transition-colors ${
                      currentLesson === index
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    title={language === 'ar' ? lesson.titleAr : lesson.title}
                  >
                    {lesson.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <BookOpen className="w-5 h-5" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="prose dark:prose-invert max-w-none">
              <h1 className="text-3xl font-bold mb-2">
                {language === 'ar' ? lesson.titleAr : lesson.title}
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                {language === 'ar' ? lesson.descriptionAr : lesson.description}
              </p>

              <div 
                className="mb-12"
                dangerouslySetInnerHTML={{ 
                  __html: language === 'ar' ? lesson.contentAr : lesson.content 
                }} 
              />

              <h2 className="text-2xl font-bold mb-6">
                {language === 'ar' ? 'أمثلة عملية' : 'Practical Examples'}
              </h2>

              <div className="space-y-8">
                {lesson.examples.map((example) => (
                  <div key={example.id} className="border dark:border-gray-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {example.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {language === 'ar' ? example.explanationAr : example.explanation}
                    </p>
                    <div className="bg-gray-900 rounded-lg overflow-hidden">
                      <CodeEditor
                        height="200px"
                        defaultLanguage="html"
                        value={example.code}
                        onChange={() => {}}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: 'on',
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between border-t dark:border-gray-700 pt-6">
              <button
                onClick={() => navigateToLesson(Math.max(0, currentLesson - 1))}
                disabled={currentLesson === 0}
                className={`btn ${
                  currentLesson === 0 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'btn-secondary'
                } flex items-center gap-2`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'ar' ? 'السابق' : 'Previous'}</span>
              </button>

              {currentLesson < htmlLessons.length - 1 ? (
                <button
                  onClick={() => {
                    markLessonComplete();
                    navigateToLesson(currentLesson + 1);
                  }}
                  className="btn btn-primary flex items-center gap-2"
                >
                  <span>{language === 'ar' ? 'التالي' : 'Next'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={markLessonComplete}
                  className="btn btn-primary"
                >
                  {language === 'ar' ? 'إنهاء الدورة' : 'Complete Course'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}