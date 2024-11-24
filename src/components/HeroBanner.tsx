import React from 'react';
import styles from '../styles/HeroBanner.module.css'; // Подключаем стили
import women from '../images/women.svg'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_content}>
        <p className={styles.intro_text}>Welcome to Beautyness!!!</p>
        <h1 className={styles.text_h1}>Bring The well being & beauty naturally!!!</h1>
        <p className={styles.description}>
          Your body does a lot for you, and your caring therapist can help you return the favor 
          in a way that benefits both your physical and mental wellness.
        </p>
        <button className={styles.reservation_button}>Make a Reservation</button>
      </div>

      <div className={styles.hero_image}>
        <img src={women} className={styles.woman} alt="Beauty Woman" />
      </div>
    </section>
  );
};

export default HeroSection;
