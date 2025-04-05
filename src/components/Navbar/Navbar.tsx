'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './Navbar.module.css';

interface ItemProps {
  text: string;
  route: string;
}

const Item: React.FC<ItemProps> = ({ text, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
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
        <Item text="Experiences" route="#experiences" />
        <Item text="Education" route="#education" />
        <Item text="Projects" route="#projects" />
      </div>
    </nav>
  );
};

export default Navbar;
