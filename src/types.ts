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
  videos: VideoLesson[];
};

export type VideoLesson = {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  videoUrl: string;
  duration: string;
  order: number;
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
  type: 'course' | 'tutorial';
  url: string;
};

export type Direction = 'ltr' | 'rtl';

export interface LayoutProps {
  language: Language;
  children: React.ReactNode;
}

export interface CourseProgress {
  totalLessons: number;
  completedLessons: number;
  currentLesson: number;
}

export interface FooterLink {
  id: string;
  label: string;
  labelAr: string;
  href: string;
  icon: LucideIcon;
}

export interface CourseData {
  courses: Course[];
}

export type Page = 'home' | 'courses' | 'course-page' | 'dashboard';