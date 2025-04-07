'use client';
import React, { useRef, useState } from 'react';
import styles from './book.module.css';

const NUM_PAGES = 3;

export const Book: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // for animation delay
  const pagesRef = useRef<Array<HTMLDivElement | null>>([]);

  const handlePageClick = (pageIndex: number, side: 'front' | 'back') => {
    if (isAnimating) return; // prevents flipping while animation is in progress

    if (side === 'front') {
      goNext(pageIndex);
    } else if (side === 'back') {
      goBack(pageIndex);
    }
  };

  const goNext = (pageIndex: number) => {
    if (currentPage < NUM_PAGES) {
      setIsAnimating(true);
      const page = pagesRef.current[pageIndex];
      if (page) {
        page.classList.add(styles.flipped);
        // Delay z-index change until after flip animation completes
        setTimeout(() => {
          if (page) {
            page.style.zIndex = "0";
          }
          setIsAnimating(false); // end
        }, 1000); // delay = animation time
      }
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goBack = (pageIndex: number) => {
    if (currentPage > 0) {
      setIsAnimating(true);
      const page = pagesRef.current[pageIndex];
      if (page) {
        page.classList.remove(styles.flipped);
        page.style.zIndex = `${NUM_PAGES - pageIndex}`;
      }
      setCurrentPage((prev) => prev - 1);

      // delay
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // delay = animation time
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.book}>
        {[...Array(NUM_PAGES)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (pagesRef.current[i] = el)}
            className={styles.paper}
            style={{ zIndex: NUM_PAGES - i }}
          >
            <div
              className={styles.front}
              onClick={() => handlePageClick(i, 'front')}
            >
              <div className={styles.content}>Front {i + 1}</div>
            </div>
            <div
              className={styles.back}
              onClick={() => handlePageClick(i, 'back')}
            >
              <div className={styles.content}>Back {i + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
