import { Course } from '../types';

export const courses: Course[] = [
  // Frontend Development Path
  {
    id: 'html',
    title: 'HTML5',
    titleAr: 'HTML5',
    description: 'Learn the foundation of web development with HTML5',
    descriptionAr: 'تعلم أساسيات تطوير الويب مع HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: 'orange',
    difficulty: 'Beginner',
    category: 'frontend',
    videos: [
      {
        id: 'html-intro',
        title: 'Introduction to HTML',
        titleAr: 'مقدمة إلى HTML',
        description: 'Learn the basics of HTML and understand how web pages are structured',
        descriptionAr: 'تعلم أساسيات HTML وفهم كيفية هيكلة صفحات الويب',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
        duration: '10:15',
        order: 1
      },
      {
        id: 'html-elements',
        title: 'HTML Elements and Tags',
        titleAr: 'عناصر HTML والوسوم',
        description: 'Explore common HTML elements and how to use them effectively',
        descriptionAr: 'استكشف عناصر HTML الشائعة وكيفية استخدامها بفعالية',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
        duration: '15:30',
        order: 2
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS3',
    titleAr: 'CSS3',
    description: 'Master modern web styling and animations',
    descriptionAr: 'إتقان تصميم الويب الحديث والرسوم المتحركة',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: 'blue',
    difficulty: 'Beginner',
    category: 'frontend',
    videos: [
      {
        id: 'css-basics',
        title: 'CSS Fundamentals',
        titleAr: 'أساسيات CSS',
        description: 'Learn the basics of CSS styling and selectors',
        descriptionAr: 'تعلم أساسيات تنسيق CSS والمحددات',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        duration: '12:45',
        order: 1
      },
      {
        id: 'css-layout',
        title: 'CSS Layout and Flexbox',
        titleAr: 'تخطيط CSS و Flexbox',
        description: 'Master modern CSS layout techniques with Flexbox',
        descriptionAr: 'إتقان تقنيات تخطيط CSS الحديثة باستخدام Flexbox',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4',
        duration: '18:20',
        order: 2
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    titleAr: 'جافا سكريبت',
    description: 'Build interactive web applications with JavaScript',
    descriptionAr: 'بناء تطبيقات ويب تفاعلية باستخدام جافا سكريبت',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'yellow',
    difficulty: 'Intermediate',
    category: 'frontend',
    videos: [
      {
        id: 'js-intro',
        title: 'JavaScript Introduction',
        titleAr: 'مقدمة جافا سكريبت',
        description: 'Get started with JavaScript programming',
        descriptionAr: 'ابدأ مع برمجة جافا سكريبت',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5',
        duration: '15:00',
        order: 1
      },
      {
        id: 'js-dom',
        title: 'DOM Manipulation',
        titleAr: 'التعامل مع DOM',
        description: 'Learn how to manipulate the Document Object Model',
        descriptionAr: 'تعلم كيفية التعامل مع نموذج كائن المستند',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_6',
        duration: '20:15',
        order: 2
      }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    titleAr: 'تايب سكريبت',
    description: 'Learn TypeScript for type-safe JavaScript development',
    descriptionAr: 'تعلم TypeScript لتطوير JavaScript آمن الأنواع',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'blue',
    difficulty: 'Intermediate',
    category: 'frontend',
    videos: [
      {
        id: 'ts-intro',
        title: 'TypeScript Fundamentals',
        titleAr: 'أساسيات TypeScript',
        description: 'Get started with TypeScript and static typing',
        descriptionAr: 'ابدأ مع TypeScript والأنواع الثابتة',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_7',
        duration: '15:45',
        order: 1
      },
      {
        id: 'ts-advanced',
        title: 'Advanced TypeScript Features',
        titleAr: 'ميزات TypeScript المتقدمة',
        description: 'Learn advanced TypeScript features and patterns',
        descriptionAr: 'تعلم ميزات وأنماط TypeScript المتقدمة',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_8',
        duration: '20:30',
        order: 2
      }
    ]
  },
  {
    id: 'react',
    title: 'React',
    titleAr: 'رياكت',
    description: 'Build modern web applications with React',
    descriptionAr: 'بناء تطبيقات الويب الحديثة باستخدام React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'cyan',
    difficulty: 'Intermediate',
    category: 'frontend',
    videos: [
      {
        id: 'react-intro',
        title: 'React Fundamentals',
        titleAr: 'أساسيات React',
        description: 'Learn the basics of React and component-based development',
        descriptionAr: 'تعلم أساسيات React والتطوير القائم على المكونات',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_9',
        duration: '16:20',
        order: 1
      },
      {
        id: 'react-hooks',
        title: 'React Hooks',
        titleAr: 'خطافات React',
        description: 'Master React Hooks and functional components',
        descriptionAr: 'إتقان خطافات React والمكونات الوظيفية',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_10',
        duration: '22:15',
        order: 2
      }
    ]
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    titleAr: 'نود جي إس',
    description: 'Build scalable server-side applications with Node.js',
    descriptionAr: 'بناء تطبيقات قابلة للتطوير على جانب الخادم مع Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'green',
    difficulty: 'Intermediate',
    category: 'backend',
    videos: [
      {
        id: 'nodejs-intro',
        title: 'Node.js Fundamentals',
        titleAr: 'أساسيات Node.js',
        description: 'Get started with Node.js and server-side JavaScript',
        descriptionAr: 'ابدأ مع Node.js وجافا سكريبت على جانب الخادم',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_11',
        duration: '18:30',
        order: 1
      },
      {
        id: 'nodejs-express',
        title: 'Express.js Framework',
        titleAr: 'إطار عمل Express.js',
        description: 'Build web applications with Express.js',
        descriptionAr: 'بناء تطبيقات الويب باستخدام Express.js',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_12',
        duration: '25:10',
        order: 2
      }
    ]
  },
  {
    id: 'mysql',
    title: 'MySQL',
    titleAr: 'ماي إس كيو إل',
    description: 'Master database management with MySQL',
    descriptionAr: 'إتقان إدارة قواعد البيانات مع MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'blue',
    difficulty: 'Intermediate',
    category: 'database',
    videos: [
      {
        id: 'mysql-intro',
        title: 'MySQL Fundamentals',
        titleAr: 'أساسيات MySQL',
        description: 'Learn the basics of MySQL and database management',
        descriptionAr: 'تعلم أساسيات MySQL وإدارة قواعد البيانات',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_13',
        duration: '17:45',
        order: 1
      },
      {
        id: 'mysql-queries',
        title: 'Advanced SQL Queries',
        titleAr: 'استعلامات SQL المتقدمة',
        description: 'Master complex SQL queries and database optimization',
        descriptionAr: 'إتقان استعلامات SQL المعقدة وتحسين قواعد البيانات',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_14',
        duration: '23:30',
        order: 2
      }
    ]
  }
];