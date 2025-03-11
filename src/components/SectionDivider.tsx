import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'curve';
  className?: string;
  flip?: boolean;
}

export default function SectionDivider({ variant = 'wave', className = '', flip = false }: SectionDividerProps) {
  const paths = {
    wave: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    diagonal: "M0,160L1440,0L1440,0L0,0Z",
    curve: "M0,224L1440,96L1440,0L0,0Z"
  };

  return (
    <div className={`section-divider w-full overflow-hidden ${className}`} style={{ marginBottom: '-1px' }}>
      <svg
        className={`w-[calc(100%+48px)] transform ${flip ? 'rotate-180' : ''} transition-transform duration-300`}
        style={{ height: '150px' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}