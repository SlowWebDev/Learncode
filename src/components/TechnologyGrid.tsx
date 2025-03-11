import React from 'react';
import { Technology } from '../types';
import { ArrowRight } from 'lucide-react';

const technologies: Technology[] = [
  { id: 'html', name: 'HTML', icon: '🌐', level: 'Beginner', progress: 0, color: 'orange' },
  { id: 'css', name: 'CSS', icon: '🎨', level: 'Beginner', progress: 0, color: 'blue' },
  { id: 'js', name: 'JavaScript', icon: '⚡', level: 'Intermediate', progress: 0, color: 'yellow' },
  { id: 'ts', name: 'TypeScript', icon: '📘', level: 'Intermediate', progress: 0, color: 'blue' },
  { id: 'react', name: 'React', icon: '⚛️', level: 'Advanced', progress: 0, color: 'cyan' },
  { id: 'node', name: 'Node.js', icon: '🟢', level: 'Intermediate', progress: 0, color: 'green' },
  { id: 'express', name: 'Express', icon: '🚂', level: 'Intermediate', progress: 0, color: 'gray' },
  { id: 'vite', name: 'Vite', icon: '⚡', level: 'Beginner', progress: 0, color: 'purple' },
];

export default function TechnologyGrid() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Master Modern Web Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{tech.icon}</span>
                <span className={`px-3 py-1 rounded-full text-sm bg-${tech.color}-100 dark:bg-${tech.color}-900 text-${tech.color}-800 dark:text-${tech.color}-200`}>
                  {tech.level}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
                <div
                  className={`h-full bg-${tech.color}-500 rounded-full transition-all duration-300`}
                  style={{ width: `${tech.progress}%` }}
                />
              </div>
              
              <button className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 flex items-center justify-center space-x-2 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}