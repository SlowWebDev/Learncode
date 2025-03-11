import { Technology } from '../types';

export const technologies: Technology[] = [
  {
    id: 'html',
    name: 'HTML5',
    nameAr: 'HTML5',
    description: 'Structure the web with semantic markup',
    descriptionAr: 'هيكلة الويب باستخدام العلامات الدلالية',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 'Beginner',
    progress: 0,
    color: 'orange',
    gradient: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10'
  },
  {
    id: 'css',
    name: 'CSS3',
    nameAr: 'CSS3',
    description: 'Style and animate web content',
    descriptionAr: 'تنسيق وتحريك محتوى الويب',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
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
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 'Intermediate',
    progress: 0,
    color: 'yellow',
    gradient: 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/10'
  },
  {
    id: 'react',
    name: 'React',
    nameAr: 'رياكت',
    description: 'Build user interfaces with components',
    descriptionAr: 'بناء واجهات المستخدم باستخدام المكونات',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
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
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    level: 'Intermediate',
    progress: 0,
    color: 'green',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10'
  },
  {
    id: 'php',
    name: 'PHP',
    nameAr: 'بي إتش بي',
    description: 'Server-side scripting language',
    descriptionAr: 'لغة برمجة من جانب الخادم',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    level: 'Intermediate',
    progress: 0,
    color: 'purple',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    nameAr: 'ماي إس كيو إل',
    description: 'Popular relational database',
    descriptionAr: 'قاعدة بيانات علائقية شعبية',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    level: 'Intermediate',
    progress: 0,
    color: 'blue',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10'
  }
];