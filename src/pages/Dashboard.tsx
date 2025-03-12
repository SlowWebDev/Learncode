import React, { useState } from 'react';
import { Language, Course, VideoLesson } from '../types';
import { ChevronLeft, Plus, Save, Video, BookOpen, Code2, Database, Layout } from 'lucide-react';
import toast from 'react-hot-toast';

interface DashboardProps {
  language: Language;
  onBack: () => void;
}

type CourseType = 'html' | 'css' | 'typescript' | 'react' | 'mysql' | 'nodejs';

const courseTypes: Record<CourseType, { title: string, icon: any }> = {
  html: { title: 'HTML', icon: Layout },
  css: { title: 'CSS', icon: Layout },
  typescript: { title: 'TypeScript', icon: Code2 },
  react: { title: 'React', icon: Code2 },
  mysql: { title: 'MySQL', icon: Database },
  nodejs: { title: 'Node.js', icon: Code2 }
};

export default function Dashboard({ language, onBack }: DashboardProps) {
  const [selectedCourseType, setSelectedCourseType] = useState<CourseType>('html');
  const [newLesson, setNewLesson] = useState({
    title: '',
    titleAr: '',
    description: '',
    descriptionAr: '',
    content: '',
    contentAr: '',
    videoUrl: '',
    duration: '',
    order: 1
  });

  const handleSaveLesson = async () => {
    try {
      // Here we would save the lesson to the appropriate course JSON file
      toast.success(language === 'ar' ? 'تم حفظ الدرس بنجاح' : 'Lesson saved successfully');
      setNewLesson({
        title: '',
        titleAr: '',
        description: '',
        descriptionAr: '',
        content: '',
        contentAr: '',
        videoUrl: '',
        duration: '',
        order: 1
      });
    } catch (error) {
      toast.error(language === 'ar' ? 'حدث خطأ أثناء حفظ الدرس' : 'Error saving lesson');
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{language === 'ar' ? 'العودة إلى الرئيسية' : 'Back to Home'}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Course Type Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">
                {language === 'ar' ? 'اختر نوع الدورة' : 'Select Course Type'}
              </h2>
              <div className="space-y-2">
                {Object.entries(courseTypes).map(([type, { title, icon: Icon }]) => (
                  <button
                    key={type}
                    onClick={() => setSelectedCourseType(type as CourseType)}
                    className={`w-full p-4 rounded-lg flex items-center gap-3 transition-colors ${
                      selectedCourseType === type
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Lesson Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {language === 'ar' ? `إضافة درس جديد - ${courseTypes[selectedCourseType].title}` : `Add New Lesson - ${courseTypes[selectedCourseType].title}`}
              </h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'عنوان الدرس' : 'Lesson Title'}
                    </label>
                    <input
                      type="text"
                      value={newLesson.title}
                      onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                      placeholder={language === 'ar' ? 'أدخل عنوان الدرس' : 'Enter lesson title'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'العنوان بالعربية' : 'Arabic Title'}
                    </label>
                    <input
                      type="text"
                      value={newLesson.titleAr}
                      onChange={(e) => setNewLesson({ ...newLesson, titleAr: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                      placeholder={language === 'ar' ? 'أدخل العنوان بالعربية' : 'Enter Arabic title'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'الوصف' : 'Description'}
                    </label>
                    <textarea
                      value={newLesson.description}
                      onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                      rows={3}
                      placeholder={language === 'ar' ? 'أدخل وصف الدرس' : 'Enter lesson description'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'الوصف بالعربية' : 'Arabic Description'}
                    </label>
                    <textarea
                      value={newLesson.descriptionAr}
                      onChange={(e) => setNewLesson({ ...newLesson, descriptionAr: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                      rows={3}
                      placeholder={language === 'ar' ? 'أدخل الوصف بالعربية' : 'Enter Arabic description'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'المحتوى' : 'Content'}
                    </label>
                    <textarea
                      value={newLesson.content}
                      onChange={(e) => setNewLesson({ ...newLesson, content: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                      rows={6}
                      placeholder={language === 'ar' ? 'أدخل محتوى الدرس' : 'Enter lesson content'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'المحتوى بالعربية' : 'Arabic Content'}
                    </label>
                    <textarea
                      value={newLesson.contentAr}
                      onChange={(e) => setNewLesson({ ...newLesson, contentAr: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                      rows={6}
                      placeholder={language === 'ar' ? 'أدخل المحتوى بالعربية' : 'Enter Arabic content'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'رابط الفيديو' : 'Video URL'}
                    </label>
                    <input
                      type="text"
                      value={newLesson.videoUrl}
                      onChange={(e) => setNewLesson({ ...newLesson, videoUrl: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                      placeholder={language === 'ar' ? 'أدخل رابط الفيديو' : 'Enter video URL'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'ar' ? 'المدة' : 'Duration'}
                    </label>
                    <input
                      type="text"
                      value={newLesson.duration}
                      onChange={(e) => setNewLesson({ ...newLesson, duration: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                      placeholder={language === 'ar' ? 'مثال: 10:30' : 'Example: 10:30'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'ar' ? 'الترتيب' : 'Order'}
                  </label>
                  <input
                    type="number"
                    value={newLesson.order}
                    onChange={(e) => setNewLesson({ ...newLesson, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                    min="1"
                  />
                </div>

                <button
                  onClick={handleSaveLesson}
                  className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {language === 'ar' ? 'حفظ الدرس' : 'Save Lesson'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}