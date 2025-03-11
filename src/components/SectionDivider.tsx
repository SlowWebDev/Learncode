import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'curve';
  className?: string;
  flip?: boolean;
}

export default function SectionDivider({ variant = 'wave', className = '', flip = false }: SectionDividerProps) {
  const paths = {
    wave: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    diagonal: "M0,160L1440,0L1440,320L0,320Z",
    curve: "M0,224L1440,96L1440,320L0,320Z"
  };

  return (
    <div className={`section-divider h-[150px] w-full overflow-hidden ${className}`}>
      <svg
        className={`h-full w-[calc(100%+48px)] transform ${flip ? 'rotate-180' : ''} transition-transform duration-300`}
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