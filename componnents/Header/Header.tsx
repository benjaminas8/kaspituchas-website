"use client";

import React from 'react';
import Logo from '../Logo/Logo';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
