import React from 'react';
import styles from '../styles/BenefitsSection.module.css';
import frame4 from '../images/frame_4.png';

interface BenefitProps {
  title: string;
  description: string;
}

const benefitsData: BenefitProps[] = [
  {
    title: 'Built with you in mind',
    description: 'We know how important it is to maintain strong relationships with clients.',
  },
  {
    title: 'The Perfect Salon Services',
    description:
      'Talented, educated, and fashion-forward artists meet the unique needs of clients.',
  },
  {
    title: 'Skin Deep Experiences',
    description:
      'Appropriate for all skin types, sun damage, fine lines and wrinkles, acne, and oily.',
  },
  {
    title: 'Essential Spa Pedicure',
    description:
      'Indulge in a soothing foot bath along with a callous smoothing exfoliating scrub.',
  },
  {
    title: 'Skilled Spa Services',
    description: 'Our skilled estheticians offer an array of refreshing treatments.',
  },
  {
    title: 'Perfect & Natural Products',
    description:
      'We offer the very best in luxury beauty products for both hair and skin.',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.subtitle}>OUR AWESOME BENEFITS</h3>
      <h2 className={styles.title}>What you'll get from Us</h2>
      <div className={styles.grid}>
        {benefitsData.map((benefit, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>
              <img src={frame4} alt="frame4" />
              {/* <span>✔</span> */}
            </div>
            <h4 className={styles.cardTitle}>{benefit.title}</h4>
            <p className={styles.cardDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
