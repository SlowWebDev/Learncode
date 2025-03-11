import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Learn the foundation of all web pages',
    icon: '🌐',
    color: 'orange',
    difficulty: 'Beginner',
    category: 'frontend',
    popular: true,
    students: 15234789,
    chapters: 42
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Style and layout your web content',
    icon: '🎨',
    color: 'blue',
    difficulty: 'Beginner',
    category: 'frontend',
    popular: true,
    students: 12345678,
    chapters: 38
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Make your websites dynamic and interactive',
    icon: '⚡',
    color: 'yellow',
    difficulty: 'Intermediate',
    category: 'frontend',
    popular: true,
    students: 10234567,
    chapters: 56
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Learn programming with Python',
    icon: '🐍',
    color: 'green',
    difficulty: 'Beginner',
    category: 'backend',
    popular: true,
    students: 9876543,
    chapters: 48
  },
  {
    id: 'sql',
    title: 'SQL',
    description: 'Master database management',
    icon: '🗄️',
    color: 'cyan',
    difficulty: 'Intermediate',
    category: 'database',
    popular: true,
    students: 7654321,
    chapters: 35
  },
  {
    id: 'php',
    title: 'PHP',
    description: 'Build dynamic web applications',
    icon: '🐘',
    color: 'purple',
    difficulty: 'Intermediate',
    category: 'backend',
    popular: false,
    students: 5432109,
    chapters: 44
  },
  {
    id: 'java',
    title: 'Java',
    description: 'Create powerful applications',
    icon: '☕',
    color: 'red',
    difficulty: 'Advanced',
    category: 'backend',
    popular: false,
    students: 4321098,
    chapters: 52
  },
  {
    id: 'react',
    title: 'React',
    description: 'Build modern user interfaces',
    icon: '⚛️',
    color: 'blue',
    difficulty: 'Intermediate',
    category: 'frontend',
    popular: true,
    students: 6789012,
    chapters: 46
  }
];