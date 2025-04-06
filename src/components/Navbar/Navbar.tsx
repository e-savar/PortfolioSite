'use client';

import React from 'react';
import styles from './Navbar.module.css';

interface ItemProps {
  text: string;
  route: string;
}

const Item: React.FC<ItemProps> = ({ text, route }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor link behavior

    // Check if the route is the Home route
    if (route === '/') {
      // Scroll to the top of the page for Home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Get the element corresponding to the route (for sections)
      const section = document.querySelector(route);
      if (section) {
        const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
        const targetPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 40;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth', // Smooth scroll
        });
      }
    }
  };

  return (
    <button onClick={handleClick} className={styles.navItem}>
      {text}
    </button>
  );
};

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
        <Item text="Home" route="/" />
        <Item text="Education" route="#education" />
        <Item text="Experiences" route="#experiences" />
        <Item text="Projects" route="#projects" />
      </div>
    </nav>
  );
};

export default Navbar;
