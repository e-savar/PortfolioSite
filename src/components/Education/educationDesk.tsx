'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './desk.module.css';

const papers = [
  {
    id: 'degree',
    label: 'Degree',
    details: (
      <>
        <h3>Bachelor of Science</h3>
        <p>The Ohio State University</p>
        <p>Computer Science Engineering</p>
        <p>Double Major in Mathematics</p>
        <p>Expected May 2026</p>
      </>
    ),
    top: '12%',
    left: '10%',
    rotate: '0deg',
  },
  {
    id: 'activities',
    label: 'Extracurriculars',
    details: (
      <>
        <h3>Extracurriculars</h3>
        <ul>
          <li>VP, Scarlet Investment Group</li>
          <li>TA, CSE 2331</li>
        </ul>
      </>
    ),
    top: '50%',
    left: '35%',
    rotate: '0deg',
  },
  {
    id: 'courses',
    label: 'Relevant Courses',
    details: (
      <>
        <h3>Relevant Courses</h3>
        <ul>
          <li>Algorithms</li>
          <li>Operating Systems</li>
          <li>Machine Learning</li>
        </ul>
      </>
    ),
    top: '20%',
    left: '65%',
    rotate: '0deg',
  },
];

export default function EducationDesk() {
  const [activePaper, setActivePaper] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setActivePaper(null);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePaper(null);
    };

    if (activePaper) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePaper]);

  return (
    <div className={styles.deskWrapper}>
      {activePaper && <div className={styles.backdrop} />}
      <div className={styles.deskContainer} ref={containerRef}>
        {papers.map((paper) => {
          const isActive = activePaper === paper.id;
          return (
            <div
              key={paper.id}
              className={`${styles.paperItem} ${isActive ? styles.active : ''}`}
              style={{
                top: isActive ? '50%' : paper.top,
                left: isActive ? '50%' : paper.left,
                transform: isActive
                  ? 'translate(-50%, -50%) scale(1.3)'
                  : `rotate(${paper.rotate})`,
                zIndex: isActive ? 100 : 1,
                fontWeight: isActive ? '400' : '600',
              }}
              onClick={() =>
                setActivePaper(isActive ? null : paper.id)
              }
            >
              {isActive ? paper.details : paper.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}