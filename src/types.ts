export type Course = {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'frontend' | 'backend' | 'database';
  students: number;
  chapters: number;
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