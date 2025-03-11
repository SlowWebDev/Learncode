import { Technology } from '../types';

export const technologies: Technology[] = [
  {
    id: 'html',
    name: 'HTML',
    nameAr: 'HTML',
    description: 'Structure the web with semantic markup',
    descriptionAr: 'هيكلة الويب باستخدام العلامات الدلالية',
    icon: '🌐',
    level: 'Beginner',
    progress: 0,
    color: 'orange',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10'
  },
  {
    id: 'css',
    name: 'CSS',
    nameAr: 'CSS',
    description: 'Style and animate web content',
    descriptionAr: 'تنسيق وتحريك محتوى الويب',
    icon: '🎨',
    level: 'Beginner',
    progress: 0,
    color: 'blue',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10'
  },
  {
    id: 'js',
    name: 'JavaScript',
    nameAr: 'جافا سكريبت',
    description: 'Add interactivity to web applications',
    descriptionAr: 'إضافة التفاعل إلى تطبيقات الويب',
    icon: '⚡',
    level: 'Intermediate',
    progress: 0,
    color: 'yellow',
    gradient: 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/10'
  },
  {
    id: 'ts',
    name: 'TypeScript',
    nameAr: 'تايب سكريبت',
    description: 'JavaScript with static typing',
    descriptionAr: 'جافا سكريبت مع الأنواع الثابتة',
    icon: '📘',
    level: 'Intermediate',
    progress: 0,
    color: 'blue',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10'
  },
  {
    id: 'react',
    name: 'React',
    nameAr: 'رياكت',
    description: 'Build user interfaces with components',
    descriptionAr: 'بناء واجهات المستخدم باستخدام المكونات',
    icon: '⚛️',
    level: 'Advanced',
    progress: 0,
    color: 'cyan',
    gradient: 'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/10'
  },
  {
    id: 'node',
    name: 'Node.js',
    nameAr: 'نود جيه اس',
    description: 'JavaScript runtime for servers',
    descriptionAr: 'بيئة تشغيل جافا سكريبت للخوادم',
    icon: '🟢',
    level: 'Intermediate',
    progress: 0,
    color: 'green',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10'
  },
  {
    id: 'express',
    name: 'Express',
    nameAr: 'إكسبرس',
    description: 'Fast, unopinionated web framework',
    descriptionAr: 'إطار عمل ويب سريع وبسيط',
    icon: '🚂',
    level: 'Intermediate',
    progress: 0,
    color: 'gray',
    gradient: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/10'
  },
  {
    id: 'vite',
    name: 'Vite',
    nameAr: 'فايت',
    description: 'Next generation frontend tooling',
    descriptionAr: 'أدوات الواجهة الأمامية للجيل القادم',
    icon: '⚡',
    level: 'Beginner',
    progress: 0,
    color: 'purple',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10'
  }
];