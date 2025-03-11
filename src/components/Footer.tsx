import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { FooterLink, Language } from '../types';

const socialLinks: FooterLink[] = [
  { id: 'github', label: 'GitHub', labelAr: 'جيثهب', href: 'https://github.com', icon: Github },
  { id: 'twitter', label: 'Twitter', labelAr: 'تويتر', href: 'https://twitter.com', icon: Twitter },
];



interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Learncode
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {language === 'en' 
                ? 'Empowering developers to build the future through interactive learning.'
                : 'تمكين المطورين لبناء المستقبل من خلال التعلم التفاعلي.'}
            </p>
          </div>


          <div>
            <h4 className="text-sm font-semibold mb-4">
              {language === 'en' ? 'Follow Us' : 'تابعنا'}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={language === 'en' ? social.label : social.labelAr}
                >
                  {social.icon && <social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center space-x-2">
            <span>© {currentYear} LearnCode.</span>
            <span className="inline-flex items-center">Made By 1SLOW
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}