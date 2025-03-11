import React, { useState } from 'react';
import { Language } from '../types';
import { ChevronDown, Menu } from 'lucide-react';

type DocSection = 'html' | 'css' | 'javascript' | 'react' | 'nodejs';

interface DocumentationContent {
  id: DocSection;
  title: string;
  titleAr: string;
  elements: Array<{
    tag: string;
    description: string;
    descriptionAr: string;
    example: string;
    attributes?: Array<{
      name: string;
      description: string;
      descriptionAr: string;
    }>;
  }>;
}

const documentationContent: DocumentationContent[] = [
  {
    id: 'html',
    title: 'HTML',
    titleAr: 'HTML',
    elements: [
      {
        tag: '<h1> - <h6>',
        description: 'Headings define the hierarchy of content. h1 is the most important, h6 is the least.',
        descriptionAr: 'العناوين تحدد تسلسل المحتوى. h1 هو الأهم، h6 هو الأقل أهمية.',
        example: '<h1>Main Title</h1>\n<h2>Subtitle</h2>',
        attributes: [
          {
            name: 'id',
            description: 'Unique identifier for the heading',
            descriptionAr: 'معرف فريد للعنوان'
          }
        ]
      },
      {
        tag: '<p>',
        description: 'Defines a paragraph of text.',
        descriptionAr: 'يحدد فقرة من النص.',
        example: '<p>This is a paragraph of text.</p>'
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS',
    titleAr: 'CSS',
    elements: [
      {
        tag: 'color',
        description: 'Sets the color of text.',
        descriptionAr: 'يحدد لون النص.',
        example: 'color: #ff0000;\ncolor: rgb(255, 0, 0);\ncolor: red;'
      },
      {
        tag: 'margin',
        description: 'Sets the margin around an element.',
        descriptionAr: 'يحدد الهامش حول العنصر.',
        example: 'margin: 10px;\nmargin: 10px 20px;\nmargin: 10px 20px 30px 40px;'
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    titleAr: 'جافا سكريبت',
    elements: [
      {
        tag: 'function',
        description: 'Declares a function.',
        descriptionAr: 'يعلن عن دالة.',
        example: 'function greet(name) {\n  return `Hello, ${name}!`;\n}'
      }
    ]
  }
];

interface ElementSectionProps {
  element: DocumentationContent['elements'][0];
  language: Language;
}

function ElementSection({ element, language }: ElementSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border dark:border-gray-700 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-4">
          <code className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded font-mono">
            {element.tag}
          </code>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {language === 'ar' ? element.descriptionAr : element.description}
          </p>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">
              {language === 'ar' ? 'مثال' : 'Example'}
            </h4>
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono">{element.example}</code>
              </pre>
            </div>
          </div>

          {element.attributes && element.attributes.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">
                {language === 'ar' ? 'السمات' : 'Attributes'}
              </h4>
              <div className="space-y-2">
                {element.attributes.map((attr) => (
                  <div key={attr.name} className="flex items-start gap-2">
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-mono">
                      {attr.name}
                    </code>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'ar' ? attr.descriptionAr : attr.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function DocumentationPage({ language }: { language: Language }) {
  const [activeSection, setActiveSection] = useState<DocSection>('html');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const currentContent = documentationContent.find(content => content.id === activeSection);

  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="flex relative">
          {/* Sidebar Navigation */}
          <div className={`w-64 flex-shrink-0 transition-all duration-300 ${
            isSidebarOpen ? 'translate-x-0 mr-8' : '-translate-x-full w-0 mr-0'
          }`}>
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 border-b dark:border-gray-700">
                <h2 className="text-lg font-semibold">
                  {language === 'ar' ? 'التوثيق' : 'Documentation'}
                </h2>
              </div>
              <nav className="p-2">
                {documentationContent.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full px-4 py-3 rounded-lg flex flex-col items-start gap-1 transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {language === 'ar' ? section.titleAr : section.title}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {/* Toggle Button moved inside content */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold">
                    {currentContent && (language === 'ar' ? currentContent.titleAr : currentContent.title)}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === 'ar' 
                      ? `دليل شامل لعناصر ${currentContent?.titleAr} وخصائصها`
                      : `A comprehensive guide to ${currentContent?.title} elements and their properties`
                    }
                  </p>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {currentContent?.elements.map((element) => (
                  <ElementSection 
                    key={element.tag} 
                    element={element} 
                    language={language} 
                  />
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-start gap-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {language === 'ar'
                      ? 'للمزيد من المعلومات، يمكنك زيارة التوثيق الرسمي'
                      : 'For more information, visit the official documentation'
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}