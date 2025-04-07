'use client';
import React, { useEffect, useRef, useState } from 'react';
import Page from '../Page/page';
import styles from './book.module.css';

const NUM_PAGES = 3;

export const Book: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bookPosition, setBookPosition] = useState(0); // Track book position (left or right)
  const [isSliding, setIsSliding] = useState(false); // Flag to track if sliding is in progress
  const pagesRef = useRef<Array<HTMLDivElement | null>>([]);
  
  const handlePageClick = (pageIndex: number, side: 'front' | 'back') => {
    if (isAnimating || isSliding) return; // no clicking while flipping or sliding

    if (pageIndex === 0 && side === 'front') {
      // first page front - slide right
      slideBook('right');
      goNext(pageIndex);
    } else if (pageIndex === NUM_PAGES - 1 && side === 'front') {
      // last page front - slide to center position to make the back visible properly
      slideBook('center');
      goNext(pageIndex);
    } else if (pageIndex === 0 && side === 'back') {
      // first page back - slide left
      slideBook('left');
      goBack(pageIndex);
    } else if (pageIndex === NUM_PAGES - 1 && side === 'back') {
      // last page back - slide to right
      slideBook('right');
      goBack(pageIndex);
    } else {
      // handle normally without sliding
      if (side === 'front') {
        goNext(pageIndex);
      } else if (side === 'back') {
        goBack(pageIndex);
      }
    }
  };

  const goNext = (pageIndex: number) => {
    setIsAnimating(true);
    const page = pagesRef.current[pageIndex];
    
    if (page) {
      page.classList.add(styles.flipped);
      setTimeout(() => {
        if (page) {
          page.style.zIndex = '0';
        }
        setIsAnimating(false);
      }, 1000); // duration
    }
    
    setCurrentPage(pageIndex + 1);
  };

  const goBack = (pageIndex: number) => {
    setIsAnimating(true);
    const page = pagesRef.current[pageIndex];
    
    if (page) {
      page.classList.remove(styles.flipped);
      page.style.zIndex = `${NUM_PAGES - pageIndex}`;
    }
    
    setCurrentPage(pageIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // duration
  };

  const slideBook = (direction: 'left' | 'right' | 'center') => {
    if (isSliding) return;

    setIsSliding(true);
    
    // position based on direction
    let position = 0;
    if (direction === 'right') {
      position = 225;
    } else if (direction === 'left') {
      position = 0;
    } else if (direction === 'center') {
      position = 450;
    }
    
    setBookPosition(position);

    setTimeout(() => {
      setIsSliding(false); 
    }, 1000); // delay = animation
  };

  useEffect(() => {
    pagesRef.current.forEach((page, index) => {
      if (page) {
        page.style.zIndex = `${NUM_PAGES - index}`;
        
        if (index < currentPage) {
          page.classList.add(styles.flipped);
        } else {
          page.classList.remove(styles.flipped);
        }
      }
    });
  }, []);

  // data
  const pagesData = [
    {
      company: 'Book of Experiences',
      title: '',
      dates: '',
      descriptions: [],
      customStyles: 'cover',
    },
    {
      company: 'JPMorganChase',
      title: 'Software Engineer Intern',
      dates: 'June 2025 - Present',
      descriptions: ['Collaborated with stakeholders', 'Improved user interface', 'Optimized performance'],
      customStyles: 'regularPage'
    },
    {
      company: 'Company C',
      title: 'Project Z',
      dates: 'Jun 2023 - Present',
      descriptions: ['Focused on scalability', 'Implemented new features', 'Increased revenue'],
      customStyles: 'regularPage'
    },
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.book}
        style={{ transform: `translateX(${bookPosition}px)` }}
      >
        {pagesData.map((data, i) => (
          <div
            key={i}
            ref={(el) => (pagesRef.current[i] = el)}
            className={`${styles.paper} ${styles[data.customStyles]}`}
            style={{ zIndex: NUM_PAGES - i }}
          >
            <div
              className={styles.front}
              onClick={() => handlePageClick(i, 'front')}
            >
              <div className={styles.content}>
                <Page {...data} />
              </div>
            </div>
            <div
              className={styles.back}
              onClick={() => handlePageClick(i, 'back')}
            >
              <div className={styles.content}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;