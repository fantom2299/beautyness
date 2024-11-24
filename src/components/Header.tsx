import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../images/logo.svg'


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.contactInfo}>
        <i className={styles.phoneIcon}></i>
        <span>Call Us - (+22) 123 456 7890</span>
      </div>
      <nav className={styles.nav}>
        <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</a>
        <a href="#" className={styles.navLink}>About</a>
        <a href="#" className={styles.navLink}>Pages</a>
        <a href="#" className={styles.navLink}>Contact Us</a>
        <i className={`${styles.socialIcon} ${styles.facebook}`}></i>
        <i className={`${styles.socialIcon} ${styles.twitter}`}></i>
        <i className={`${styles.socialIcon} ${styles.linkedin}`}></i>
      </nav>
      <button className={styles.reservationButton}>
        <i className={styles.reservationIcon}></i> RESERVATION
      </button>
    </header>
  );
};

export default Header;

