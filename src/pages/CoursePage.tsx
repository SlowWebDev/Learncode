import React, { useState } from 'react';
import { Course, Language, VideoLesson } from '../types';
import ReactPlayer from 'react-player';
import { Play, ChevronLeft } from 'lucide-react';

interface CoursePageProps {
  course: Course;
  language: Language;
  onBack: () => void;
}

export default function CoursePage({ course, language, onBack }: CoursePageProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson>(course.videos[0]);

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{language === 'ar' ? 'العودة إلى الدورات' : 'Back to Courses'}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-xl overflow-hidden aspect-video mb-6">
              <ReactPlayer
                url={selectedVideo.videoUrl}
                width="100%"
                height="100%"
                controls
                playing={false}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h1 className="text-2xl font-bold mb-2">
                {language === 'ar' ? selectedVideo.titleAr : selectedVideo.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'ar' ? selectedVideo.descriptionAr : selectedVideo.description}
              </p>
            </div>
          </div>

          {/* Playlist Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'قائمة الدروس' : 'Course Lessons'}
            </h2>
            <div className="space-y-2">
              {course.videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`w-full text-left p-4 rounded-lg flex items-start gap-3 transition-colors ${
                    selectedVideo.id === video.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Play className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-1 line-clamp-2">
                      {language === 'ar' ? video.titleAr : video.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {video.duration}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}