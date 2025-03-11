export type Course = {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'frontend' | 'backend' | 'database';
  students: number;
  chapters: number;
};

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'ar';

export type SearchResult = {
  id: string;
  title: string;
  type: 'course' | 'tutorial' | 'documentation';
  url: string;
};