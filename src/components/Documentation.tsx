import React from 'react';
import { Language } from '../types';
import { Code2, Database, Layout, BookOpen, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

interface DocumentationProps {
  language: Language;
}

const documentationSections = [
  {
    id: 'frontend',
    icon: Layout,
    color: 'blue',
    topics: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop'
  },
  {
    id: 'backend',
    icon: Code2,
    color: 'green',
    topics: ['Node.js', 'Express', 'APIs', 'Authentication'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop'
  },
  {
    id: 'database',
    icon: Database,
    color: 'purple',
    topics: ['SQL', 'Database Design', 'Performance', 'Security'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop'
  }
];

export default function Documentation({ language }: DocumentationProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white dark:bg-black">
        <SectionDivider variant="wave" className="text-gray-50 dark:text-gray-900" />
      </div>
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t('documentation.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('documentation.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documentationSections.map((section, index) => (
              <AnimatedSection
                key={section.id}
                delay={index * 100}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={section.image}
                      alt=""
                      className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 dark:from-gray-800/80 dark:to-gray-800/20" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    <section.icon className={`w-12 h-12 mb-6 text-${section.color}-500`} />
                    
                    <h3 className="text-2xl font-bold mb-4">
                      {t(`documentation.sections.${section.id}.title`)}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {t(`documentation.sections.${section.id}.description`)}
                    </p>

                    {/* Topics */}
                    <div className="space-y-3 mb-8">
                      {section.topics.map((topic, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-3 px-6 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center gap-2 transition-all duration-300 group-hover:transform group-hover:translate-y-[-2px]">
                      <span className="font-medium">
                        {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
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