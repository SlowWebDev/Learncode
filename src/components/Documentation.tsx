import React from 'react';
import { Book, Code, Server, Database } from 'lucide-react';
import { Language } from '../types';
import SectionDivider from './SectionDivider';
import AnimatedSection from './AnimatedSection';

interface DocumentationProps {
  language: Language;
}

export default function Documentation({ language }: DocumentationProps) {
  const sections = [
    {
      icon: Code,
      titleEn: 'Frontend Development',
      titleAr: 'تطوير الواجهة الأمامية',
      descEn: 'Learn HTML, CSS, JavaScript, and modern frontend frameworks',
      descAr: 'تعلم HTML و CSS و JavaScript وأطر العمل الحديثة'
    },
    {
      icon: Server,
      titleEn: 'Backend Development',
      titleAr: 'تطوير الخادم',
      descEn: 'Master Node.js, Express, and server-side programming',
      descAr: 'إتقان Node.js و Express وبرمجة جانب الخادم'
    },
    {
      icon: Database,
      titleEn: 'Database Management',
      titleAr: 'إدارة قواعد البيانات',
      descEn: 'Work with databases and data modeling',
      descAr: 'العمل مع قواعد البيانات ونمذجة البيانات'
    }
  ];

  return (
    <>
      <div className="bg-white dark:bg-black">
        <SectionDivider variant="wave" className="text-gray-50 dark:text-gray-900" />
      </div>
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'التوثيق الشامل' : 'Comprehensive Documentation'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'ar' 
                ? 'دليل كامل لتطوير الويب الحديث'
                : 'Complete guide to modern web development'
              }
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-6 bg-white dark:bg-black rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <section.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'ar' ? section.titleAr : section.titleEn}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === 'ar' ? section.descAr : section.descEn}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white dark:bg-black">
        <SectionDivider variant="wave" className="text-gray-50 dark:text-gray-900" flip />
      </div>
    </>
  );
}