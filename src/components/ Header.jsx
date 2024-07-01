import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1><Link to="/" className={styles.logo}>Wiki Search</Link></h1>
    </header>
  );
};

export default Header;