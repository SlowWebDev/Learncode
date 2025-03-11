import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'html',
    title: 'HTML5',
    titleAr: 'HTML5',
    description: 'Learn the foundation of all web pages',
    descriptionAr: 'تعلم أساسيات صفحات الويب',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: 'orange',
    difficulty: 'Beginner',
    category: 'frontend'
  },
  {
    id: 'css',
    title: 'CSS3',
    titleAr: 'CSS3',
    description: 'Style and layout your web content',
    descriptionAr: 'تنسيق وتخطيط محتوى الويب',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: 'blue',
    difficulty: 'Beginner',
    category: 'frontend'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    titleAr: 'جافا سكريبت',
    description: 'Make your websites dynamic and interactive',
    descriptionAr: 'اجعل مواقعك ديناميكية وتفاعلية',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'yellow',
    difficulty: 'Intermediate',
    category: 'frontend'
  },
  {
    id: 'react',
    title: 'React',
    titleAr: 'رياكت',
    description: 'Build modern user interfaces',
    descriptionAr: 'بناء واجهات مستخدم حديثة',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'blue',
    difficulty: 'Intermediate',
    category: 'frontend'
  },
  {
    id: 'node',
    title: 'Node.js',
    titleAr: 'نود جيه اس',
    description: 'Build scalable server-side applications',
    descriptionAr: 'بناء تطبيقات قابلة للتطوير من جانب الخادم',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'green',
    difficulty: 'Intermediate',
    category: 'backend'
  },
  {
    id: 'php',
    title: 'PHP',
    titleAr: 'بي إتش بي',
    description: 'Create dynamic web applications',
    descriptionAr: 'إنشاء تطبيقات ويب ديناميكية',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    color: 'purple',
    difficulty: 'Intermediate',
    category: 'backend'
  },
  {
    id: 'mysql',
    title: 'MySQL',
    titleAr: 'ماي إس كيو إل',
    description: 'Master database management',
    descriptionAr: 'إتقان إدارة قواعد البيانات',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'blue',
    difficulty: 'Intermediate',
    category: 'database'
  }
];