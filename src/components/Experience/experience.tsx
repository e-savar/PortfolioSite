'use client';
import React from 'react';
import styles from './experience.module.css';

interface ExperienceProps {
  company: string;
  title: string;
  dates: string;
  descriptions: string[];
}

export const Experience: React.FC<ExperienceProps> = ({ company, title, dates, descriptions }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p>
          <strong>{company}</strong> - {title}
        </p>
        <p>{dates}</p>
        <ul>
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      <div className={styles.timeline}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Experience;
