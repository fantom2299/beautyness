import React from 'react';
import styles from '../styles/Footer.module.css';
import logo from '../images/logo.svg';
import facebook from '../images/facebook2.png';
import twitter from '../images/twiter.png';
import linkedin from '../images/linkedin2.png';
import instagram from '../images/instagram.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <img src={logo} alt='logo' />
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#" className={styles.icon}>
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#" className={styles.icon}>
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="#" className={styles.icon}>
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div className={styles.linksSection}>
          <div>
            <h4 className={styles.title}>Explore</h4>
            <ul className={styles.list}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.title}>Utility Pages</h4>
            <ul className={styles.list}>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">404 Not Found</a></li>
              <li><a href="#">Password Protected</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.title}>Keep in Touch</h4>
            <ul className={styles.list}>
              <li>Address: 24A Kingston St, Los Vegas</li>
              <li>Mail: support@doctors.com</li>
              <li>Phone: (+22) 123-4567-900</li>
            </ul>
          </div>
          <div>
            <h4 className={styles.title}>Working Hours</h4>
            <ul className={styles.list}>
              <li>Mon to Fri: 7am - 6pm</li>
              <li>Sat: 9am - 7pm</li>
              <li>Sun: 9am - 6pm</li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
