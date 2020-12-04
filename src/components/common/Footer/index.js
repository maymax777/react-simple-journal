import React from 'react';
import styles from './style.module.scss';

function Footer({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}

export default Footer;
