import React from 'react';
import styles from '../Book/book.module.css';

interface PageProps {
  company: string;
  title: string;
  dates: string;
  descriptions: string[];
}

const Page: React.FC<PageProps> = ({ company, title, dates, descriptions }) => {
  return (
    <div className={styles.pageContent}>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{dates}</p>
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
