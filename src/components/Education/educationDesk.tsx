'use client';
import React, { useState } from 'react';
import styles from './desk.module.css';

const items = [
  { name: 'diploma', label: 'Diploma', top: '15%', left: '10%', rotate: '-4deg' },
  { name: 'notebook', label: 'Notebook', top: '45%', left: '35%', rotate: '3deg' },
  { name: 'flyer', label: 'Club Flyer', top: '30%', left: '65%', rotate: '-2deg' },
];
export default function EducationDesk() {
  return (
    <div className={styles.deskContainer}>
      <div className={`${styles.paperItem} ${styles.diploma}`} style={{ top: '10%', left: '8%', transform: 'rotate(-4deg)' }}>
        <h2 className={styles.diplomaTitle}>Degree</h2>
        <p className={styles.diplomaText}>Bachelor of Science</p>
        <p className={styles.diplomaText}>Computer Science</p>
        <p className={styles.diplomaSchool}>The Ohio State University</p>
        <p className={styles.diplomaYear}>Expected May 2026</p>
      </div>

      <div className={`${styles.paperItem} ${styles.notebook}`} style={{ top: '40%', left: '30%', transform: 'rotate(2deg)' }}>
        <h3><strong>Relevant Coursework</strong></h3>
        <ul>
          <li>Algorithms & Data Structures</li>
          <li>Operating Systems</li>
          <li>Machine Learning</li>
        </ul>
      </div>
      <div className={`${styles.paperItem} ${styles.diploma}`} style={{ top: '10%', left: '51%', transform: 'rotate(6deg)' }}>
        <h2 className={styles.diplomaTitle}>Dual Degree</h2>
        <p className={styles.diplomaText}>Bachelor of Science</p>
        <p className={styles.diplomaText}>Computer Science</p>
        <p className={styles.diplomaSchool}>The Ohio State University</p>
        <p className={styles.diplomaYear}>Expected May 2026</p>
      </div>

      <div className={`${styles.paperItem} ${styles.flyer}`} style={{ top: '25%', left: '73%', transform: 'rotate(-2deg)' }}>
        <h3><strong>Extracurriculars</strong></h3>
        <ul>
          <li>Founder/VP of Quant, Scarlet Investment Group</li>
          <li>TA, CSE 2331</li>
        </ul>
      </div>
    </div>
  );
}
