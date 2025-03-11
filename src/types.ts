import { DivideIcon as LucideIcon } from 'lucide-react';

export type Course = {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'frontend' | 'backend' | 'database';
  color: string;
};

export type Technology = {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  level: string;
  progress: number;
  color: string;
  gradient: string;
};

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'ar';

export type SearchResult = {
  id: string;
  title: string;
  type: 'course' | 'tutorial' | 'documentation';
  url: string;
};

export type Direction = 'ltr' | 'rtl';

export interface LayoutProps {
  language: Language;
  children: React.ReactNode;
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  content: string;
  contentAr: string;
  examples: CodeExample[];
  completed?: boolean;
}

export interface CodeExample {
  id: string;
  title: string;
  code: string;
  explanation: string;
  explanationAr: string;
}

export interface CourseProgress {
  totalLessons: number;
  completedLessons: number;
  currentLesson: number;
}