'use client';
import React, { useEffect, useRef, useState } from 'react';
import Page from '../Page/page';
import styles from './book.module.css';

const NUM_PAGES = 4;

export const Book: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bookPosition, setBookPosition] = useState(0); // Track book position (left or right)
  const [isSliding, setIsSliding] = useState(false); // Flag to track if sliding is in progress
  const pagesRef = useRef<HTMLDivElement[]>([]);
  
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
      descriptions: [],
      customStyles: 'regularPage'
    },
    {
      company: 'Immuta',
      title: 'Research Engineer/Scientist Intern',
      dates: 'May 2024 - April 2025',
      descriptions: ["Optimized sensitive data discovery services by leveraging finite automata theory in Python and through pattern improvement, leading to an improvement in data classification by 36\% and a decrease in error rate to less than 1\%",
      "Developed a semantic similarity clustering model in PyTorch and matplotlib enabling hierarchical data matching",
      "Built a service in Typescript to generate SQL for integration testing across Snowflake, Databricks, and Redshift",
      "Created a copilot evaluation tool using Python to observe variability in subject capturing and generations",
      "Used AWS Bedrock to create a generative AI synonym detection service as part of Immuta's policy copilot"],
      customStyles: 'regularPage'
    },
    {
      company: 'DataLab at Ohio State',
      title: 'Undergraduate Researcher',
      dates: 'October 2023 - January 2025',
      descriptions: ["Researched applications of stochastic differential equations on diffusion models for video and image generation",
      "Developed uncertainty calibration technique applying transformations to LLM logit outputs for determining accuracy",
      "Created an engine leveraging OpenCV, Python, and CLIP to analyze videos and generate scene descriptions to enable searchable indexing of relevant video segments based on text queries"],
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
            ref={(el) => {
              if (el) pagesRef.current[i] = el;
            }}
            
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
              <div className={styles.content}>Click to go Back</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;