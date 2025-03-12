import React from 'react';
import { Language } from '../types';
import Hero from '../components/Hero';
import CourseCatalog from '../components/CourseCatalog';
import Documentation from '../components/Documentation';
import { Code2, Database, Layout } from 'lucide-react';

const technologies = [
  {
    title: 'TypeScript',
    titleAr: 'تايب سكريبت',
    description: 'Build type-safe applications with TypeScript',
    descriptionAr: 'بناء تطبيقات آمنة الأنواع مع TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    features: ['Static Types', 'Object-Oriented Features', 'Enhanced IDE Support', 'Early Error Detection'],
    featuresAr: ['الأنواع الثابتة', 'ميزات البرمجة كائنية التوجه', 'دعم محسن لبيئة التطوير', 'اكتشاف مبكر للأخطاء']
  },
  {
    title: 'React',
    titleAr: 'رياكت',
    description: 'Create interactive user interfaces with React',
    descriptionAr: 'إنشاء واجهات مستخدم تفاعلية مع React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    features: ['Component-Based', 'Virtual DOM', 'Rich Ecosystem', 'Declarative UI'],
    featuresAr: ['قائم على المكونات', 'DOM افتراضي', 'نظام بيئي غني', 'واجهة مستخدم تصريحية']
  },
  {
    title: 'Node.js',
    titleAr: 'نود جي إس',
    description: 'Build scalable server-side applications',
    descriptionAr: 'بناء تطبيقات قابلة للتطوير على جانب الخادم',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    features: ['Event-Driven', 'Non-Blocking I/O', 'NPM Package Manager', 'Cross-Platform'],
    featuresAr: ['مدفوع بالأحداث', 'I/O غير متزامن', 'مدير حزم NPM', 'متعدد المنصات']
  },
  {
    title: 'MySQL',
    titleAr: 'ماي إس كيو إل',
    description: 'Powerful relational database management',
    descriptionAr: 'إدارة قواعد البيانات العلائقية القوية',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    features: ['ACID Compliance', 'Scalable', 'High Performance', 'Reliable'],
    featuresAr: ['متوافق مع ACID', 'قابل للتطوير', 'أداء عالي', 'موثوق']
  }
];

export default function Home({ language, onStartCourse }: { language: Language; onStartCourse: (courseId: string) => void }) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <Hero language={language} onStartLearning={() => onStartCourse('html')} />
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'تقنيات حديثة' : 'Modern Technologies'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تعلم أحدث التقنيات المستخدمة في تطوير الويب الحديث'
                : 'Learn the latest technologies used in modern web development'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={tech.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <img 
                    src={tech.icon} 
                    alt={tech.title}
                    className="w-12 h-12"
                  />
                  <span className="text-sm font-medium px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
                    {language === 'ar' ? 'متوفر الآن' : 'Available Now'}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? tech.titleAr : tech.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {language === 'ar' ? tech.descriptionAr : tech.description}
                </p>

                <div className="space-y-2">
                  {(language === 'ar' ? tech.featuresAr : tech.features).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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