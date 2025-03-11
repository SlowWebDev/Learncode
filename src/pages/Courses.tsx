import React from 'react';
import { Language } from '../types';
import CourseCatalog from '../components/CourseCatalog';

interface CoursesProps {
  language: Language;
  onStartCourse: (courseId: string) => void;
}

export default function Courses({ language, onStartCourse }: CoursesProps) {
  return (
    <main className="pt-20">
      <CourseCatalog 
        language={language} 
        onStartCourse={onStartCourse} 
      />
    </main>
  );
}