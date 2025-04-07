import React from 'react';
import styles from '../Book/book.module.css';

interface PageProps {
  company: string;
  title: string;
  dates: string;
  descriptions: string[];
  customStyle?: string;
}

const Page: React.FC<PageProps> = ({ company, title, dates, descriptions, customStyle = '' }) => {
  return (
    <div className={`${styles.pageContent} ${customStyle ? styles[customStyle] : ''}`}>
      <div className={styles.company}><strong>{company}</strong></div> 
      <div className={styles.title}>{title}</div>
      <div className={styles.dates}>{dates}</div>
      <ul className={styles.descriptionList}>
        {descriptions.map((desc, index) => (
          <li key={index} className={styles.descriptionItem}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
